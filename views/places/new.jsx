const React = require('react')
const Def = require('../default')

function new_form (){
 
    return(
        <Def>
          <head>
          <link rel="stylesheet"  href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" />
          </head>
            <main>
                <h1>
                    Add a New Place            
               </h1>
               <form method="POST" action="/places">
  <div className='form-group'>
    <label htmlFor="name">Place Name</label>
    <input className='form-control' id="name" name="name" required/>
  </div>
  <div className='form-group'>
    <label htmlFor="pic">Place Picture</label>
    <input className='form-control' id="pic" name="pic" />
  </div>
  <div className='form-group'>
    <label htmlFor="city">City</label>
    <input className='form-control' id="city" name="city" />
  </div>
  <div className='form-group'> 
    <label htmlFor="state">State</label>
    <input className='form-control' id="state" name="state" />
  </div>
  <div className='form-group'>
    <label htmlFor="cuisines">Cuisines</label>
    <input className='form-control' id="cuisines" name="cuisines" required/>
  </div>
  <input className='btn btn_primary' type="submit" value="Add Place" />
</form>

            </main>
        </Def>
    )
}

module.exports = new_form