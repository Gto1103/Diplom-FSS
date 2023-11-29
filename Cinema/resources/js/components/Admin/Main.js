import Header from "./Header";
import StepHeader from "./Header/stepHeader";
import HallControl from "./AdminPanel/hallControl";
import HallConfig from "./AdminPanel/hallConfig";
import PriceConfig from "./AdminPanel/priceConfig";
import SessionGrid from "./AdminPanel/sessionGrid";
import OpenSales from "./AdminPanel/openSales";
import Popup from "./Popup";

export default function Main() {
    return (
        <>
            <Popup/>
            <Header/>
            <main className="conf-steps">
                <StepHeader title={'Управление залами'}>
                    <HallControl/>
                </StepHeader>

                <StepHeader title={'Конфигурация залов'}>
                    <HallConfig/>
                </StepHeader>

                <StepHeader title={'Конфигурация цен'}>
                    <PriceConfig/>
                </StepHeader>

                <StepHeader title={'Сетка сеансов'}>
                    <SessionGrid/>
                </StepHeader>

                <StepHeader title={'Открыть продажи'}>
                    <OpenSales/>
                </StepHeader>
            </main>
        </>
    );
}
