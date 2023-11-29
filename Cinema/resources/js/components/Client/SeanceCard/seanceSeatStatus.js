import {useState} from "react";
import classnames from 'classnames';

export default function SeanceSeatStatus(props) {
    const {status, callback} = props;
    const [taken, setTaken] = useState(0);

    const handleClick = () => {
        setTaken(!taken);
        callback();
    }

    let active = "buying-scheme__chair_disabled";
    switch (status) {
        case 'disabled':
            active = "buying-scheme__chair_disabled";
            break;
        case 'standard':
            active = "buying-scheme__chair_standart";
            break;
        case 'vip':
            active = "buying-scheme__chair_vip";
            break;
        case 'sold':
            active = "buying-scheme__chair_taken";
            break;
    }

    return (
        <span className={classnames(
            'buying-scheme__chair',
            taken ? 'buying-scheme__chair_selected' : active
        )}
            onClick={() => status === 'disabled' || status === 'sold' ? false : handleClick()}
        />
    );
}
