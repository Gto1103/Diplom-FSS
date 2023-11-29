export default function Button(props) {
    const {text, callback} = props;
    return (
        <button className="conf-step__button conf-step__button-accent" onClick={() => callback()}>{text}</button>
    );
}
