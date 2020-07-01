module.exports = (app) => {
    const infos = require('../controllers/info.controller.js');

    // Create a new Info
    app.post('/infos', infos.create);

    // Retrieve all Infos
    app.get('/infos', infos.findAll);

    // Retrieve a single Info with noteId
    app.get('/infos/:infoId', infos.findOne);

    // Update a Info with infoId
    app.put('/infos/:infoId', infos.update);

    // Delete a Info with infoId
    app.delete('/infos/:infoId', infos.delete);
}