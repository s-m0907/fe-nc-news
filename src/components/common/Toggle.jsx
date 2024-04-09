import { useDarkMode } from "../../../contexts/DarkMode";
import { useEffect } from 'react'

function DarkModeToggle() {
    const { darkMode, toggleDarkMode } = useDarkMode();

    useEffect(() => {
        const toggle = document.getElementById('toggle');
        toggle.addEventListener('change', () => {
            if (toggle.checked) {
                document.body.classList.add('dark-mode');
            } else {
                document.body.classList.remove('dark-mode');
            }
        });

        return () => {
            toggle.removeEventListener('change', () => {});
        };
    }, []);

    return (
            <label>
                <span>{`${darkMode ? 'Light Mode' : 'Dark Mode'}`}</span>
                <input className ="toggle" type="checkbox" id="toggle" checked={darkMode} onChange={toggleDarkMode} />
            </label>
    );
}
export default DarkModeToggle