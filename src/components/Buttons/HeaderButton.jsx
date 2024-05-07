import { Logout } from "./Logout";
import { LoginRegister } from "./LoginRegister";
import Cookies from 'js-cookie'; // Importa il modulo js-cookie

export function HeaderButton() {
    return (
        <>
            {Cookies.get('token') ? <Logout /> : <LoginRegister />}
        </>
    );
}