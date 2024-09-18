/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

export function AlertComponent({ type, message, delay }) {

    const [showAlert, setShowAlert] = useState(true);

    function closeAlert(e) {
        e.target.parentElement.parentElement.classList.add("fadeAlert");
        setTimeout(() => {
            setShowAlert(false);
        }, 1000);
    }

    useEffect(() => {
        delay && setTimeout(() => {
            setShowAlert(false)
        }, 5000);
    })

    return (
        <>
            {showAlert &&
                <div className={`alert alert-${type}`}>
                    <div className="alert-close">
                        <span className="mr-1">{message}</span>
                        <button onClick={closeAlert}>X</button>
                    </div>
                </div>}
        </>
    );
}