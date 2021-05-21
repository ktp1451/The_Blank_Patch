const router = require('express').Router();
const userRoutes = require('./userRoutes');
const colorRoutes = require('./colorRoutes');

router.use('/users', userRoutes);
router.use('/color', colorRoutes)

module.exports = router;
