import { useDispatch, useSelector } from "react-redux";
import "./Header.scss";
import MainNav from "./MainNav/MainNav";
import PageNav from "./PageNav/PageNav";
import { useEffect } from "react";
import { getLoggedUser } from "../../features/user/userSlice";

const Header = () => {

    const { user } = useSelector((state) => state.user);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getLoggedUser());
    }, [dispatch]);

    return (
        <>
            <PageNav username={user.loggedUser} />
            <MainNav/>
        </>
    )
};

export default Header;