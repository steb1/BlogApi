const mongoose = require('mongoose');

const LivreShema = new mongoose.Schema({
    Auteur : {
        type: String,
        required : true
    },
    Titre : {
        type: String,
        required : true
    },
     Contenu: {
        type: String,
        required : true
    },
    Desc : {
        type : String,
        required: true 
    },
    Categorie : {
        type : String,
        required : true
    },
    DateSortie : {
        type: Date,
        default: Date.now
    },
    MaisonEdition : {
        type : String,
        required : true
    },
    Stock : {
        type : Number,
        required : true,
        default : 2
    }
})

module.exports = new mongoose.model('Livre',LivreShema);