"use client";
import { useEffect, useRef, useState } from "react";
import Footer from "./footer/Footer";
import $ from "jquery";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default function Home() {
  const sliderRef = useRef<any>(null);

  const settings = {
    dots: true,       // below dots
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,     // next/prev arrows
    autoplay: false,
  };
  const [isOpen, setIsOpen] = useState(false);
  const [iframeSrc, setIframeSrc] = useState("");

  const openModal = (e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    setIframeSrc("https://www.youtube.com/embed/bP8ATWCvqzw?autoplay=1&rel=0&modestbranding=1");
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    // remove src to stop playback when modal closes
    setTimeout(() => setIframeSrc(""), 300);
  };


  const handleScroll = () => {
    const bottomImg = document.querySelector("img.bottom-img");
    if (!bottomImg) return;

    // Add "active" after 50px
    if (window.scrollY > 50) {
      bottomImg.classList.add("active");
    } else {
      bottomImg.classList.remove("active");
    }

    // Add "hide" after 100px
    if (window.scrollY > 0) {
      bottomImg.classList.add("hide");
    } else {
      bottomImg.classList.remove("hide");
    }
  };

  useEffect(() => {
    $(document).ready(function () {

      $(".nextslide").on("click", function () {
        $(this).addClass('disab');
        $('.prevslide').removeClass('disab');
        $(".slide2").addClass('active');

      });
      $(".prevslide").on("click", function () {
        $(this).addClass('disab');
        $('.nextslide').removeClass('disab');
        $(".slide2").removeClass('active');
      });
    });
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);



  return (
    <>
      <main className="overflow2">
        <section className="main-banner">
          <img className="top-img" src="images/banner-top.png" />

          <img className="bottom-img" src="images/banner-bottom.png" />

          <div className="auto-text">
            <h1>Anuv <span>Jain</span> </h1>

          </div>

        </section>

        <section className="second-section" style={{ backgroundImage: "url('/images/bg1.png')" }}>
          <div className="second-section-box" style={{ backgroundImage: "url('/images/second-box-img.png')" }}>

            <div className="about-anuv">
              <div className="h3-anuv">
                <h3>About</h3>
                <h3 className="pl-2">Anuv</h3>
                <h3 className="dottt">:</h3>
                <h3>)</h3>
              </div>
              {/* <img src="images/about-an.svg" /> */}
              <p>Anuv Jain is an Indian singer-songwriter known for his soulful,
                acoustic indie pop. His breakout tracks like "Baarishein" and
                "Alag Aasmaan" explore themes of love and longing.</p>
              <p>Singing mostly in Hindi, his minimalist style has earned him a
                loyal fanbase. Anuv gained popularity through YouTube and Spotify.
                He remains an independent artist known for his authenticity.</p>
            </div>
            <div className="about-right-imgouter">
              <div className="angal" style={{ backgroundImage: "url('/images/angal.png')" }}> </div>
              <div className="about-right-img">
                <img src="images/aboutanvi.jpg" className="rotateanimation" />
              </div>
              <div className="rose">
                <img className="redstrp" src="images/red-strp.png" />
                <img src="images/text.png" className="text blackstrp" />

              </div>
            </div>
          </div>
        </section>

        <section className="third-section">
          <div className="scribble-line rotateanimation"></div>
          <div className="scribble-line rotateanimation left"></div>
          <div className="innercontainer">
            <img src="images/gig-bg.png" className="rotateanimation3 gig-bg"></img>
            <div className="main-flexsf">

              <div className="large-note-paper">
                <div className="positionrelative">
                  <div className="bluesimg">
                    <div className="blue-tape">
                      <img src="./images/gigdates.svg" alt="gig" />
                    </div>

                    <div className="polaroid-frame">
                      <img src="./images/indie-music.png" alt="Artist singing" className="rotatfret polaroid-image" />
                    </div>
                  </div>
                  <div className="paper-clip">
                    <img src="./images/kundi.svg" alt="gig" />
                  </div>
                  <div className="sliderlist">
                    <div className="large-note-paper slide1">
                      <img className="bgg" src="images/Names2.svg" />
                      <div className="polaroid-group-row">
                        <div className="polaroid-group">

                        </div>
                        <div className="polaroid-group22">
                          <ul className="dates-list">
                            <li><a href="https://in.bookmyshow.com/events/music-at-repertwahr-festival/ET00465232" target="_blank">Lucknow....19th Dec 2025</a></li>
                             <li><a href="https://in.bookmyshow.com/events/the-sneak-n-street-fest-6-0/ET00472057" target="_blank"> Ludhiana....25th Dec 2025</a></li>
                            <li><a href="#" target="_blank" >Goa....31st Dec 2025</a></li>
                            <li><a target="_blank" href="https://in.bookmyshow.com/events/anuv-jain-live-in-chennai/ET00472732" >Chennai....4th Jan 2026</a></li>
                            <li><a href="https://link.district.in/DSTRKT/4tehg3y0" target="_blank">Guwahati....13th Jan 2026</a> </li>
                            <li><a href="https://in.bookmyshow.com/events/anuv-jain-dastakhat-india-tour-delhi/ET00470692" target="_blank">Delhi....16 Jan 2026</a></li>
                            <li><a href="https://in.bookmyshow.com/events/anuv-jain-dastakhat-india-tour-ahmedabad/ET00470481" target="_blank">Ahmedabad....18th Jan 2026</a> </li>

                          </ul>


                        </div>

                      </div>
                      <div className="stam circle-wrapper">
                        <img src="./images/stam.svg " alt="stamp" className="rotating-circle" />
                      </div>
                    </div>
                    <div className="large-note-paper slide2">
                      <img className="bgg" src="images/Names2.svg" />
                      <div className="polaroid-group-row">
                        <div className="polaroid-group">

                        </div>
                        <div className="polaroid-group22">
                          <ul className="dates-list">
                            <li><a href="https://in.bookmyshow.com/events/anuv-jain-dastakhat-india-tour-pune/ET00470688" target="_blank">Pune....23rd Jan 2026</a> </li>
                            <li><a href="https://in.bookmyshow.com/events/anuv-jain-dastakhat-india-tour-chandigarh/ET00470682" target="_blank">Chandigarh....30th Jan 2026</a> </li>
                            <li><a href="https://in.bookmyshow.com/events/anuv-jain-dastakhat-india-tour-kolkata/ET00470691" target="_blank">Kolkata....1st Feb 2026</a> </li>
                            <li><a href="https://in.bookmyshow.com/events/anuv-jain-dastakhat-india-tour-hyderabad/ET00470690" target="_blank">Hyderabad....6th Feb 2026</a> </li>
                            <li><a href="https://in.bookmyshow.com/events/anuv-jain-dastakhat-india-tour-indore/ET00470486" target="_blank">Indore....8th Feb 2026</a> </li>
                            <li><a href="https://in.bookmyshow.com/events/anuv-jain-dastakhat-india-tour-mumbai/ET00470487" target="_blank">Mumbai....14th Feb 2026</a> </li>
                            <li><a href="https://in.bookmyshow.com/events/anuv-jain-dastakhat-india-tour-jaipur/ET00470489" target="_blank">Jaipur....20th Feb 2026</a> </li>
                            <li><a href="https://in.bookmyshow.com/events/anuv-jain-dastakhat-india-tour-bengaluru/ET00470482" target="_blank">Bengaluru....22nd Feb 2026</a> </li>
                          </ul>


                        </div>

                      </div>
                      <div className="stam circle-wrapper">
                        <img src="./images/stam.svg " alt="stamp" className="rotating-circle" />
                      </div>
                    </div>
                  </div>
                  <div className="footer-widgets">
                    <div className="nav-arrows">
                      <span>
                        <img className="prevslide" src="./images/left-arrwo.svg" />
                      </span>
                      <span>
                        <img className="nextslide" src="./images/right-arrwo.svg" />
                      </span>
                    </div>
                  </div>

                  <div className="shapesret">
                    <img className="rotateanimation redstrp" src="images/gig-flower2.png" />
                  </div>

                </div>
              </div>
            </div>

            <div className="small-card-content">
              <img src="images/left-img.svg" alt="Small portrait" className="small-photo rotateanimation2" />
            </div>
            <div className="green-tape"></div>

            <div className="stamps"></div>

            <div className="afsos">
              <h4>latest <span> release </span></h4>

              <div className="letestllestion">
                <a href="https://linktr.ee/DastakhatWorldTour2026" target="_blank">
                <img className="rotateanimation" src="images/latestrelease.png" />
                </a>
              </div>
            </div>

          </div>

        </section>


        <section className="mains-music-bg">
          <img src="images/video-slider-bg.png" className="rotateanimation3 gig-bg bottoms"></img>
          <div className="music-section">
            <div className="stamp-container">
              <h4>Music <span>Videos</span> </h4>
              <div className="stamp-image chain-wrap">


                <div className="slider">

                  <div className="slides">
                    <Slider ref={sliderRef} {...settings}>
                      <div className="slide">
                        <div className="silde-dote-row">
                          <iframe className="reletives" src="https://youtu.be/ilNt2bikxDI?si=hu8w6urE9rN_3LEX"></iframe>
                          {/* <img className="reletives" src="images/mvideosBG.svg" /> */}
                          <svg className="chain-svg" viewBox="0 0 520 320" preserveAspectRatio="none" aria-hidden="true">
                            <defs>
                              <path id="rectPath" d="M10 10 H510 V310 H10 Z" fill="none" />
                            </defs>
                            <use className="moving-chain" href="#rectPath" stroke="#191919" stroke-width="10" stroke-linecap="round"
                              stroke-linejoin="round" />
                          </svg>
                        </div>
                      </div>
                      <div className="slide">
                        <div className="silde-dote-row">
                          <iframe className="reletives" src="https://youtu.be/gJLVTKhTnog?si=OaiPBRodBbtHTLG7"></iframe>
                          {/* <img className="reletives" src="images/mvideosBG.svg" /> */}
                          <svg className="chain-svg" viewBox="0 0 520 320" preserveAspectRatio="none" aria-hidden="true">
                            <defs>
                              <path id="rectPath" d="M10 10 H510 V310 H10 Z" fill="none" />
                            </defs>
                            <use className="moving-chain" href="#rectPath" stroke="#191919" stroke-width="10" stroke-linecap="round"
                              stroke-linejoin="round" />
                          </svg>
                        </div>
                      </div>
                      <div className="slide">
                        <div className="silde-dote-row">
                          <iframe className="reletives" src="https://youtu.be/zx0YGEi32r0?si=ExVjQeBoXCaphx-A"></iframe>
                          {/* <img className="reletives" src="images/mvideosBG.svg" /> */}
                          <svg className="chain-svg" viewBox="0 0 520 320" preserveAspectRatio="none" aria-hidden="true">
                            <defs>
                              <path id="rectPath" d="M10 10 H510 V310 H10 Z" fill="none" />
                            </defs>
                            <use className="moving-chain" href="#rectPath" stroke="#191919" stroke-width="10" stroke-linecap="round"
                              stroke-linejoin="round" />
                          </svg>
                        </div>
                      </div>

                      <div className="slide">
                        <div className="silde-dote-row">
                          <iframe className="reletives" src="https://youtu.be/41yIVNzGye8?si=UFrfoOApri8r5JZy"></iframe>
                          {/* <img className="reletives" src="images/mvideosBG.svg" /> */}
                          <svg className="chain-svg" viewBox="0 0 520 320" preserveAspectRatio="none" aria-hidden="true">
                            <defs>
                              <path id="rectPath" d="M10 10 H510 V310 H10 Z" fill="none" />
                            </defs>
                            <use className="moving-chain" href="#rectPath" stroke="#191919" stroke-width="10" stroke-linecap="round"
                              stroke-linejoin="round" />
                          </svg>
                        </div>
                      </div>
                      <div className="slide">
                        <div className="silde-dote-row">
                          <iframe className="reletives" src="https://youtu.be/hUORvCLETbI?si=ALH023KlhGRQ7wUO"></iframe>
                          {/* <img className="reletives" src="images/mvideosBG.svg" /> */}
                          <svg className="chain-svg" viewBox="0 0 520 320" preserveAspectRatio="none" aria-hidden="true">
                            <defs>
                              <path id="rectPath" d="M10 10 H510 V310 H10 Z" fill="none" />
                            </defs>
                            <use className="moving-chain" href="#rectPath" stroke="#191919" stroke-width="10" stroke-linecap="round"
                              stroke-linejoin="round" />
                          </svg>
                        </div>
                      </div>
                      <div className="slide">
                        <div className="silde-dote-row">
                          <iframe allowFullScreen className="reletives" src="https://www.youtube.com/watch?v=bP8ATWCvqzw"></iframe>
                          {/* <img className="reletives" src="images/mvideosBG.svg" /> */}
                          <svg className="chain-svg" viewBox="0 0 520 320" preserveAspectRatio="none" aria-hidden="true">
                            <defs>
                              <path id="rectPath" d="M10 10 H510 V310 H10 Z" fill="none" />
                            </defs>
                            <use className="moving-chain" href="#rectPath" stroke="#191919" stroke-width="10" stroke-linecap="round"
                              stroke-linejoin="round" />
                          </svg>
                        </div>
                      </div>
                    </Slider>
                  </div>
                </div>

                <button className="prev" onClick={() => sliderRef.current?.slickPrev()}>
                  <img src="images/slider-arro.svg" />
                </button>

                <button className="next" onClick={() => sliderRef.current?.slickNext()}>
                  <img src="images/slider-arro.svg" />
                </button>
              </div>
              <a href="#" className="watch-button" onClick={openModal}>Watch Now</a>
            </div>
          </div>


        </section>
        {isOpen && (
          <div
            style={{
              position: "fixed",
              inset: 0,
              background: "rgba(0,0,0,0.7)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 9999,
            }}
            onClick={closeModal}
          >
            <div
              role="dialog"
              aria-modal="true"
              style={{
                width: "90%",
                maxWidth: 960,
                aspectRatio: "16/9",
                background: "#000",
                position: "relative",
                boxShadow: "0 10px 40px rgba(0,0,0,0.6)",
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                aria-label="Close video"
                onClick={closeModal}
                style={{
                  position: "absolute",
                  right: 8,
                  top: 8,
                  zIndex: 2,
                  background: "transparent",
                  border: "none",
                  color: "#fff",
                  fontSize: 28,
                  lineHeight: 1,
                  cursor: "pointer",
                }}
              >
                ×
              </button>

              <iframe
                src={iframeSrc}
                title="YouTube video player"
                style={{ width: "100%", height: "100%", border: 0 }}
                allow="autoplay; encrypted-media; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}
