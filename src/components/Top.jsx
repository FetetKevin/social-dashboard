import fbIcon from "../assets/images/icon-facebook.svg";
import twIcon from "../assets/images/icon-twitter.svg";
import inIcon from "../assets/images/icon-instagram.svg";
import ytIcon from "../assets/images/icon-youtube.svg";
import upIcon from "../assets/images/icon-up.svg";
import downIcon from "../assets/images/icon-down.svg";

export default function Top(props) {
    return (
        <section className="top">
            <div className="wrap-facebook">
                <div className={props.darkMode ? "box facebook" : "box facebook light"}>
                    <div className="inline">
                        <img src={fbIcon} alt="" />
                        <p>@duckygo</p>
                    </div>
                    <h2>1987</h2>
                    <h3>followers</h3>
                    <div className="inline up">
                        <img src={upIcon} alt="" />
                        <h4>12 Today</h4>
                    </div>
                </div>
            </div>

            <div className="wrap-twitter">
                <div className={props.darkMode ? "box twitter" : "box twitter light"}>
                    <div className="inline">
                        <img src={twIcon} alt="" />
                        <p>@honklerlol</p>
                    </div>
                    <h2>1044</h2>
                    <h3>followers</h3>
                    <div className="inline up">
                        <img src={upIcon} alt="" />
                        <h4>12 Today</h4>
                    </div>
                </div>
            </div>

            <div className="wrap-instagram">
                <div className={props.darkMode ? "box instagram" : "box instagram light"}>
                    <div className="inline">
                        <img src={inIcon} alt="" />
                        <p>@realduckygo</p>
                    </div>
                    <h2>11k</h2>
                    <h3>followers</h3>
                    <div className="inline up">
                        <img src={upIcon} alt="" />
                        <h4>12 Today</h4>
                    </div>
                </div>
            </div>

            <div className="wrap-youtube">
                <div className={props.darkMode ? "box youtube" : "box youtube light"}>
                    <div className="inline">
                        <img src={ytIcon} alt="" />
                        <p>Ducky Go.</p>
                    </div>
                    <h2>8239</h2>
                    <h3>followers</h3>
                    <div className="inline down">
                        <img src={downIcon} alt="" />
                        <h4>12 Today</h4>
                    </div>
                </div>
            </div>
        </section>
    );
}
