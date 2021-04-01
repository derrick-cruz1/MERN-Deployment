const mongoose = require('mongoose');

const PetShelterSchema = new mongoose.Schema({
    petName: {
        type: String,
        required: [true, "You must have a pet name"],
        minlength: [ 3, "Your pet name must be at least three characters or longer"],
    },
    petType: {
        type: String,
        required: [true, "You must have a pet type"],
        minlength: [ 3, "Your pet type must have more than three characters or longer"],
    },
    petDescription: {
        type: String,
        required: [true, "You must have a pet description"],
        minlength: [ 3, "Your pet description must have more than three characters or longer"],
    },
    petSkillsOne: {
        type: String,
    },
    petSkillsTwo: {
        type: String,
    },
    petSkillsThree: {
        type: String,
    },
},
{timestamps: true});

module.exports = mongoose.model("PetShelter", PetShelterSchema);