const { Router} = require('express')
const router =Router()
router.get('/',(_req,res)=>{
    const data= {
        "name":"Maria",
        "apellido":"Gonzales"
    }
    res.json(data)
})

module.exports = router;