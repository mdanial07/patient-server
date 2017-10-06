var patient = require('../models/patientSchema')
var controler = require('../controler/controler')


module.exports = (app) => {


    app.get('/api/getAllPatient', controler.getAllPatient)

    app.post('/api/createPatientProfile', controler.createPatientProfile)

}

