const PetShelter = require('../models/pet.model');

module.exports = {
    getAll: (req, res) => {
        PetShelter.find({})
            .sort({petName: "ascending" })
            .then((allPets) => {
                console.log(allPets);
                res.json(allPets);
            })
            .catch((err) => {
                console.log("error in getAll");
                console.log(err);
                res.json(err);
            });
    },

    create: (req, res) => {
        console.log(req.body);

        PetShelter.create(req.body)
            .then((newPet) => {
                console.log(newPet);
                res.json(newPet);
            })
            .catch((err) => {
                console.log("error in create");
                console.log(err);
                res.json(err);
            });
    },

    getOne: (req, res) => {
        console.log(req.params.id);

        PetShelter.findById(req.params.id)
            .then((onePet) => {
                console.log(onePet);
                res.json(onePet);
            })
            .catch((err) => {
                console.log("error in getOne");
                console.log(err);
                res.json(err);
            });
    },

    update: (req, res) => {
        console.log(req.params.id);
        console.log(req.body);

        PetShelter.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        })
            .then((updatedPet) => {
                console.log(updatedPet);
                res.json(updatedPet);
            })
            .catch((err) => {
                console.log("error in update");
                console.log(err);
                res.json(err);
            });
    },

    delete: (req, res) => {
        console.log(req.params.id);

        PetShelter.findByIdAndDelete(req.params.id)
            .then((deletedPet) => {
                console.log(deletedPet);
                res.json(deletedPet);
            })
            .catch((err) => {
                console.log("error in delete");
                console.log(err);
                res.json(err);
            });
    },
}