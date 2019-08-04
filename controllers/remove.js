const { getModels } = require('../lib/get-models')
var schemas = {}
getModels().then(models => schemas = models).catch(console.log)


const remove = (model) => async (req, res) => {
    const _id = req.params._id
    try {
        const _Model = await schemas[model].model.deleteOne(_id)
        res.send(_Model)
    } catch (e) {
        res.status(500)
            .send(e.toString)
    } finally {

    }
}

module.exports = remove