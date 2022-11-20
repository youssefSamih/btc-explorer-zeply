import express from 'express';
import cors, { CorsOptions } from 'cors';
import axios from 'axios';

import { config } from './config';

const app = express();

const corsOptions: CorsOptions = {
  origin: config.corsOrigin || 'http://localhost:3000'
};

const errorResponse = {
  response: {
    status: 404,
    data: {
      error: 'not-found-or-invalid-arg',
      message: 'Item not found or argument invalid'
    }
  }
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// simple route
app.get('/', async (_: express.Request, res: express.Response) => {
  return res
    .status(errorResponse.response.status)
    .json(errorResponse.response.data);
});

app.get(
  '/address/:address',
  async (req: express.Request, res: express.Response) => {
    const searchedAddress = req.params.address;

    try {
      const { data } = await axios.get(
        `${config.apiUrl}/address/${searchedAddress}`
      );

      res.json(data);
    } catch (error: any) {
      res.status(error.response?.status).json({
        status: error.response?.status,
        data: error.response?.data
      });
    }
  }
);

app.get(
  '/transaction/:hash',
  async (req: express.Request, res: express.Response) => {
    const searchedHash = req.params.hash;

    try {
      const { data } = await axios.get(`${config.apiUrl}/tx/${searchedHash}`);

      res.json(data);
    } catch (error: any) {
      res.status(error.response?.status).json({
        status: error.response?.status,
        data: error.response?.data
      });
    }
  }
);

app.all('/*', async (_: express.Request, res: express.Response) => {
  return res
    .status(errorResponse.response.status)
    .json(errorResponse.response.data);
});

// set port, listen for requests
const PORT = config.port || 8080;

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log('Server is running on port', PORT);
});
