import express from 'express';
import next from 'next';
import fs from 'fs-extra';
import https from 'https';
import appRootPath from 'app-root-path';
import sharedRoutes from '@routes/sharedRoutes';

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV === 'development';
const app = next({ dev });
const sharedRoutesHandler = sharedRoutes.getRequestHandler(app);

const keyPath = appRootPath.resolve('/config/pem/server.key.pem');
const certPath = appRootPath.resolve('/config/pem/server.cert.pem');

app.prepare().then(() => {
  const server = express();

  server.use(sharedRoutesHandler);

  https.createServer({
    key: fs.readFileSync(keyPath),
    cert: fs.readFileSync(certPath)
  }, server)
  .listen(3000, (err) => {
    if (err) throw err;
    console.log('>>> Ready on https://localhost:3000');
  });
});