const { getModels } = require('../lib/get-models')
var schemas = {}
getModels().then(models => schemas = models).catch(console.log)

const findOne = (model) => async (req, res) => {
    const _id = req.params._id
    try {
        const _Model = await schemas[model].model.findOne({
            _id
        })
        if (_Model) {
            res.send(_Model)
        } else {
            res.status(404)
                .send('Resource Not Found')
        }
    } catch (e) {
        res.status(500)
            .send(e.toString())
    } finally {

    }
}

module.exports = findOne