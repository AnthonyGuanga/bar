import React from "react";
import "../sass/animations.scss";

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="footer__logo-box">
                <img
                    src="../img/icon-logo.png"
                    alt="icono barberia"
                    className="footer__logo"
                />
            </div>
            <div className="footer__slider">
                <div className="footer__slide-track">
                    {[
                        "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/1.png",
                        "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png",
                        "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/3.png",
                        "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/4.png",
                        "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/5.png",
                        "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/6.png",
                        "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/7.png",
                    ].map((image, index) => (
                        <div className="footer__slide" key={index}>
                            <img
                                src={image}
                                alt={`Slide ${index + 1}`}
                                className="footer__slide-image"
                                height="100"
                                width="250"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
