import '../ style sheet/search.css'

function Search () {

    return(
        <div className="container__interaction">
            <input className="search" type="text" placeholder="Búsqueda" autoComplete="off"/>
        </div>
    )
}

export default Search;