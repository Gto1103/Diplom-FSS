import {useDispatch, useSelector} from "react-redux";
import {
    createScheme,
    selectHallScheme,
    changeHallSize,
    getSeats,
    updateSeats,
    createSeats,
    updateHall,
    getHalls,
} from "../../../reducers/createAdminSlice";
import ActionBtn from "../Buttons/actionBtn";
import ChooseHallBtn from "../Buttons/chooseHallBtn";
import SeatStatus from "../Seats/seatStatus";
import SeatsScheme from "../Seats/seatsScheme";

export default function HallConfig() {
    const {halls, selectedHallScheme} = useSelector((state) => state.admin);
    const dispatch = useDispatch();

    const handleSelect = (id) => {
        dispatch(selectHallScheme(halls.find((hall) => hall.id === id)));
        dispatch(getSeats(id));
    }

    const handleChange = ({target}) => {
        const name = target.name;
        const value = target.value;

        const hallSize = {
            "row": selectedHallScheme.row,
            "chair": selectedHallScheme.chair,
            [name]: value
        };
        dispatch(changeHallSize(hallSize));

        const seats = Array.from({length: hallSize.row * hallSize.chair}, (_, i) => {
            return {"id": i + 1, "number": i + 1, "status": "standard", "hall_id": selectedHallScheme.id}
        });
        dispatch(createScheme(seats));
    };

    const handleSave = () => {
        const hallSource = halls.find((hall) => hall.id === selectedHallScheme.id);
        if (hallSource.row === selectedHallScheme.row && hallSource.chair === selectedHallScheme.chair) {
            dispatch(updateSeats());
        } else {
            dispatch(updateHall(selectedHallScheme));
            dispatch(createSeats());
            dispatch(getHalls());
        }
        dispatch(selectHallScheme({}));
    }

    return (
        <div className="conf-step__wrapper">
            <p className="conf-step__paragraph">Выберите зал для конфигурации:</p>
            <ul className="conf-step__selectors-box">
                {halls.map((hall) =>
                    <ChooseHallBtn
                        name={hall.name}
                        checked={selectedHallScheme ? hall.id === selectedHallScheme.id : false}
                        callback={() => handleSelect(hall.id)}
                        key={hall.id}
                    />
                )}
            </ul>
            {selectedHallScheme.id &&
                <>
                    <p className="conf-step__paragraph">Укажите количество рядов и максимальное количество кресел в
                        ряду:</p>
                    <div className="conf-step__legend">
                        <label className="conf-step__label">Рядов, шт
                            <input type="text"
                                className="conf-step__input"
                                name="row"
                                value={selectedHallScheme.row}
                                onChange={handleChange}
                            />
                        </label>
                        <span className="multiplier">x</span>
                        <label className="conf-step__label">Мест, шт
                            <input type="text"
                                className="conf-step__input"
                                name="chair"
                                value={selectedHallScheme.chair}
                                onChange={handleChange}
                            />
                        </label>
                    </div>
                    <p className="conf-step__paragraph">Теперь вы можете указать типы кресел на схеме зала:</p>
                    <div className="conf-step__legend">
                        <SeatStatus status={"standard"}/> — обычные кресла
                        <SeatStatus status={"vip"}/> — VIP кресла
                        <SeatStatus status={"disabled"}/> — заблокированные (нет кресла)
                        <p className="conf-step__hint">Чтобы изменить вид кресла, нажмите по нему левой кнопкой мыши</p>
                    </div>

                    <SeatsScheme place={selectedHallScheme.row}/>
                    <ActionBtn cancel={() => dispatch(selectHallScheme({}))} save={() => handleSave()}/>
                </>
            }
        </div>
    );
}
