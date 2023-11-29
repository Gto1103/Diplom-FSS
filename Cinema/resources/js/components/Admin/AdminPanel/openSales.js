import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {updateHall} from "../../../reducers/createAdminSlice";
import ChooseOpenHalls from "../Seances/chooseOpenHalls";
import Button from "../Buttons/btn";

export default function OpenSales() {
    const {halls} = useSelector((state) => state.admin);
    const [changedHalls, setChangedHalls] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        setChangedHalls(halls);
    }, [halls]);

    const handleChange = (hall) => {
        setChangedHalls(prevState => prevState.map((item) =>
            item.id === hall.id ? {...item, "free": !+item.free} : item)
        );
    }

    const handleSubmit = () => {
        changedHalls.forEach((item) => {
            if (halls.find((hall) => hall.id === item.id).free !== item.free) {
                dispatch(updateHall(item));
            }
        });
    }

    return (
        <div className="conf-step__wrapper text-center">
            <p className="conf-step__paragraph">Открыть зал:</p>
            <ul className="conf-step__list conf-step__list_start">
                {changedHalls.map((hall) =>
                    <li key={hall.id}>
                        <ChooseOpenHalls
                            id={hall.id}
                            name={hall.name}
                            free={+hall.free}
                            callback={() => handleChange(hall)}
                        />
                    </li>
                )}
            </ul>
            <p className="conf-step__paragraph">Всё готово, теперь можно:</p>
            <Button text={"Открыть продажу билетов"} callback={handleSubmit}/>
        </div>
    );
}
