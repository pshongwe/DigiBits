const fs = require('fs')

var schemas = {}
fs.readdir('models', function (err, items) {
    schemas = items.reduce((acc, cur) => {
        return {
            [cur.split('.')[0]]: require(`../models/${cur}`), ...acc
        }
    }, {})
})

const create = (model) => async (req, res) => {
    try {
        _Model = await schemas[model].model.create(req.body)
        res.status(201)
            .send(_Model)
    } catch (e) {
        res.status(500)
            .send(e.toString())
    }
}

module.exports = create
