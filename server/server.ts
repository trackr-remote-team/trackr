import express, { Application, NextFunction, Request, Response } from "express";
const path = require('path');

const app: Application = express();

import path from "path";


const PORT: number = 5137;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// app.use(express.static(path.join(__dirname, '../client/assets/index.html'))); //however we set up our static files amend line

app.get('/', (req, res) => {
  return res.sendFile(path.join(__dirname, '../client/assets/index.html'));
});


app.use('*', (req: Request, res: Response): Response<void> => {
  return res.sendStatus(404).send('Unknown Page');
});

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  const defaultErr = {
    log: 'Unknown Error',
    status: 500,
    message: { err: 'An Error Occurred' },
  };

  const errorObj = Object.assign({}, defaultErr, err);
  return res.status(errorObj.status).json(errorObj.message.err);
});

app.listen(PORT, () => console.log(`Listening on Port: ${PORT}...`));

module.exports = app;
