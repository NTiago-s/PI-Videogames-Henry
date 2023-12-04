const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const PORT = 3001
//* conexion del servidor y tambien conexion con la base de datos
conn.sync({ alter: true }).then(() => {
  server.listen(PORT, () => {
    console.log('Server listening at', PORT);
  });
});
