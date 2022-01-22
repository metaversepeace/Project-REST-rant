const React = require('react')
const Def = require('./default')


function home () {
  return (
      <Def>
          <main>
              <h1>HOME</h1>
              <div>
                <img src="/images/pizza.jpeg" alt="Pizza"/>
                <div>
                Photo courtesy of <a href="AUTHOR_LINK">The Travel Mentor</a> at <a href="cite_link">https://www.thetravelmentor.com/2021/08/9-of-the-best-slices-of-pizza-on-the-las-vegas-strip</a>
                </div>
              </div>
              <a href="/places">
                  <button className="btn-primary">Places Page</button>
              </a>
          </main>
      </Def>
  )
}

module.exports = home