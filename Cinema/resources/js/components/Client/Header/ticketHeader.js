export default function TicketHeader(props) {
    const {text} = props;

    return (
        <header className="tichet__check">
            <h2 className="ticket__check-title">{text}</h2>
        </header>
    );
}
