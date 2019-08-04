const { getModels } = require('../lib/get-models')
var schemas = {}
getModels().then(models => schemas = models).catch(console.log)


const update = (model) => async (req, res) => {
    const product = req.body
    const _id = req.params._id
    try {
        const _Model = await schemas[model].model.updateOne(_id, {
            updated_at: Date.now(),
            ...product
        })
        res.status(201)
            .send(_Model)
    } catch (e) {
        res.status(500)
            .send(e.toString())
    }
}

module.exports = update