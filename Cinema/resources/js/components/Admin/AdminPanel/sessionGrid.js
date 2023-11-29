import AddMovieAction from "../Actions/addMovieAction";
import SeancesHall from "../Seances/seancesHall";
import ChooseSessionDate from "../Seances/chooseSessionDate";

export default function SessionGrid() {

    return (
        <div className="conf-step__wrapper">
            <AddMovieAction/>
            <ChooseSessionDate/>
            <SeancesHall/>
        </div>
    );
}
