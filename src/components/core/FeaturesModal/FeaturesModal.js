import React, { useEffect, useRef } from 'react';
import { IconContext } from 'react-icons';
import { IoMdClose } from "react-icons/io";
import './FeaturesModal.scss';

function FeaturesModal({ modalData, triggerModal, isOpen }) {

    const modalRef = useRef(null);
    const { data, title, description } = modalData;

    const handleClick = (event) => {
        if(modalRef.current.contains(event.target)) {
            return;
        } 
        triggerModal({});
    }

    const handleKey = (event) => {
        if(event.keyCode === 27) {
            triggerModal({});
        }
    }

    useEffect(() => {
        isOpen ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'scroll';
        return () => {
            document.body.style.overflow = 'scroll'
        }
    }, [isOpen]);

    useEffect(() => {
        document.addEventListener('mousedown', handleClick);
        document.addEventListener('keydown', handleKey);

        return () => {
            document.removeEventListener('mousedown', handleClick);
            document.removeEventListener('keydown', handleKey);
        }
    }, []);

    return (
        <div className="features-modal">
            <div className="features-modal-background"/>
            <div className="features-modal-content">
                <div className="features-modal-content-inner" ref={ modalRef }>
                    <div className="modal-content-header">
                        <div className="header-navbar">
                            <span className="header-label label-large">Movies</span>
                            <button type="button" className="header-close-button" onClick={() => triggerModal({}) }>
                                <IconContext.Provider value={{ color: "#f8f8f8", size: "34px" }}>
                                    <IoMdClose />
                                </IconContext.Provider>
                            </button>
                        </div>
                        <div className="header-banner">
                            <div className="header-banner-background">
                                <img 
                                    src={ data.backdrop_path 
                                        ? `https://image.tmdb.org/t/p/original/${data.backdrop_path}` 
                                        : `https://image.tmdb.org/t/p/original/${data.poster_path}`
                                    }
                                    alt={ data.title ? data.title : data.name } 
                                    className="background-image" 
                                />
                            </div>
                            <div className="header-banner-content">
                                <div className="banner-content-inner">
                                    <h1 className="banner-title heading-one-showcase">{ title }</h1>
                                    <p className="banner-description paragraph-large">{ description }</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="modal-content-body"></div>
                    <div className="modal-content-footer"></div>
                </div>
            </div>
        </div>
    )
}

export default FeaturesModal;
