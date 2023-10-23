const express = require('express');
const next = require('next');
const path = require('path');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  console.log('Preparing app...');
  const server = express();

  server.get('*', (req, res, next) => {
    if (req.url.endsWith('pdf.worker.js')) {
      const filePath = path.join(__dirname, 'public/assets/js/pdf.worker.js');
      console.log(`Attempting to serve: ${filePath}`);
      res.sendFile(filePath, err => {
        if (err) {
          console.error(`Error sending file: ${err}`);
          res.status(404).send('File not found');
        }
      });
    } else {
      return handle(req, res);
    }
  });
  
  server.listen(3000, (err) => {
    if (err) throw err;
    console.log('> Ready on http://localhost:3000');
  });
});
