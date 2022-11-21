# Getting Started with Create React App

create .env file in root project with this environment variable

PORT=8080
CORS_ORIGIN=http://127.0.0.1:3000
BLOCK_CHAIN_INFO_API_URI=https://chain.api.btc.com/v3
CURRENCY_BTC_RATE_API_URI=https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/btc.json

and inside client folder with this environment variable

REACT_APP_API_URI=http://localhost:8080
REACT_APP_WEBSOCKET_URI=wss://ws.blockchain.info/inv
NODE_ENV=development

This project was made with:

- Node.js

- TypeScript

- express

- Vite bundler

- React

- Rxjs

- Redux

- Redux observable

## Available Scripts on root of project

In the project directory, you can run:

### `npm run build`

Run build backend

### `npm run start:build`

Run build backend production server

### `npm run start:dev`

Run frontend in dev mode

### `npm run start:client:dev`

Run frontend in dev mode

### `npm run dev`

Run both backend and frontend in parallel in dev mode

### `npm start`

Build the node typescript into build folder and start this build

### `npm run lint`

Runs eslint check

### `npm run lint-and-fix`

Runs eslint with --fix flag

### `npm run prettier-format`

format code with prettier

### `npm run prettier-watch`

watch and format on change code

### `npm run prettier-watch`

watch and format on change code

### `npm run lint-staged`

for husky hooks running before each commit

## Available Scripts on client of project

### `npm start`

Start the client frontend in dev mode

### `npm start`

Start the client frontend in dev mode

### `npm run build`

Start the client frontend build

### `npm run preview`

Start the client frontend build preview production

## Available Scripts on e2e folder of project

### `npm start`

Start cypress e2e test
