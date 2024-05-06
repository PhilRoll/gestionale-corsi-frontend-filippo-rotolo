import { Logout } from "./Logout";
import { SignInSignUp } from "./SignInSignUp";

export function HeaderButton({props}){
    //const {isUserAuthenticated} = props;
    const isUserAuthenticated = false;
    const button = isUserAuthenticated ? <Logout/> : <SignInSignUp/>;

    return(
        <>{button}</>
    );
}