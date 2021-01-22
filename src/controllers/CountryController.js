const Country = require('../models/Country')

module.exports = {

  async index(req, res)  {
    const countries = await Country.findAll();
    return res.json(countries)
  },

  async store(req, res) {
    const { uid, country_region, province_state, confirmed, active, deaths, recovered } = req.body;
    
    console.log({ uid, country_region, province_state, confirmed, active, deaths, recovered });

    const country = await Country.create({ uid, country_region, province_state, confirmed, active, deaths, recovered})
    
   
    return res.json(country)
  }
}

// {
//     "country_region": "haaaao3",
//     "province_state": "hasdasdasllo3",
//     "confirmed": 123,
//     "active": 321,
//     "deaths": 1231,
//     "recovered": 321
// }

// const { country_region, province_state, confirmed, active, deaths, recovered } = req.body;




// module.exports = Country


