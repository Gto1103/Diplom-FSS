import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import {getHalls, updateHall} from "../../../reducers/createAdminSlice";
import ActionBtn from "../Buttons/actionBtn";
import ChooseHallBtn from "../Buttons/chooseHallBtn";
import SeatStatus from "../Seats/seatStatus";

export default function PriceConfig() {
    const {halls} = useSelector((state) => state.admin);
    const [selectedHall, setSelectedHall] = useState(null);
    const dispatch = useDispatch();

    const handleSelect = (id) => {
        setSelectedHall(halls.find((hall) => hall.id === id));
    }

    const handleChange = ({target}) => {
        const name = target.name;
        const value = target.value;
        setSelectedHall((prevState) => ({...prevState, [name]: value}));
    };

    const handleSave = () => {
        dispatch(updateHall(selectedHall));
        setSelectedHall(null);
        dispatch(getHalls());
    }

    return (
        <div className="conf-step__wrapper">
            <p className="conf-step__paragraph">Выберите зал для конфигурации:</p>
            <ul className="conf-step__selectors-box">
                {halls.map((hall) =>
                    <ChooseHallBtn
                        name={hall.name}
                        checked={selectedHall ? hall.id === selectedHall.id : false}
                        callback={() => handleSelect(hall.id)}
                        key={hall.id}
                    />
                )}
            </ul>

            {selectedHall &&
                <>
                    <p className="conf-step__paragraph">Установите цены для типов кресел:</p>
                    <div className="conf-step__legend">
                        <label className="conf-step__label">Цена, рублей
                            <input type="text"
                                className="conf-step__input"
                                name="price_standard"
                                value={selectedHall.price_standard}
                                onChange={handleChange}
                            />
                        </label>
                        за <SeatStatus status={"standard"}/> обычные кресла
                    </div>
                    <div className="conf-step__legend">
                        <label className="conf-step__label">Цена, рублей
                            <input type="text"
                                className="conf-step__input"
                                name="price_vip"
                                value={selectedHall.price_vip}
                                onChange={handleChange}
                            />
                        </label>
                        за <SeatStatus status={"vip"}/> VIP кресла
                    </div>

                    <ActionBtn cancel={() => setSelectedHall(null)} save={() => handleSave()}/>
                </>
            }
        </div>
    );
}
