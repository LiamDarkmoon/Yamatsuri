import { signOut } from '@/auth';
import styles from '../ui/navbar.module.css'

const LogoutButton = () => {

    return(
        <form
          action={async () => {
            'use server';
            await signOut();
          }}
        >
          <button className={styles.navbtn}>
            Logout
          </button>
        </form>
    )
}

export default LogoutButton;