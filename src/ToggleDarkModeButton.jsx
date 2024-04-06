import { useDarkMode } from "../contexts/DarkMode";
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
        <div className={`container ${darkMode ? 'dark-mode' : ''}`}>
            <label className="switch">
                <span>{`${darkMode ? 'Light Mode' : 'Dark Mode'}`}</span>
                <input className ="toggle" type="checkbox" id="toggle" checked={darkMode} onChange={toggleDarkMode} />
                <span className="slider round"></span>
            </label>
        </div>
    );
}
export default DarkModeToggle