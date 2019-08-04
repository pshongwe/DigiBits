const { getModels } = require('../lib/get-models')
var schemas = {}
getModels().then(models => schemas = models).catch(console.log)

const find = (model) => async (req, res) => {
    const query = req.query
    try {
        const _Model = await schemas[model].model.find({
            ...query
        })
        res.send(_Model)
    } catch (e) {
        res.status(500)
            .send(e.toString)
    } finally {

    }
}

module.exports = find