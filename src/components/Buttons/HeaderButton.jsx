import { Logout } from "./Logout";
import { LoginRegister } from "./LoginRegister";

export function HeaderButton({props}){
    //const {isUserAuthenticated} = props;
    const isUserAuthenticated = false;
    const button = isUserAuthenticated ? <Logout/> : <LoginRegister/>;

    return(
        <>{button}</>
    );
}