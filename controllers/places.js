//This controller page contains the rest of our site's routes
const router = require('express').Router();

const places = require('../models/places.js')

router.get('/', (req, res) => {
    res.render('places/index', { places })
})

//More code . . .

//Get/places/new
router.get('/new', (req, res) => {
  res.render('places/new')
})

//Get/places
router.get('/', (req, res) => {
    let places = []

    res.render('places/index', {places})
})

//Post/places route
router.post('/', (req, res) => {
  if (!req.body.pic) {
    // Default image if one is not provided
    req.body.pic = 'http://placekitten.com/400/400'
  }
  if (!req.body.city) {
    req.body.city = 'Anytown'
  }
  if (!req.body.state) {
    req.body.state = 'USA'
  }
  places.push(req.body)
  res.redirect('/places')
})


module.exports = router