import { Link } from 'react-router-dom';
import Button from './Button';
import styles from './Header.module.css';

const Header = () => {
    return (
        <header className={styles.headerTop}>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/profile'>Profile</Link>
                <Link to='/myjob'>My Job</Link>
            </nav>
            <Button />
        </header>
    )

}

export default Header;