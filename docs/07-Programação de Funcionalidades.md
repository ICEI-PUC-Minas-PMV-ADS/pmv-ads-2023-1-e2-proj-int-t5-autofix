# Programação de Funcionalidades

|ID    | Descrição do Requisito  | Artefato(s) produzido(s) |
|------|-----------------------------------------|----|
|RF-001| O sistema deve ter página de cadastro de usuário | Register.js | 
|RF-002| O sistema deve ter página de login | Login.js |
|RF-002| O sistema deve permitir escolher entre usuário ou prestador de serviços no momento do cadastro | Register.js |
|RF-004| O sistema deve permitir prestador de serviços cadastrar informações da empresa (horário de funcionamento, endereço, telefone, e-mail, pagamentos aceitos...)	 | Register.js |
|RF-005| O usuário deve ser permitido visualizar a localização da Oficina ou Mecânico mais próximo | OficinaView.js |

<a href="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e2-proj-int-t5-autofix/files/11533377/Manual.de.Identidade.Visual-1.pdf" target="_blank">Baixar PDF do Manual de Identidade Visual</a>

------------------------------------------------------------

# CSS padrão

a {
  color: #0366d6;
}

.btn:focus,
.btn:active:focus,
.btn-link.nav-link:focus,
.form-control:focus,
.form-check-input:focus {
  box-shadow: 0 0 0 0.1rem white, 0 0 0 0.25rem #258cfb;
}

code {
  color: #e01a76;
}

.btn-primary {
  color: #fff;
  background-color: #1b6ec2;
  border-color: #1861ac;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font: 400 18px "Poppins", sans-serif;
  color: #313131;
}

a.navbar-brand {
  white-space: normal;
  text-align: center;
  word-break: break-all;
}

html {
  font-size: 14px;
}
@media (min-width: 768px) {
  html {
    font-size: 16px;
  }
}

.box-shadow {
  box-shadow: 0 0.25rem 0.75rem rgba(0, 0, 0, 0.05);
}

button {
  box-shadow: 0 5px 7px 0 rgba(0, 0, 0, 0.15);
  border-radius: 10px;
  padding: 0.5rem 1.2rem 0.5rem 1.2rem;
  font-size: 18px;
}

.a-cadastro {
  background-color: #0e3c50;
  color: #f5f5f5;
  border: none;
}
.a-entrar {
  background-color: #fff;
  color: #000;
  border: 1px solid #ccc;
  margin-left: 1rem;
}


