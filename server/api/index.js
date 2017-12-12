'use strict'
const apiRouter = require('express').Router()
const campusRouter = require('./campus');
const studentRouter = require('./students')



apiRouter.use('/campuses', campusRouter)
apiRouter.use('/students', studentRouter)
// You can put all routes in this file; HOWEVER, this file should almost be like a table of contents for the routers you create

module.exports = apiRouter;
