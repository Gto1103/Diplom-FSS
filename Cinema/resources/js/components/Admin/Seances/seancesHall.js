import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getSeances} from "../../../reducers/createAdminSlice";
import AddSeanceAction from "../Actions/addSeanceAction";

export default function SeancesHall() {
    const {halls, chosenDate} = useSelector((state) => state.admin);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getSeances());
    }, [chosenDate]);

    return (
        <div className="conf-step__seances">
            {halls.map((hall) =>
                <AddSeanceAction
                    hallId={hall.id}
                    name={hall.name}
                    key={hall.id}
                />
            )}
        </div>
    );
}
