'use client';
import { useEffect } from 'react';
import AOS from "aos";

export default function Footer() {
   useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
  }, []);
  return (
    <footer className="footer" data-aos="fade-up">
      <div className='footerinner'>
      <div className="footer-logo">
        <h4> for <span>more</span>  <span>updates</span></h4>
        
      </div>
      <form className="newsletter">
        <button type="submit">Sign up</button>
        <input type="email"/>
      </form>
      <div className="social-icons">
        <a target="_blank" href="https://www.instagram.com/anuvjain?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
          <img className='spotify3' src="images/ins (1).png" alt="instagram" />
          <svg className="draw-circle" viewBox="0 0 120 120">
            <path d="M60 10 C88 12 108 32 110 60 C112 88 88 110 60 110 C32 108 12 88 10 60 C12 32 32 12 60 10 Z" />
          </svg>
        </a>

        <a href="https://x.com/AnuvJain">
          <img className='x1' src="images/ins (4).png" alt="x" />
          <svg className="draw-circle" viewBox="0 0 120 120">
            <path d="M60 10 C88 12 108 32 110 60 C112 88 88 110 60 110 C32 108 12 88 10 60 C12 32 32 12 60 10 Z" />
          </svg>
        </a>

        <a target="_blank" href="https://youtube.com/@anuvjain?si=0LP2zD-6WeULonu_">
          <img className='youtube2' src="images/ins (3).png" alt="youtube" />
          <svg className="draw-circle" viewBox="0 0 120 120">
            <path d="M60 10 C88 12 108 32 110 60 C112 88 88 110 60 110 C32 108 12 88 10 60 C12 32 32 12 60 10 Z" />
          </svg>
        </a>

        <a href="#">
          <img className='spotify3' src="images/ins (2).png" alt="spotify" />
          <svg className="draw-circle" viewBox="0 0 120 120">
            <path d="M60 10 C88 12 108 32 110 60 C112 88 88 110 60 110 C32 108 12 88 10 60 C12 32 32 12 60 10 Z" />
          </svg>
        </a>
      </div>
   </div>
  </footer>
  );
}
