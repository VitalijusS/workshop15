import { AlertComponent } from "./AlertComponent";


export function AlertApp() {
    return (
        <>
            <AlertComponent type={'danger'} message={'danger'} delay={true} />
            <AlertComponent type={'warning'} message={'warning'} delay={true} />
        </>
    );
}