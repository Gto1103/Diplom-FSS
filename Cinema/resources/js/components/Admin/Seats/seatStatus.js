import classNames from "classnames";

export default function SeatStatus(props) {
    const {status, callback} = props;

    let active;
    switch (status) {
        case "standard":
            active = "conf-step__chair_standart";
            break;
        case "disabled":
            active = "conf-step__chair_disabled";
            break;
        case "vip":
            active = "conf-step__chair_vip";
            break;
        default:
            active = "conf-step__chair_standart";
            break;
    }

    return (
        <span className={classNames("conf-step__chair", active)} onClick={callback}/>
    );
}
