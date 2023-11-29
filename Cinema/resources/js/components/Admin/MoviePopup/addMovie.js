import {useDispatch} from "react-redux";
import {createMovie} from "../../../reducers/createAdminSlice";
import MovieCard from "../Cards/movieCard";

export default function AddMovie() {
    const dispatch = useDispatch();

    return (
        <MovieCard
            callbackSubmit={(title, description, duration, country, poster) => dispatch(createMovie({
                title,
                description,
                duration,
                country,
                poster
            }))}
        />
    );
}
