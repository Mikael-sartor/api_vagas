const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('postgresql://mikael:VKtEYMolEETC_ROHC-Oq9g@ocaranajuda-1700.jxf.gcp-southamerica-east1.cockroachlabs.cloud:26257/defaultdb?sslmode=require');

module.exports = sequelize;
    