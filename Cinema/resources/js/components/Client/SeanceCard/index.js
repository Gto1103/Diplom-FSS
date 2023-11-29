import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {createTicket, getSeance} from "../../../reducers/createSeanceSlice";
import Main from "../Main";
import SeanceInfo from "./seanceInfo";
import BuyingScheme from "./buyingScheme";
import Button from '../Button/btn';

export default function MainSeance() {
    const {session} = useSelector((state) => state.seance);
    const seanceId = useParams().seanceId;
    const dispatch = useDispatch();
    const selectedSeats = [];

    useEffect(() => {
        dispatch(getSeance(seanceId));
    }, []);

    const selectHandle = (id, status) => {
        const price = status === 'vip' ? session.price_vip : session.price_standard;
        const hasSeat = selectedSeats.findIndex((seat) => seat.id === id);
        if (hasSeat !== -1) {
            selectedSeats.splice(hasSeat, 1);
        } else {
            selectedSeats.push({id, price});
        }
    }

    const submitHandle = () => {
        const ticket = selectedSeats.reduce((res, seat) => {
            res.seats.push(seat.id);
            res.cost += +seat.price;
            return res;
        }, {seats: [], cost: 0})
        dispatch(createTicket({seanceId, seats: ticket.seats, cost: ticket.cost}));
    }

    return (
        <Main>
            <section className="buying">
                <SeanceInfo/>
                <BuyingScheme callback={selectHandle}/>
                <Button text={"Забронировать"} link={"/payment"} callback={submitHandle}/>
            </section>
        </Main>
    );
}
