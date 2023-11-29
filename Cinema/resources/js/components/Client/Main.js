import Header from "./Header";
import Navigate from "./Navigation/nav";

export default function Main(props) {
    return (
        <>
            <Header/>
            {props.nav && <Navigate/>}
            <main>
                {props.children}
            </main>
        </>
    );
}
