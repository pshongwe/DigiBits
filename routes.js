const routes = {
    findone: {
      path: '/:_id',
      method: 'get'
    },
    find: {
      path: '/',
      method: 'get'
    },
    create: {
      path: '/',
      method: 'post'
    },
    remove: {
      path: '/:_id',
      method: 'delete'
    },
    update: {
      path: '/:_id',
      method: 'put'
    }
  }
  
  module.exports = routes