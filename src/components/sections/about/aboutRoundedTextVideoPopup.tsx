import { useState } from "react";
// import ModalVideo from "react-modal-video";

const AboutRoundedTextVideoPopup = () => {
    const [isVideoOpen, setIsVideoOpen] = useState(false);
    const localVideoSrc = "/img/about/intro.mp4";

    return (
        <>
            <div className="video-box">
                <a
                    href="#"
                    onClick={(e) => {
                        e.preventDefault();
                        setIsVideoOpen(true);
                    }}
                    className="video-buttton video-popup"
                >
                    <i className="fa-solid fa-play" />
                    <img src="/img/about/circle-text.png" alt="text-img" className="text-circle" />
                </a>
            </div>

            {isVideoOpen && (
                <div
                    className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
                    style={{ backgroundColor: "rgba(0, 0, 0, 0.75)", zIndex: 9999 }}
                    onClick={() => setIsVideoOpen(false)}
                >
                    <div
                        className="position-relative"
                        style={{ width: "min(900px, 92vw)" }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            type="button"
                            onClick={() => setIsVideoOpen(false)}
                            className="btn btn-light position-absolute"
                            style={{ top: "-14px", right: "-14px", zIndex: 1, borderRadius: "50%" }}
                            aria-label="Close video"
                        >
                            <i className="fa-solid fa-xmark" />
                        </button>
                        <video controls autoPlay style={{ width: "100%", borderRadius: "8px" }}>
                            <source src={localVideoSrc} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>
            )}

            {/*
            Existing ModalVideo implementation (commented for local video support):

            <ModalVideo
                channel="youtube"
                youtube={{ mute: 0, autoplay: 0 }}
                isOpen={isOpen}
                videoId="Cn4G2lZ_g2I"
                onClose={() => setOpen(false)}
            />
            */}
        </>
    )
}

export default AboutRoundedTextVideoPopup
