import { Link, NavLink } from "react-router-dom";
import styles from "./PageNav.module.css";
import Logo from "../components/Logo";
import { useAuth } from "../contexts/FakeAuthContext";

function PageNav() {
  const { logout,isAuthenticated } = useAuth();
  function handleLogout(e){
    e.preventDefault()
    logout()
  }  
  
  return (
    <nav className={styles.nav}>
      <Link to="/">
        <Logo />
      </Link>
      <ul>
        <li>
          <NavLink className={styles.link} to={"/product"}>
            Product
          </NavLink>
        </li>
        <li>
          <NavLink className={styles.link} to={"/pricing"}>
            Pricing
          </NavLink>
        </li>
        <li>
          <NavLink
            to={!isAuthenticated && "/login"}
            className={styles.ctaLink}
            onClick={() => isAuthenticated?handleLogout():""}
          >
            {!isAuthenticated ? "Login" : "Logout"}
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default PageNav;
