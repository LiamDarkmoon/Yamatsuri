import styles from '../ui/navbar.module.css'
import { logout } from '../lib/actions';

const LogoutButton = () => {

    return(
        <form
          action={logout}
        >
          <button className={styles.navbtn}>
            Logout
          </button>
        </form>
    )
}

export default LogoutButton;