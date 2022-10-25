const {getUID} = require('../controllers/notes');

async function isAdmin (req, res, next) {
    const userUid = await getUID(req.params.id)
   
    if(req.body.uid !=userUid[0].uid) {
     res.status(403).json('TROLOLOLOLOL ! Invalid') 
     return
    }

    next()
}

module.exports = {
     isAdmin
}