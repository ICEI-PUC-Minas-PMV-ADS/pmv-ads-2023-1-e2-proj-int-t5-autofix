import React from "react";
import styled from "styled-components";
import WhatsAppIcon from "../assets/whatsapp.svg";
import { Rating } from "@material-ui/lab";

const OficinasView = ({ className }) => {
  const [value, setValue] = React.useState(2);
  return (
    <div className={className}>
      <section className="section-sm">
        <h2>Nome oficina</h2>
        <div
          className="container card-container"
          style={{ flexDirection: "column" }}
        >
          <span className="azul">Alguns dos principais serviços:</span>
          <ul
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 2fr",
              width: "100%",
            }}
          >
            <li>Suspensão</li>
            <li>Freios</li>
            <li>óleo e filtros</li>
          </ul>

          <button>
            <img src={WhatsAppIcon} alt="icon-whatsapp" />
            Chamar pelo WhatsApp
          </button>
        </div>
      </section>
      <section className="section-sm">
        <div className="container card-container">
          <div
            style={{
              marginTop: "1rem",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <span className="azul">Avaliações:</span>
            <Rating
              name="simple-controlled"
              value={value}
              disabled
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
            />
            <span style={{ marginTop: "0.5rem" }}>Texto da avaliacao</span>
          </div>

          <div style={{ marginLeft: "1.5rem", width: "40%" }}>
            <span className="azul">
              Avalie:
              <Rating
                style={{ marginLeft: "0.5rem" }}
                name="simple-controlled"
                value={value}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
              />
            </span>
            <textarea maxLength={1000} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default styled(OficinasView)`
  .card-container {
    padding: 2rem;
    display: flex;
    background: #f7f7f7;
    justify-content: space-between;
    border: 0;
    box-shadow: 0 5px 7px 0 rgba(0, 0, 0, 0.15);
    border-radius: 10px;
    width: 100%;
    align-items: flex-start;
    margin-top: 1.5rem;
  }

  textarea {
    width: 100%;
    max-width: 100%;
    font-size: 16px;
    padding: 5px;
    line-height: 1.5;
    background-color: white;
    border: 2px solid #f5f5f5;
    border-radius: 5px;

    &:disabled {
      cursor: no-drop;
    }
  }

  h2 {
    text-align: center;
  }
  .azul {
    display: flex;
    font-weight: 500;
    font-size: 18px;
    margin-bottom: 1rem;
    color: rgb(6, 86, 121);
    align-items: center;
  }

  ul {
    margin-top: 1rem;
  }

  button {
    margin-top: 1rem;
    background-color: rgb(51, 123, 31);
    color: rgb(255, 255, 255);
    box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 7px 0px;
    border-radius: 10px;
    font-size: 16px;
    display: flex;
    padding: 0.6rem;
    border: 0px;
    font-weight: bold;

    img {
      margin-right: 0.5rem;
    }
  }
`;
