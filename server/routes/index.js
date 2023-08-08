const useRouter = require('./user')
const {notFound,errHandler} = require('../middleware/errHandler')

const initRoute = (app) => {
    app.use('/api/user', useRouter)

    app.use(notFound)
    app.use(errHandler)
}

module.exports = initRoute