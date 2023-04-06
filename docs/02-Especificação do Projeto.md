# Especificações do Projeto

<span style="color:red">Pré-requisitos: <a href="1-Documentação de Contexto.md"> Documentação de Contexto</a></span>

Definição do problema e ideia de solução a partir da perspectiva do usuário. É composta pela definição do  diagrama de personas, histórias de usuários, requisitos funcionais e não funcionais além das restrições do projeto.

Apresente uma visão geral do que será abordado nesta parte do documento, enumerando as técnicas e/ou ferramentas utilizadas para realizar a especificações do projeto

## Personas
As personas levantadas durante o processo de entendimento do problema são apresentadas abaixo.

| **Rosana**  |    |   |   
| ------------------- | ------------------- |  ---------------  |
| ![Rosana](https://user-images.githubusercontent.com/65399666/230479135-9d505d1c-7c4b-49a9-abe3-a88f0fc9f9ef.png)|  **Idade:** 26 anos -- **Ocupação:** Professora  |  **Aplicativos:** Instagram, PowerPoint, Classroom| 
**Motivações:** Casa Própria, Filhos, Pós-Graduação | **Frustrações:** Rotina, Exaustão, Problemas familiares |  **Hobbies/História:** Leitura, Trilhas, Natureza. |

| **Paulo**  |    |   |   
| ------------------- | ------------------- |  ---------------  |
| ![Paulo](https://user-images.githubusercontent.com/65399666/230479331-70d02220-0be7-4c68-be91-9a30caf61ff2.png)|  **Idade:** 60 anos -- **Ocupação:** Advogado  |  **Aplicativos:** LinkedIn, Facebook, WhatsApp
| 
**Motivações:** Família, Aposentadoria, Terreno próprio| **Frustrações:** Trânsito diário, Empresa, Saúde|  **Hobbies/História:** Pescaria, caminhada |

| **Marcia**  |    |   |   
| ------------------- | ------------------- |  ---------------  |
| ![Marcia](https://user-images.githubusercontent.com/65399666/230479504-70ac11d9-ce3a-4ba0-8899-3e86dceab857.png)|  **Idade:** 47 anos -- **Ocupação:** Antropóloga  |  **Aplicativos:** Facebook, WhatsApp, Aplicativo de jogos| 
**Motivações:** Viajar, Alimentação, Netos| **Frustrações:** Relacionamento Familiar |  **Hobbies/História:** Fotografia, Natação |

## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Marcia              | Visualizar oficinas mecânicas mais próximas    | o problema ser solucionado rapidamente |
|Marcia              | Entrar em contato com diversas oficinas mecânicas   | poder comparar e escolher o melhor preço|
|Paulo               | Um meio de pagamento facilitado    | mais agilidade  e segurança
|Paulo               | Visualizar as avaliações de outros clientes | para ter uma maior confiabilidade no serviço
|Rosana              | Um sistema de fácil entendimento | Situações de emergência
|Rosana              | Saber horário de funcionamento | encontrar profissionais disponíveis



## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001| O sistema deve ter página de cadastro de usuário | ALTA | 
|RF-002| O sistema deve ter página de login | BAIXA |
|RF-003| O sistema deve permitir escolher entre usuário ou prestador de serviços no momento do cadastro | MÉDIA |
|RF-004| O sistema deve permitir prestador de serviços cadastrar informações da empresa (horário de funcionamento, endereço, telefone, e-mail, pagamentos aceitos...) | ALTA |
|RF-005| O sistema deve permitir ao usuário avaliar o serviço | ALTA |
|RF-006| O usuário deve ser permitido visualizar a localização da Oficina ou Mecânico mais próximo | ALTA |
|RF-007| O sistema deve fornecer ao usuário o horário de funcionamento do estabelecimento | ALTA |

### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O site deve ter senhas de acesso e identificação para diferentes tipos de usuários: administradores, prestadores de serviço e clientes | MÉDIA | 
|RNF-002| Os dados pessoais devem ser armazenados sob a Lei Geral de Proteção de Dados Pessoais (LGPD) |  ALTA | 
|RNF-003| O sistema deve funcionar nos principais navegadores, como Chrome, Firefox, Edge, Opera. |  BAIXA | 
|RNF-004| O sistema deve gerenciar permissão de dados de login de acordo com tipo de perfil selecionado |  ALTA | 
|RNF-005| O site deverá ser fácil de usar, eficiente e acessível |  MÉDIA | 
|RNF-006| O site usará a api do google para ser usada de referencia a localização |  MÉDIA | 


## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| Não pode ser desenvolvido um módulo de backend        |



## Diagrama de Caso de Uso

![UseCase Diagram - AutoFix](https://user-images.githubusercontent.com/56806907/226222340-c3a0b335-a6b8-41d6-9ecf-203ba700eeb0.png)
