const mongoose = require('mongoose');
const db_name = "PetShelter";

mongoose.connect("mongodb://localhost/"+ db_name, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("Successfully connected to the " + db_name + " database"))
    .catch((err) => {
        console.log("Something went wrong while connecting with the databate " + db_name + ": ")
        console.log(err);  
    });
