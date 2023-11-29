import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {showPopup} from "../../../reducers/createPopupSlice";
import {getHalls} from "../../../reducers/createAdminSlice";
import Button from "../Buttons/btn";
import DeleteHallAction from "../Actions/deleteHallAction";

export default function HallControl() {
    const {halls} = useSelector((state) => state.admin);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getHalls());
    }, []);

    return (
        <div className="conf-step__wrapper">
            <p className="conf-step__paragraph">Доступные залы:</p>
            <ul className="conf-step__list">
                {halls.map((hall) =>
                    <DeleteHallAction
                        id={hall.id}
                        name={hall.name}
                        key={hall.id}
                    />
                )}
            </ul>
            <Button text={"Создать зал"}
                    callback={() => dispatch(showPopup({title: "Добавление зала", form: "addHall"}))}/>
        </div>
    );
}
