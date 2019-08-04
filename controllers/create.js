const { getModels } = require('../lib/get-models')
var schemas = {}
getModels().then(models => schemas = models).catch(console.log)

const create = (model) => async (req, res) => {
    try {
        
        const _Model = await schemas[model].model.create(req.body)
        console.log('Create',_Model)
        res.status(201)
        .send(_Model)
    } catch (e) {
        console.log(e)
        res.status(500)
            .send(e.toString())
    }
}

module.exports = create
