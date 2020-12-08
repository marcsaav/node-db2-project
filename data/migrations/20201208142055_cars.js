
exports.up = function(knex) {
    return knex.schema.createTable('cars', table => {
        // VIN
        table.string('VIN', 128).unique().notNullable()
        // Make
        table.text('Make', 128).notNullable()
        // Model
        table.text('Model', 128).notNullable()
        // Mileage
        table.integer('Mileage').notNullable()
        // Transmission Type
        table.text('Transmission Type', 128)
        // Title Status
        table.text('Title Status', 128)
    })
};

exports.down = function(knex) {
  return knex.schema.downTableIfExists('cars')
};
