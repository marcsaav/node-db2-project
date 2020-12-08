const db = require('../../data/dbConfig');

module.exports = {
    getAll() {
        return db('cars')
    },
    createCar(car) {
        return db('cars')
            .insert(car)
            .then(([vin]) => {
                return db('cars')
                    .where('VIN', vin)
            })
    }
}
