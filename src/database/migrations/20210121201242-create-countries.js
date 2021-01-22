'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
    return queryInterface.createTable('countries', 
    {
       id: {
         type: Sequelize.INTEGER,
         primaryKey: true,
         autoIncrement: true,
         allowNull: false
        
      },
      uid: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      country_region: {
         type: Sequelize.STRING,
         allowNull: false
        
       },
       province_state: {
         type: Sequelize.STRING,
         allowNull: false
        
       },
       confirmed: {
         type: Sequelize.INTEGER,
         allowNull: false
        
       },
       active: {
         type: Sequelize.INTEGER,
         allowNull: false
        
       },
       deaths: {
         type: Sequelize.INTEGER,
         allowNull: false
        
       },
       recovered: { 
         type: Sequelize.INTEGER,
         allowNull: false
        
       },
       created_at: {
         type: Sequelize.DATE,
         allowNull: false,
       },
       updated_at: {
         type: Sequelize.DATE,
         allowNull: false,
       }


    });
     
  },

  down: async (queryInterface, Sequelize) => {
    
    return queryInterface.dropTable('countries');
     
  }
};
