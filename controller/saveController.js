const saveDataToDB = require("../services/saveService");
const aw = require("../util/asyncErrorHandler")

exports.saveData = aw(async(req,res)=>{
    let body = req.body.dataSource;
    let serviceResponse = {};

    let savedData = await saveDataToDB.saveFields(body)
     serviceResponse = {
        status : 200,
        message : "Ok",
        savedData
    } 

 res.send(serviceResponse)
})

