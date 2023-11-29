import {useNavigate} from "react-router-dom";

export default function Button(props) {
    const {text, link, callback} = props;
    const navigate = useNavigate();

    const handleClick = () => {
        callback && callback();
        navigate(link);
    }

    return (
        <button className="acceptin-button" onClick={handleClick}>
            {text}
        </button>
    );
}
