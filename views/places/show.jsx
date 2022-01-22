const React = require('react')
const Def = require('../default')

function show () {
    return (
        <Def>

          <main>

            <h1>{data.place.name}</h1>

            <h2>rating</h2>
              <p>unrated</p>

            <h2>Comments</h2>
              <p>no comments yet</p>
            
              <a href="" className="btn btn-warning"> 
                Edit
              </a>  

              <form method="POST" action={`/places/${data.id}?_method=DELETE`}>

                <button type="submit" className="btn btn-danger">
                  Delete
                </button>

              </form> 

              <a href={`/places/${data.id}/edit`} className="btn btn-warning"> 
                Edit
              </a>    

          </main>

        </Def>
    )
}

 
         



module.exports = show