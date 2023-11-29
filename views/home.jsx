const React = require('react')
const Def = require('./default')

function home () {
    return (
      <Def>
          <main>
              <h1>HOME</h1>
              <img src="./images/zeynep-sumer-skh-CC9A77U-unsplash.jpg" alt="zeynep" />
              <div>
                photo by <a href='http://vsco.co/zeynorjane'>Zeynep Sümer</a> on <a href='https://unsplash.com/s/photos/free'>Unsplash</a>
              </div>
              <a href="/places">
  <button className="btn-primary">Places Page</button>
</a>

          </main>
      </Def>
    )
  }
  

module.exports = home
