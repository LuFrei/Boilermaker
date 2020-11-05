const router = require('express').Router();

router.use('/users', require('./users'));


//Error Handler
//404
router.use((req, res, next) => {
  const err = new Error('not found.');
  err.status = 404;
  nexr(err)
})

module.exports = router;