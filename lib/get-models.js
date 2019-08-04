const fs = require('fs')
const getModels = () => {
    return new Promise((resolve, reject) => {
        fs.readdir('models', function (err, items) {

            if (err) {
                reject(err)
            }

            schemas = items.reduce((acc, cur) => {
                return {
                    [cur.split('.')[0]]: require(`../models/${cur}`), ...acc
                }
            }, {})
            resolve(schemas)
        })
    })
}

module.exports.getModels = getModels;