export default function Navbar(props) {
    return (
        <header>
            <div className="left">
                <h1 className={props.darkMode ? "" : "light"}>
                    Social Media Dashboard
                </h1>
                <p>Total Followers: 23,004</p>
            </div>

            <div className="btn">
                <label>Dark Mode</label>
                <div
                    className={props.darkMode ? "slider" : "slider light"}
                    onClick={props.toggle}
                >
                    <div
                        className={props.darkMode ? "circle" : "circle light"}
                    ></div>
                </div>
            </div>
        </header>
    );
}
