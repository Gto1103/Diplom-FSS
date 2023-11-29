import {useSelector} from "react-redux";
import SeanceSeatStatus from "./seanceSeatStatus";

export default function BuyingScheme(props) {
    const {callback} = props;
    const {session, seats} = useSelector((state) => state.seance);
    const chairs = seats.length / session.row;

    const rowSeats = seats.reduce((result, seat, i) => {
        const index = Math.floor(i / chairs);

        if (!result[index]) {
            result[index] = [];
        }
        result[index].push(seat);
        return result
    }, []);

    return (

        <div className="buying-scheme">
            <div className="buying-scheme__wrapper">
                {rowSeats.map((row, i) =>
                    <div className="buying-scheme__row" key={i}>
                        {row.map((seat) =>
                            <SeanceSeatStatus
                                status={seat.status}
                                callback={() => callback(seat.id, seat.status)}
                                key={seat.id}
                            />)}
                    </div>
                )}
            </div>

            <div className="buying-scheme__legend">
                <div className="col">
                    <p className="buying-scheme__legend-price"><span
                        className="buying-scheme__chair buying-scheme__chair_standart"/> Свободно (<span
                        className="buying-scheme__legend-value">{session.price_standard}</span>руб)
                    </p>

                    <p className="buying-scheme__legend-price"><span
                        className="buying-scheme__chair buying-scheme__chair_vip"/> Свободно VIP (<span
                        className="buying-scheme__legend-value">{session.price_vip}</span>руб)
                    </p>
                </div>

                <div className="col">
                    <p className="buying-scheme__legend-price"><span
                        className="buying-scheme__chair buying-scheme__chair_taken"/> Занято
                    </p>

                    <p className="buying-scheme__legend-price"><span
                        className="buying-scheme__chair buying-scheme__chair_selected"/> Выбрано
                    </p>
                </div>
            </div>
        </div>
    );
}
