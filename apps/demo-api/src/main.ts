import { createServer } from './app/server';

const PORT = 3001;

createServer().then((server) => {
  server.listen(PORT, (err) => {
    if (err) {
      console.log('Unable to start server', err);
      process.exit(0);
    }
    console.log(`Server is running on ${PORT}`);
  });
});
