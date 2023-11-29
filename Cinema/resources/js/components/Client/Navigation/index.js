import classNames from "classnames";

export default function Navigation(props) {
    const {handleClick} = props;
    const week = [
        'Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'
    ];
    const today = new Date();
    const date = new Date(props.date);
    const chosen = new Date(props.chosen);
    const active = [
        'page-nav__day',
        {
            'page-nav__day_today': date.setHours(0, 0, 0, 0) === today.setHours(0, 0, 0, 0),
            'page-nav__day_chosen': date.setHours(0, 0, 0, 0) === chosen.setHours(0, 0, 0, 0),
            'page-nav__day_weekend': date.getDay() === 0 || date.getDay() === 6,
        }

    ];

    return (
        <a className={classNames(active)} onClick={handleClick} href="#">
            <span className="page-nav__day-week">{week[date.getDay()]}</span>
            <span className="page-nav__day-number">{date.getDate()}</span>
        </a>
    );
}
