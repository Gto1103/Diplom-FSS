import {useEffect, useRef} from "react";
import QRCode from "qrcode";

export default function TicketQRCode(props) {
    const {code} = props;
    const imgCode = useRef(null);

    const generateQR = async (text) => {
        try {
            imgCode.current.src = await QRCode.toDataURL(
                text, {
                    errorCorrectionLevel: 'Q',
                    margin: 3,
                });
        } catch (err) {
            console.error(err);
        }
    }

    useEffect(() => generateQR(code), [imgCode]);

    return (
        <img ref={imgCode} className="ticket__info-qr" alt="QRCode"/>
    );
}
