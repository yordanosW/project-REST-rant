const React = require('react')
const Def = require('../default')

function show () {
    return (
        <Def>
          <main>
            <h1>{data.place.name}</h1>
            <a href={`/places/${data.id}/edit`} className="btn btn-warning"> 
            Edit
            </a> 
        <form action={`/places/${data.id}?_method=DELETE`} method='POST'>
            <button type='sumbit' className='btn btn-danger'>
                Delete
            </button>
        </form>
          </main>
        </Def>
    )
}

module.exports = show
