import React from 'react';
import bannerImage from '../../assets/Netflix_Banner.jpg';
import { IconContext } from 'react-icons/lib';
import { BsChevronRight } from "react-icons/bs";
import './IntroBanner.scss';

function IntroBanner() {
    return (
        <div className="intro-banner">
            <div className="intro-banner__background">
                <div className="background-overlay" />
                <img src={bannerImage} alt="Netflix homapge banner" className="background-image" />
            </div>
            <div className="intro-banner__content">
                <div className="content-overlay">
                    <span className="content-showcase-title">Unlimited access to</span>
                    <span className="content-showcase-title">movies, series and more.</span>
                </div>
                <div className="content-overlay">
                    <h3 className="heading-three content-showcase-subtitle">Watch anywhere. Cancel at any time.</h3>
                </div>
                <div className="content-overlay">
                    <p className="paragraph content-showcase-paragraph">Are you ready to watch? Enter your email address to subscribe or reactivate your subscription.</p>
                </div>
                <form className="content-register-form">
                    <div className="form-group">
                        <input type="email" htmlFor="email" name="email" className="form-group-input" placeholder="E-mail adress" />
                    </div>
                    <button type="submit" className="submit-button">
                        <span className="submit-button-label-large label-large">You start</span>
                        <IconContext.Provider value={{color: '#fafafa', size: '24px'}}>
                            <BsChevronRight />
                        </IconContext.Provider>
                    </button>
                </form>
            </div>
        </div>
    )
}

export default IntroBanner;
