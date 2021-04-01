const PetShelterController = require("../controllers/pet.controller");

module.exports = (app) => {
    app.get('/api/pets', PetShelterController.getAll);
    app.post('/api/pets', PetShelterController.create);
    app.get('/api/pets/:id', PetShelterController.getOne);
    app.put('/api/pets/:id', PetShelterController.update);
    app.delete('/api/pets/:id', PetShelterController.delete);
}