import {useDispatch, useSelector} from "react-redux";
import {closePopup} from "../../../reducers/createPopupSlice";
import close from "../../Images/close.png";
import classNames from "classnames";
import AddHall from "../HallsPopup/addHall";
import DeleteHall from "../HallsPopup/deleteHall";
import AddMovie from "../MoviePopup/addMovie";
import DeleteMovie from "../MoviePopup/deleteMovie";
import AddSeance from "../SeancePopup/addSeance";
import DeleteSeance from "../SeancePopup/deleteSeance";
import EditMovie from "../MoviePopup/editMovie";
import EditSeance from "../SeancePopup/editSeance";

export default function Popup() {
    const {active, title, form} = useSelector((state) => state.popup);
    const dispatch = useDispatch();

    return (
        <div className={classNames("popup", {"active": active})}>
            <div className="popup__container">
                <div className="popup__content">
                    <div className="popup__header">
                        <h2 className="popup__title">
                            {title}
                            <a className="popup__dismiss" onClick={() => dispatch(closePopup())}>
                                <img src={close} alt="Закрыть"/>
                            </a>
                        </h2>
                    </div>
                    <div className="popup__wrapper">
                        {form === "addHall" && <AddHall/>}
                        {form === "editHall" && <AddHall edit/>}
                        {form === "deleteHall" && <DeleteHall/>}
                        {form === "addMovie" && <AddMovie/>}
                        {form === "editMovie" && <EditMovie/>}
                        {form === "deleteMovie" && <DeleteMovie/>}
                        {form === "addSeance" && <AddSeance/>}
                        {form === "editSeance" && <EditSeance/>}
                        {form === "deleteSeance" && <DeleteSeance/>}
                    </div>
                </div>
            </div>
        </div>
    );
}
