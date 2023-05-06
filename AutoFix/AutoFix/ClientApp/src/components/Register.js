import React, { useState } from "react";
import styled from "styled-components";
import RadioInput from "./RadioInput";
import { RadioGroup } from "@material-ui/core";
import InputText from "./InputText";
import { Form } from "informed";
import { useHistory } from "react-router-dom";

const Register = ({ className }) => {
  const history = useHistory();
  const [typeRegister, setTypeRegister] = useState("");

  return (
    <div className={className}>
      <section className="section-sm">
        <div
          className="container"
          style={{
            padding: "2rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            background: "#F7F7F7",
            border: 0,
            boxShadow: "0 5px 7px 0 rgba(0, 0, 0, 0.15)",
            borderRadius: "10px",
            width: "100%",
            alignItems: "center",
          }}
        >
          <h1>Faça seu cadastro aqui</h1>
          <hr
            style={{
              width: "198px",
              border: "5px solid #000000",
              borderRadius: "20px",
            }}
          />
          <Form style={{ width: "100%", marginTop: "1rem" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "1rem",
              }}
            >
              <RadioGroup
                onChange={(event) => setTypeRegister(event.target.value)}
              >
                <RadioInput
                  value="prestador_servico"
                  label="Prestador de serviço"
                />
                <RadioInput value="motorista" label="Motorista" />
              </RadioGroup>
            </div>
            {typeRegister === "prestador_servico" ? (
              <div className="row">
                <InputText label="Nome Oficina" field="nome_oficina" />
                <InputText label="Telefone" field="telefone" />
                <InputText label="Endereço" field="endereco" />
                <InputText
                  label="Horário de funcionamento"
                  field="funcionamento"
                />
                <InputText label="Email" field="email" />
                <div className="col-md-6">
                  <InputText
                    type
                    label="Senha (Mínimo 8 caracteres)"
                    field="senha"
                  />
                </div>
                <div className="col-md-6">
                  <InputText type label="Confirmar senha" field="nova_senha" />
                </div>
              </div>
            ) : typeRegister === "motorista" ? (
              <div className="row">
                <InputText label="Nome" field="nome" />
                <InputText label="Telefone" field="telefone" />
                <InputText label="Email" field="email" />
                <div className="col-md-6">
                  <InputText
                    type
                    label="Senha (Mínimo 8 caracteres)"
                    field="senha"
                  />
                </div>
                <div className="col-md-6">
                  <InputText type label="Confirmar senha" field="nova_senha" />
                </div>
              </div>
            ) : null}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "2rem",
              }}
            >
              <button onClick={() => history.push("/")} className="a-entrar">
                Voltar
              </button>
              <button type="submit" className="a-cadastro">
                Cadastrar
              </button>
            </div>
          </Form>
        </div>
      </section>
    </div>
  );
};

export default styled(Register)`
  .MuiFormGroup-root {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
  }
  .MuiTypography-body1 {
    font-size: 16px;
    font-weight: 600;
  }

  .a-cadastro {
    margin-left: 1rem;
  }
`;
