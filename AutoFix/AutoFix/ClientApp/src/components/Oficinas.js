import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import Rating from "@material-ui/lab/Rating";
import ImagemOficina from "../assets/imagem.png";
import OficinaIcon from "../assets/sedan.svg";
import RotaIcon from "../assets/routes.svg";
import { useHistory } from "react-router-dom";
import axios from "axios";

const Oficinas = ({ className }) => {
  const [value, setValue] = React.useState(2);
  const [position, setPosition] = useState();
  const history = useHistory();

  const fetchMotorista = useCallback(() => {
    return axios
      .get(`http://localhost:5001/api/motorista`)
      .then((response) => console.log(response));
  }, []);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setPosition(position);
    });
    fetchMotorista();
  }, [fetchMotorista]);

  return (
    <div className={className}>
      <section className="section-sm">
        <div
          className="container"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: "2rem",
          }}
        >
          <div
            style={{
              padding: "2rem",
              display: "flex",
              justifyContent: "space-between",
              background: "#F7F7F7",
              border: 0,
              boxShadow: "0 5px 7px 0 rgba(0, 0, 0, 0.15)",
              borderRadius: "10px",
              width: "100%",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span className="oficina">Oficina 1</span>
              <span className="azul">
                Telefone:<p>(00) 99999-9999</p>
              </span>
              <span className="azul">
                Funcionamento:<p>Segunda a Sexta: 08 as 18hs</p>
              </span>
              <span className="azul">
                Endereço:<p>Avenida</p>
              </span>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                }}
              >
                <Rating
                  name="simple-controlled"
                  value={value}
                  disabled
                  onChange={(event, newValue) => {
                    setValue(newValue);
                  }}
                />
                <span
                  style={{
                    padding: "0.5rem",
                    border: "1px solid #CCCCCC",
                    borderRadius: "15px",
                    fontSize: "12px",
                    color: "#636262",
                  }}
                >
                  60 comentários
                </span>
                <button
                  onClick={() => history.push("/oficinas-visualizacao")}
                  className="button-oficina"
                >
                  <img src={OficinaIcon} alt="icon-oficina" />
                  Ver oficina
                </button>
                <button
                  className="button-icon"
                  onClick={() =>
                    window.open(
                      `https://www.google.com/maps/dir/${position?.coords?.latitude},${position?.coords?.longitude}/BHShopping`
                    )
                  }
                >
                  <img src={RotaIcon} alt="icon-rota" />
                  Ver Rotas
                </button>
              </div>
            </div>
            <img src={ImagemOficina} alt="" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default styled(Oficinas)`
  .oficina {
    font-size: 20px;
    font-weight: 600;
  }
  .azul {
    font-weight: 400;
    color: #065679;
    margin-top: 1.1rem;

    p {
      color: #000;
    }
  }

  .button-oficina {
    background-color: #065679;
  }
  .button-icon {
    background-color: #40403d;
    margin-left: 1rem;
  }

  button {
    margin-top: 1rem;
    color: #fff;
    box-shadow: 0 5px 7px 0 rgba(0, 0, 0, 0.15);
    border-radius: 10px;
    display: flex;
    padding: 0.8rem;
    border: 0;
    font-weight: bold;

    img {
      margin-right: 0.5rem;
    }
  }
`;
