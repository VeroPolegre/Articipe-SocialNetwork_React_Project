import "./Header.scss";
import MainNav from "./MainNav/MainNav";
import PageNav from "./PageNav/PageNav";

const Header = () => {
    return (
        <>
            <PageNav/>
            <MainNav/>
        </>
    )
};

export default Header;