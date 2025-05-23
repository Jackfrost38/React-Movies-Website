import "../css/Favorites.css";
import { useMovieContext } from "../contexts/MovieContext";
import MovieCard from "../components/MovieCard";

function Favorites() {
    const {favorites} = useMovieContext();

    if(favorites) {
        return (
            <div className="favorites">
                <h2>Your Favorite Movies</h2>
            <div className="movies-grid">
                {favorites.map((movie) => {
                    <MovieCard movie={movie} key={movie.id} />
                })}
            </div>
            </div>
        )
    }


    return <div className="favourites-empty"> 
        <h2>No Favourite Movies yet</h2>
        <p>Start adding your favourite movies</p>
    </div>
}

export default Favorites;