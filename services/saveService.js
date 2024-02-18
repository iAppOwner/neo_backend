const saveDataDB = require("../modal/saveModal")

exports.saveFields = async(saveBody)=>{
    try
{
    let savedBody = await saveDataDB.insertMany(saveBody)
    return savedBody;
    }
    catch(e)
    {
        return null;
    }
}