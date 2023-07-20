const mongoose=require('mongoose');
const SavedForm=new mongoose.Schema({
    name:{
        type:String
    },
    age:{
        type:String,
    },
    gender:{
        type:String,   
    }
    ,
    address:{
        type:String,   
    },
    earAnomalies:{
        type:String,
    },
    noseAnomalies:{
        type:String,
    },
    throatAnomalies:{
        type:String,
    },
    rightEarValue:{
        type:String,
    },
    leftEarValue:{
        type:String,
    },
    Hz500:{
        type:Boolean,
    },
    Hz1000:{
        type:Boolean
    },
    Hz2000:{
        type:Boolean,
    },
    Hz5000:{
        type:Boolean,
    },
    treatmentRecommended:{
        type:Boolean,
    },
    ThroatCovid:{
        type:String,
    },
    NoseCovid:{
        type:String,
    },
    ThroatInfectionDetected:{
        type:String,
    },
    NoseInfectionDetected:{
        type:String,
    },
    InfectionDescriptionNose:{
        type:String,
    },
    InfectionDescriptionThroat:{
        type:String,
    },
    InfectionDescriptionThroat:{
        type:String
    },
    Approve:{
        type:Boolean,
        default:false,
    },
    important:{
        type:Boolean,
        default:false,
    },
    comment:{
        type:String,
        default:"No comment"
    }
});
const scheme=mongoose.model('SAVEDFORM',SavedForm);
module.exports=scheme;
