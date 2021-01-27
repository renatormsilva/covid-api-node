const { Model, DataTypes } = require('sequelize');

class State extends Model {
  static init(sequelize) {
    super.init({
      uid: DataTypes.INTEGER,
      countryRegion: DataTypes.STRING,
      provinceState: DataTypes.STRING,
      confirmed: DataTypes.INTEGER,
      active: DataTypes.INTEGER,
      deaths: DataTypes.INTEGER,
      recovered: DataTypes.INTEGER,
      
    }, {
      sequelize
    })
  }
}

module.exports = State