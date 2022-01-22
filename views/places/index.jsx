// Modules and Globals
require('dotenv').config()
const express = require('express')
const methodOverride = require('method-override')

const React = require('react');
const Def = require('../default');

function index (data) {

  let placesFormatted = data.places.map((place) => {

    return (

    <Def>
      <div className="col-sm-6">

        <h2>

          <a href={`/places/${index}`} >
            {place.name}
          </a>

        </h2>

        <p className="text-center">
          {place.cuisines}
        </p>

        <img src={place.pic} alt={place.name} />

        <p className="text-center">
          Located in {place.city}, {place.state}
        </p>

      </div>
    </Def>

    )
  })
}

module.exports = index;
