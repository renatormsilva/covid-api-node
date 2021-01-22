const { Model, DataTypes } = require('sequelize');

class Country extends Model {
  static init(sequelize) {
    super.init({
      uid: DataTypes.INTEGER,
      country_region: DataTypes.STRING,
      province_state: DataTypes.STRING,
      confirmed: DataTypes.INTEGER,
      active: DataTypes.INTEGER,
      deaths: DataTypes.INTEGER,
      recovered: DataTypes.INTEGER,
      
    }, {
      sequelize
    })
  }
}

module.exports = Country