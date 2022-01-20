//This controller page contains the rest of our site's routes
const router = require('express').Router();

//Get/places/new
router.get('/new', (req, res) => {
  res.render('places/new')
})

//GET/places
router.get('/', (req, res) => {
    let places = [{
        name: 'H-Thai-ML',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Thai, Pan-Asian',
        pic: 'http://placekitten.com/250/250'
      }, {
        name: 'Coding Cat Cafe',
        city: 'Phoenix',
        state: 'AZ',
        cuisines: 'Coffee, Bakery',
        pic: 'http://placekitten.com/250/250'
      }]

    res.render('places/index', {places})
})


module.exports = router