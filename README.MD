# Email Sender

## Descrição

O Email Sender é uma aplicação que envia emails personalizados dinamicamente com base na hora do dia. Utilizando Nodemailer e TypeScript, a aplicação é capaz de enviar mensagens de email para uma lista de clientes, oferecendo saudações e conteúdos específicos dependendo do momento em que o email é enviado.

## Funcionalidades

- Envio de emails com saudações personalizadas (Bom dia, Boa tarde, Boa noite)
- Divisão de grandes listas de emails em chunks menores para facilitar o envio
- Utilização de variáveis de ambiente para configuração segura
- Construído com TypeScript para maior robustez e manutenção

## Pré-requisitos

- Node.js
- PNPM (ou npm/yarn)

## Instalação

1. Clone o repositório:

```bash
git clone https://github.com/EdilandoSaturnino/email-sender.git
cd email-sender
```

2. Instale as dependências:

```bash
pnpm install
```

3. Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:

```env
SMTP_HOST=
SMTP_PORT=
SMTP_USER=
SMTP_PASS=
SENDER_NAME=
```

## Uso

1. Compile o projeto TypeScript:

```bash
pnpm build
```

2. Execute o código compilado:

```bash
pnpm start
```

## Estrutura do Projeto

```
project-root/
  ├─ node_modules/
  ├─ src/
  │    ├─ index.ts
  │    ├─ emailList.ts
  ├─ .env
  ├─ dist/
  ├─ package.json
  ├─ tsconfig.json
  ├─ .gitignore
  ├─ README.md
```

## Autor

Edilando Saturnino

## Licença

Este projeto está licenciado sob a licença ISC.