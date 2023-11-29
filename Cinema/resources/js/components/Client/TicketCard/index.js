import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";
import {buyTicket, resetSeance} from "../../../reducers/createSeanceSlice";
import Main from "../Main";
import TicketHeader from "../Header/ticketHeader";
import TicketInfo from "./ticketInfo";
import TicketQRCode from "./qrcode";

export default function MainTicket() {
    const {session, seats, ticket} = useSelector((state) => state.seance);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const seatsNum = seats.filter((seat) => ticket.seats.includes(seat.id)).map((seat) => seat.number);

    useEffect(() => {
        if (!session.id || !ticket.seanceId) {
            navigate("/");
        }

        dispatch(buyTicket());

        return () => dispatch(resetSeance());
    }, []);

    return (
        <Main>
            <section className="ticket">
                <TicketHeader text={"Электронный билет"}/>
                <div className="ticket__info-wrapper">
                    <TicketInfo
                        film={session.title}
                        seats={seatsNum.join(', ')}
                        hall={session.name}
                        time={session.datetime}
                        cost={ticket.cost}
                    />
                    {ticket.id &&
                        <TicketQRCode
                            code={`Билет: ${ticket.id}. Зал: ${session.name}. Время: ${session.time}. Места: ${seatsNum.join(', ')}`}
                        />
                    }
                    <p className="ticket__hint">Покажите QR-код нашему контроллеру для подтверждения бронирования.</p>
                    <p className="ticket__hint">Приятного просмотра!</p>
                </div>
            </section>
        </Main>
    );
}
