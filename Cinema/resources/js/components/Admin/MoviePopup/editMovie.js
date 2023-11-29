import {useDispatch, useSelector} from "react-redux";
import {showPopup} from "../../../reducers/createPopupSlice";
import {updateMovie} from "../../../reducers/createAdminSlice";
import MovieCard from "../Cards/movieCard";

export default function EditMovie() {
    const dispatch = useDispatch();
    const {id} = useSelector((state) => state.popup);
    const {movies} = useSelector((state) => state.admin);
    const movie = movies.find((movie) => movie.id === id);

    return (
        <MovieCard
            title={movie.title}
            description={movie.description}
            duration={movie.duration}
            country={movie.country}
            poster={movie.poster}
            callbackSubmit={(title, description, duration, country, poster) => dispatch(updateMovie({
                id,
                title,
                description,
                duration,
                country,
                poster
            }))}
            callbackDelete={() => dispatch(showPopup({title: "Удаление фильма", form: "deleteMovie", id}))}
        />
    );
}
