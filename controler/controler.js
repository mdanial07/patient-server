const patient = require('../models/patientSchema')
module.exports = {
    getAllPatient(req, res, next){
        patient.find({})
            .then(data => {
                console.log(data)
                return res.send(data)
            })
            .catch(next);
    },

    createPatientProfile(req, res, next){
        var userData = req.body;
        console.log(userData)
        patient.create(userData)
            .then((responce) => {
                console.log(responce)
                res.send(responce)
            })
            .catch(next)
    },
}