const React = require('react')
const Def = require('./default')
function error404 () {
    return (
      <Def>
          <main>
              <h1>404: PAGE NOT FOUND</h1>
              <p>Oops, sorry, we can't find this page!</p>
              <img src="../public/images/dan-cook-MCauAnBJeig-unsplash.jpg" alt="laughing animal" />
              <div>
                photo by <a href='https://www.danscape.co/'>Dan Cook</a> on <a href='https://unsplash.com/s/photos/free'>Unsplash</a>
              </div>
          </main>
      </Def>
    )
  }
  
module.exports = error404
