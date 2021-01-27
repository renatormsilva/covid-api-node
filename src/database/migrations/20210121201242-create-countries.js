'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
    return queryInterface.createTable('States', 
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
      countryRegion: {
         type: Sequelize.STRING,
         allowNull: false,
         
        
       },
       provinceState: {
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
       createdAt: {
         type: Sequelize.DATE,
         allowNull: false,
       },
       updatedAt: {
         type: Sequelize.DATE,
         allowNull: false,
       }


    });
     
  },

  down: async (queryInterface, Sequelize) => {
    
    return queryInterface.dropTable('Countries');
     
  }
};
