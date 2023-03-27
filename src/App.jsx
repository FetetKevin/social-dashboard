import "./App.css";
import Navbar from "./components/Navbar";
import Top from "./components/Top";
import Bottom from "./components/Bottom";
import { useState } from "react";

function App() {
    const [darkMode, setDarkMode] = useState(true);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };
    return (
        <div className={darkMode ? "global" : "global light"}>
            <div className="container">
                <Navbar toggle={toggleDarkMode} darkMode={darkMode} />
                <main>
                    <Top darkMode={darkMode} />
                    <Bottom darkMode={darkMode} />
                </main>
            </div>
        </div>
    );
}

export default App;
