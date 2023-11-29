import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {chooseDate} from "../../../reducers/createCalendarSlice";
import Navigation from "./index";

export default function Navigate() {
    const [start, setStart] = useState(new Date());
    const {chosenDate} = useSelector((state) => state.calendar);
    const dispatch = useDispatch();
    const today = new Date();

    const handleClick = (day) => {
        dispatch(chooseDate(`${day.getFullYear()}-${day.getMonth() + 1}-${day.getDate()}`));
    }

    const handleStart = (day, arg) => {
        setStart(new Date(day.setDate(day.getDate() + arg)));
    }

    const days = [new Date(start.getTime())];
    for (let i = 0; i < 5; i++) {
        const next = new Date(days[i].getTime());
        next.setDate(next.getDate() + 1);
        days.push(next);
    }

    return (
        <nav className="page-nav">
            {start.setHours(0, 0, 0, 0) === today.setHours(0, 0, 0, 0) ||
                <a
                    className="page-nav__day page-nav__day_prev" onClick={() => handleStart(start, -6)} href="#">
                </a>}
            {days.map((day) =>
                <Navigation
                    date={day}
                    chosen={chosenDate}
                    handleClick={() => handleClick(day)}
                    key={day}
                />
            )}
            <a
                className="page-nav__day page-nav__day_next" onClick={() => handleStart(start, 6)} href="#">
            </a>
        </nav>
    );
}
