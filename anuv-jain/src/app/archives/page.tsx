"use client";
import { useEffect } from "react";
import Swiper from "swiper/bundle";
import "swiper/css/bundle";

export default function Archives() {
  useEffect(() => {
    // Initialize Swiper after component mounts
    new Swiper(".mySwiper", {
      direction: "vertical",
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  }, []);

  return (
    <>

      <div className="swiper mySwiper">
        <div className="swiper-wrapper">
          {/* Slide 1 */}
          <div
            className="swiper-slide"
            style={{ backgroundImage: "url('/amitimg/sliderbg1.png')" }}
          >
            <div className="scontaerd">
              <div className="flexcard">
                <div
                  className="notebg"
                  style={{ backgroundImage: "url('/amitimg/note1.png')" }}
                >
                  <h5>
                    Lorem ipsum dolor sit amet consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua
                  </h5>
                  <div className="noteshape">
                    <img src="/amitimg/shapesdfr.png" alt="shape"/>
                  </div>
                </div>

                <div className="mainrightcard">
                  <div className="rightcard">
                    <div className="slidercontent firstcontent">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Quis ipsum suspendisse ultrices gravida.
                        Risus commodo viverra maecenas accumsan lacus vel
                        facilisis.
                      </p>
                    </div>
                    <div className="cardimg">
                      <img src="/amitimg/photo-1.png" alt="photo"/>
                    </div>
                  </div>

                  <div className="rightcard endfg">
                    <div className="cardimg">
                      <img src="/amitimg/photo213.png" alt="photo"/>
                    </div>
                    <div className="slidercontent text-right">
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Slide 2 */}
          <div
            className="swiper-slide"
            style={{ backgroundImage: "url('amitimg/sliderbg2.png')" }}
          >
            <div className="scontaerd">
              <div className="flexcard tow">
                <div className="mainrightcard">
                  <div className="rightcard">
                    <div className="cardimg">
                      <img  src="/amitimg/photo-1.png" alt="photo" />
                    </div>
                    <div className="slidercontent text-right">
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua
                      </p>
                    </div>
                  </div>

                  <div className="rightcard endfg">
                    <div className="slidercontent firstcontent">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Quis ipsum suspendisse ultrices gravida.
                        Risus commodo viverra maecenas accumsan lacus vel
                        facilisis.
                      </p>
                    </div>
                    <div className="cardimg">
                      <img  src="/amitimg/photo213.png"  alt="photo" />
                    </div>
                  </div>
                </div>

                <div className="towimgslider">
                  <div
                    className="notebg"
                    style={{ backgroundImage: "url('amitimg/note1.png')" }}
                  >
                    <h5>
                      Lorem ipsum dolor sit amet consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua
                    </h5>
                    <div className="noteshape">
                      <img  src="/amitimg/shapesdfr.png" alt="shape"/>
                    </div>
                  </div>
                  <div className="cardimg">
                    <img src="/amitimg/photo-1.png" alt="photo" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Arrows & Pagination */}
        <div className="sliderarrow">
          <div className="swiper-button-next"></div>
          <div className="swiper-button-prev"></div>
        </div>
        <div className="swiper-pagination"></div>
      </div>
    </>
  );
}
