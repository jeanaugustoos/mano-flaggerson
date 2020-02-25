const tableName = 'Accounts'

module.exports = {
  up (queryInterface, Sequelize) {
    return queryInterface.createTable(tableName, {
      id: {
        type: Sequelize.STRING,
        primaryKey: true,
        allowNull: false,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    })
  },

  down (queryInterface) {
    return queryInterface.dropTable(tableName)
  },
}