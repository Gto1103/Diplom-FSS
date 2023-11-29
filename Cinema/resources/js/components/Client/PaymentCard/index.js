import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";
import Main from "../Main";
import TicketHeader from "../Header/ticketHeader";
import Button from "../Button/btn";
import TicketInfo from "../TicketCard/ticketInfo";

export default function MainPayment() {
    const {session, seats, ticket} = useSelector((state) => state.seance);
    const navigate = useNavigate();

    const seatsNum = seats.filter((seat) => ticket.seats.includes(seat.id)).map((seat) => seat.number);

    useEffect(() => {
        if (!session.id || !ticket.seanceId) {
            navigate(-1);
        }
    }, []);

    return (
        <Main>
            <section className="ticket">
                <TicketHeader text={"Вы выбрали билеты:"}/>
                <div className="ticket__info-wrapper">
                    <TicketInfo
                        film={session.title}
                        seats={seatsNum.join(', ')}
                        hall={session.name}
                        time={session.datetime}
                        cost={ticket.cost}
                    />
                    <Button text={"Получить код бронирования"} link={"/ticket"}/>
                    <p className="ticket__hint">После оплаты билет будет доступен в этом окне, а также придёт вам на
                        почту. Покажите QR-код нашему контроллёру у входа в зал.</p>
                    <p className="ticket__hint">Приятного просмотра!</p>
                </div>
            </section>
        </Main>
    );
}
