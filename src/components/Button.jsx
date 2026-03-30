import { useContext } from 'react';
import { ThemeContext } from '../themes/ThemeContext';

const Button = () => {
    const { toggle, theme } = useContext(ThemeContext);
    return (
        <button onClick={toggle}>
            {theme === "light" ? "🌞" : "🌙"}

        </button>
    )

}

export default Button;