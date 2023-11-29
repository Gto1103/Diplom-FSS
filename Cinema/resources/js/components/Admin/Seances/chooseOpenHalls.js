export default function ChooseOpenHalls(props) {
    const {id, name, free, callback} = props;

    return (
        <>
            <input
                id={`hallCheck${id}`}
                className="conf-step__custom-checkbox"
                type="checkbox"
                checked={free}
                onChange={callback}
            />
            <label htmlFor={`hallCheck${id}`}>{name}</label>
        </>
    );
}
