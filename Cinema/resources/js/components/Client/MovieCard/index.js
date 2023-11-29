import {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {getCalendar} from "../../../reducers/createCalendarSlice";
import Movie from "./movie";
import Main from "../Main";

export default function MainMovie() {
    const {chosenDate, films} = useSelector((state) => state.calendar);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCalendar(chosenDate));
    }, [chosenDate]);

    return (
        <Main nav>
            {films.map((film) =>
                <Movie
                    id={film.id}
                    key={film.id}
                />
            )}
        </Main>
    );
}
