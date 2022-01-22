const React = require('react')
const Def = require('./default')

function error404 () {
    return (
      <Def>
          <main>
              <h1>404: PAGE NOT FOUND</h1>
              
              <div>
                  <img src="/images/404.gif" alt="404"/>
              
              </div>
          </main>
      </Def>
    )
  }

module.exports = error404