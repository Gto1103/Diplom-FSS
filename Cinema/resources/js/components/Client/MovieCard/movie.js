import {useSelector} from "react-redux";
import MovieInfo from "./movieInfo";
import MovieHall from "./movieHall";

export default function Movie(props) {
    const {halls} = useSelector((state) => state.calendar);
    const {id} = props;
    const movieHalls = halls.filter((hall) => hall.sessions.find((session) => +session.film_id === id));

    return (
        <section className="movie">
            <MovieInfo id={id}/>
            {movieHalls.map((hall) =>
                <MovieHall
                    hallId={hall.id}
                    filmId={id}
                    key={hall.id}
                />
            )}
        </section>
    );
}
