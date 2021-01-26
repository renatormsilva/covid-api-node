const State = require('../models/State')
const api = require('../services/api')

module.exports = {

  async index(req, res) {
    
    var stateUrl = req.params.id

    const response = await api.get(`/countries/${stateUrl}/confirmed`)

    let countryRegionCompare = response.data[1].countryRegion

    const countryDbTest = await State.findOne({where: {countryRegion: countryRegionCompare}});

    if (countryDbTest === null) {

      for (let i = 0; i < response.data.length; i++){

        var { uid, countryRegion, provinceState, confirmed, active, deaths, recovered } = response.data[i]
        await State.create({ uid, countryRegion, provinceState, confirmed, active, deaths, recovered })
        
    }      


      api.get(`/countries/${stateUrl}/confirmed`).then((response) => {
        res.json(response.data)
      })

      console.log("não tem")
    } else {

      const states = await State.findAll();
      var resultArr = [];
       for (let i = 0; i < states.length; i++){
         if (states[i].countryRegion == countryRegionCompare) {
           resultArr.push(states[i])
         }
       }
      res.json(resultArr)
      return 
    }
    
    

    

    
   },

  async store(req, res) {
    

    var StateUrl = req.params.id
    const response = await api.get(`/countries/${StateUrl}/confirmed`)
                                                               
    


     for (let i = 0; i < response.data.length; i++){
      var { uid, countryRegion, provinceState, confirmed, active, deaths, recovered } = response.data[1]

      
      var state = await State.create({ uid, countryRegion, provinceState, confirmed, active, deaths, recovered })
    
   
      
    }
    
    return res.json({ state })
}


 }
