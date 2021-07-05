const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const { port } = require('./src/utils/config/index')
const { Type } = require('./src/db')
const { typesArray } = require('./src/utils/constants')

// Syncing all the models at once.
conn.sync({ force: true }).then(() => {
  server.listen(port, async() => {
    console.log(`%s listening at ${port}`); // eslint-disable-line no-console

    typesArray.forEach(async (type) => {
      await Type.create({
        name: type,
      });
    }) 
  });
});
