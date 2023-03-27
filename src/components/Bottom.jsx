import fbIcon from "../assets/images/icon-facebook.svg";
import twIcon from "../assets/images/icon-twitter.svg";
import inIcon from "../assets/images/icon-instagram.svg";
import ytIcon from "../assets/images/icon-youtube.svg";
import upIcon from "../assets/images/icon-up.svg";
import downIcon from "../assets/images/icon-down.svg";

export default function Bottom(props) {
    return (
        <section className={props.darkMode ? "bottom" : "bottom light"}>
            <h2>Overview - Today</h2>
            <section className="overview">
                <div className={props.darkMode ? "block" : "block light"}>
                    <div
                        className={
                            props.darkMode ? "block-top" : "block-top light"
                        }
                    >
                        <p>Page Views</p>
                        <img src={fbIcon} alt="" />
                    </div>
                    <div
                        className={
                            props.darkMode
                                ? "block-bottom"
                                : "block-bottom light"
                        }
                    >
                        <p className="amount">87</p>
                        <img src={upIcon} alt="" />
                        <p className="up">303%</p>
                    </div>
                </div>

                <div className={props.darkMode ? "block" : "block light"}>
                    <div
                        className={
                            props.darkMode ? "block-top" : "block-top light"
                        }
                    >
                        <p>Likes</p>
                        <img src={fbIcon} alt="" />
                    </div>
                    <div
                        className={
                            props.darkMode
                                ? "block-bottom"
                                : "block-bottom light"
                        }
                    >
                        <p className="amount">52</p>
                        <img src={downIcon} alt="" />
                        <p className="down">2%</p>
                    </div>
                </div>

                <div className={props.darkMode ? "block" : "block light"}>
                    <div
                        className={
                            props.darkMode ? "block-top" : "block-top light"
                        }
                    >
                        <p>Likes</p>
                        <img src={inIcon} alt="" />
                    </div>
                    <div
                        className={
                            props.darkMode
                                ? "block-bottom"
                                : "block-bottom light"
                        }
                    >
                        <p className="amount">5462</p>
                        <img src={upIcon} alt="" />
                        <p className="up">2257%</p>
                    </div>
                </div>

                <div className={props.darkMode ? "block" : "block light"}>
                    <div
                        className={
                            props.darkMode ? "block-top" : "block-top light"
                        }
                    >
                        <p>Profile Views</p>
                        <img src={inIcon} alt="" />
                    </div>
                    <div
                        className={
                            props.darkMode
                                ? "block-bottom"
                                : "block-bottom light"
                        }
                    >
                        <p className="amount">52k</p>
                        <img src={upIcon} alt="" />
                        <p className="up">1375%</p>
                    </div>
                </div>

                <div className={props.darkMode ? "block" : "block light"}>
                    <div
                        className={
                            props.darkMode ? "block-top" : "block-top light"
                        }
                    >
                        <p>Retweets</p>
                        <img src={twIcon} alt="" />
                    </div>
                    <div
                        className={
                            props.darkMode
                                ? "block-bottom"
                                : "block-bottom light"
                        }
                    >
                        <p className="amount">117</p>
                        <img src={upIcon} alt="" />
                        <p className="up">303%</p>
                    </div>
                </div>

                <div className={props.darkMode ? "block" : "block light"}>
                    <div
                        className={
                            props.darkMode ? "block-top" : "block-top light"
                        }
                    >
                        <p>Likes</p>
                        <img src={fbIcon} alt="" />
                    </div>
                    <div
                        className={
                            props.darkMode
                                ? "block-bottom"
                                : "block-bottom light"
                        }
                    >
                        <p className="amount">507</p>
                        <img src={upIcon} alt="" />
                        <p className="up">553%</p>
                    </div>
                </div>

                <div className={props.darkMode ? "block" : "block light"}>
                    <div
                        className={
                            props.darkMode ? "block-top" : "block-top light"
                        }
                    >
                        <p>Likes</p>
                        <img src={ytIcon} alt="" />
                    </div>
                    <div
                        className={
                            props.darkMode
                                ? "block-bottom"
                                : "block-bottom light"
                        }
                    >
                        <p className="amount">107</p>
                        <img src={downIcon} alt="" />
                        <p className="down">19%</p>
                    </div>
                </div>

                <div className={props.darkMode ? "block" : "block light"}>
                    <div
                        className={
                            props.darkMode ? "block-top" : "block-top light"
                        }
                    >
                        <p>Total Views</p>
                        <img src={fbIcon} alt="" />
                    </div>
                    <div
                        className={
                            props.darkMode
                                ? "block-bottom"
                                : "block-bottom light"
                        }
                    >
                        <p className="amount">1407</p>
                        <img src={downIcon} alt="" />
                        <p className="down">12%</p>
                    </div>
                </div>
            </section>
        </section>
    );
}
