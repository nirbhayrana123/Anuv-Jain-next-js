"use client";
import { useEffect } from "react";
import $ from "jquery";

export default function Foryou() {
  useEffect(() => {
    const handleScroll = () => {
      const windowTop = $(window).scrollTop() || 0;
      const windowBottom = windowTop + $(window).height()!;

      $(".fade-section").each(function () {
        const elementTop = $(this).offset()!.top;
        const elementBottom = elementTop + $(this).outerHeight()!;

        if (elementBottom > windowTop + 100 && elementTop < windowBottom - 100) {
          $(this).addClass("visible").removeClass("hidden");
        } else {
          $(this).addClass("hidden").removeClass("visible");
        }
      });
    };

    // Attach event
    $(window).on("scroll", handleScroll);

    // Trigger once on mount
    handleScroll();

    // Cleanup on unmount
    return () => {
      $(window).off("scroll", handleScroll);
    };
  }, []);

  return (
    <>
    <main className="archivemain">
    <section className=" fade-section playlistfirstsection">
      <div className="flexingsitems">
        <img src="amitimg/forthahart.svg"/>
      </div>
      <div className="flexcontent">
        <div className="textanimationply">
    {/* <svg width="492" height="416" viewBox="0 0 492 416" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g filter="url(#filter0_g_90_2041)">
<rect x="1.2998" y="1.2998" width="489" height="413" fill="url(#pattern0_90_2041)"/>
</g>
<defs>
<filter id="filter0_g_90_2041" x="-0.000195265" y="-0.000195265" width="491.6" height="415.6" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feTurbulence type="fractalNoise" baseFrequency="0.036630038172006607 0.036630038172006607" numOctaves="3" seed="2421" />
<feDisplacementMap in="shape" scale="2.5999999046325684" xChannelSelector="R" yChannelSelector="G" result="displacedImage" width="100%" height="100%" />
<feMerge result="effect1_texture_90_2041">
<feMergeNode in="displacedImage"/>
</feMerge>
</filter>
<pattern id="pattern0_90_2041" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlink:href="#image0_90_2041" transform="scale(0.00204499 0.00242131)"/>
</pattern>

</defs>
</svg> */}

<h2>hghghgh</h2>





</div>

        <div className="shaeaericon">
          <ul>
            <li className="sheareicon"><a href="#"> 
              <img  src="amitimg/share.svg"/>
               </a>
        
            
          <div className="listsocial">
            <ul>
               <li><a href="#"><img src="amitimg/instagram.svg"/></a></li>
               <li><a href="#"><img src="amitimg/twitter.svg"/></a></li>
               <li><a href="#"><img src="amitimg/whatshap.svg"/></a></li>
            </ul> 
          </div>
            
            
            </li>
            <li className="unionclass"><a href="#"><img className="shearesd" src="amitimg/union.svg"/></a>
            
             <div className="unionsocial">
            <ul>
               <li><a href="#"><img src="amitimg/Spotify.svg"/></a></li>
               <li><a href="#"><img src="amitimg/play.svg"/></a></li>
               <li><a href="#"><img src="amitimg/musci.svg"/></a></li>
               <li><a href="#"><img src="amitimg/musci2.svg"/></a></li>
            </ul> 
          </div>
            
            
            </li>
          </ul>
   
          
        </div>
      </div>
    </section>



 <section className=" fade-section playlistfirstsection">
      <div className="flexingsitems">
        <img src="amitimg/playlist2.svg"/>
      </div>
      <div className="flexcontent">
         <div className="textanimationply">
        {/* <svg width="492" height="416" viewBox="0 0 492 416" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g filter="url(#filter0_g_90_2047)">
<rect x="1.2998" y="1.2998" width="489" height="413" fill="url(#pattern0_90_2047)"/>
</g>
<defs>
<filter id="filter0_g_90_2047" x="-0.000195265" y="-0.000195265" width="491.6" height="415.6" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feTurbulence type="fractalNoise" baseFrequency="0.036630038172006607 0.036630038172006607" numOctaves="3" seed="2421" />
<feDisplacementMap in="shape" scale="2.5999999046325684" xChannelSelector="R" yChannelSelector="G" result="displacedImage" width="100%" height="100%" />
<feMerge result="effect1_texture_90_2047">
<feMergeNode in="displacedImage"/>
</feMerge>
</filter>
<pattern id="pattern0_90_2047" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlink:href="#image0_90_2047" transform="matrix(0.00214906 0 0 0.00254453 -0.10711 0)"/>
</pattern>

</defs>
</svg> */}

</div>

        <div className="shaeaericon">
          <ul>
            <li className="sheareicon"><a href="#"> 
              <img  src="amitimg/share.svg"/>
               </a>
        
            
          <div className="listsocial">
            <ul>
               <li><a href="#"><img src="amitimg/instagram.svg"/></a></li>
               <li><a href="#"><img src="amitimg/twitter.svg"/></a></li>
               <li><a href="#"><img src="amitimg/whatshap.svg"/></a></li>
            </ul> 
          </div>
            
            
            </li>
            <li className="unionclass"><a href="#"><img className="shearesd" src="amitimg/union.svg"/></a>
            
             <div className="unionsocial">
            <ul>
               <li><a href="#"><img src="amitimg/Spotify.svg"/></a></li>
               <li><a href="#"><img src="amitimg/play.svg"/></a></li>
               <li><a href="#"><img src="amitimg/musci.svg"/></a></li>
               <li><a href="#"><img src="amitimg/musci2.svg"/></a></li>
            </ul> 
          </div>
            
            
            </li>
          </ul>
   
          
        </div>
      </div>
    </section>

 <section className=" fade-section playlistfirstsection">
      <div className="flexingsitems">
        <img src="amitimg/playlist3.svg"/>
      </div>
      <div className="flexcontent">
        <div className="textanimationply">
       {/* <svg width="492" height="416" viewBox="0 0 492 416" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g filter="url(#filter0_g_90_2052)">
<rect x="1.30005" y="1.2998" width="489" height="413" fill="url(#pattern0_90_2052)"/>
</g>
<defs>
<filter id="filter0_g_90_2052" x="4.88758e-05" y="-0.000195265" width="491.6" height="415.6" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feTurbulence type="fractalNoise" baseFrequency="0.036630038172006607 0.036630038172006607" numOctaves="3" seed="2421" />
<feDisplacementMap in="shape" scale="2.5999999046325684" xChannelSelector="R" yChannelSelector="G" result="displacedImage" width="100%" height="100%" />
<feMerge result="effect1_texture_90_2052">
<feMergeNode in="displacedImage"/>
</feMerge>
</filter>
<pattern id="pattern0_90_2052" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlink:href="#image0_90_2052" transform="matrix(0.00218818 0 0 0.00259085 0 -0.00132986)"/>
</pattern>

</defs>
</svg> */}

</div>

        <div className="shaeaericon">
          <ul>
            <li className="sheareicon"><a href="#"> 
              <img  src="amitimg/share.svg"/>
               </a>
        
            
          <div className="listsocial">
            <ul>
               <li><a href="#"><img src="amitimg/instagram.svg"/></a></li>
               <li><a href="#"><img src="amitimg/twitter.svg"/></a></li>
               <li><a href="#"><img src="amitimg/whatshap.svg"/></a></li>
            </ul> 
          </div>
            
            
            </li>
            <li className="unionclass"><a href="#"><img className="shearesd" src="amitimg/union.svg"/></a>
            
             <div className="unionsocial">
            <ul>
               <li><a href="#"><img src="amitimg/Spotify.svg"/></a></li>
               <li><a href="#"><img src="amitimg/play.svg"/></a></li>
               <li><a href="#"><img src="amitimg/musci.svg"/></a></li>
               <li><a href="#"><img src="amitimg/musci2.svg"/></a></li>
            </ul> 
          </div>
            
            
            </li>
          </ul>
   
          
        </div>
      </div>
    </section>

<section className=" fade-section playlistfirstsection">
      <div className="flexingsitems">
        <img src="amitimg/playlist4.svg"/>
      </div>
      <div className="flexcontent">
         <div className="textanimationply">
        {/* <svg width="492" height="416" viewBox="0 0 492 416" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g filter="url(#filter0_g_90_2057)">
<rect x="1.30005" y="1.2998" width="489" height="413" fill="url(#pattern0_90_2057)"/>
</g>
<defs>
<filter id="filter0_g_90_2057" x="4.88758e-05" y="-0.000195265" width="491.6" height="415.6" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feTurbulence type="fractalNoise" baseFrequency="0.036630038172006607 0.036630038172006607" numOctaves="3" seed="2421" />
<feDisplacementMap in="shape" scale="2.5999999046325684" xChannelSelector="R" yChannelSelector="G" result="displacedImage" width="100%" height="100%" />
<feMerge result="effect1_texture_90_2057">
<feMergeNode in="displacedImage"/>
</feMerge>
</filter>
<pattern id="pattern0_90_2057" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlink:href="#image0_90_2057" transform="matrix(0.00217675 0 0 0.00257732 -0.159557 0)"/>
</pattern>

</defs>
</svg> */}


</div>
        <div className="shaeaericon">
          <ul>
            <li className="sheareicon"><a href="#"> 
              <img  src="amitimg/share.svg"/>
               </a>
        
            
          <div className="listsocial">
            <ul>
               <li><a href="#"><img src="amitimg/instagram.svg"/></a></li>
               <li><a href="#"><img src="amitimg/twitter.svg"/></a></li>
               <li><a href="#"><img src="amitimg/whatshap.svg"/></a></li>
            </ul> 
          </div>
            
            
            </li>
            <li className="unionclass"><a href="#"><img className="shearesd" src="amitimg/union.svg"/></a>
            
             <div className="unionsocial">
            <ul>
               <li><a href="#"><img src="amitimg/Spotify.svg"/></a></li>
               <li><a href="#"><img src="amitimg/play.svg"/></a></li>
               <li><a href="#"><img src="amitimg/musci.svg"/></a></li>
               <li><a href="#"><img src="amitimg/musci2.svg"/></a></li>
            </ul> 
          </div>
            
            
            </li>
          </ul>
   
          
        </div>
      </div>
    </section>
    <section className=" fade-section playlistfirstsection">
      <div className="flexingsitems">
        <img src="amitimg/playlist5.svg"/>
      </div>
      <div className="flexcontent">
        <div className="textanimationply">
        {/* <svg width="492" height="416" viewBox="0 0 492 416" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g filter="url(#filter0_g_90_2062)">
<rect x="1.3" y="1.2998" width="489" height="413" fill="url(#pattern0_90_2062)"/>
</g>
<defs>
<filter id="filter0_g_90_2062" x="-7.15256e-07" y="-0.000195265" width="491.6" height="415.6" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feTurbulence type="fractalNoise" baseFrequency="0.036630038172006607 0.036630038172006607" numOctaves="3" seed="2421" />
<feDisplacementMap in="shape" scale="2.5999999046325684" xChannelSelector="R" yChannelSelector="G" result="displacedImage" width="100%" height="100%" />
<feMerge result="effect1_texture_90_2062">
<feMergeNode in="displacedImage"/>
</feMerge>
</filter>
<pattern id="pattern0_90_2062" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlink:href="#image0_90_2062" transform="matrix(0.00217116 0 0 0.00257069 -0.16546 0)"/>
</pattern>

</defs>
</svg> */}

</div>

        <div className="shaeaericon">
          <ul>
            <li className="sheareicon"><a href="#"> 
              <img  src="amitimg/share.svg"/>
               </a>
        
            
          <div className="listsocial">
            <ul>
               <li><a href="#"><img src="amitimg/instagram.svg"/></a></li>
               <li><a href="#"><img src="amitimg/twitter.svg"/></a></li>
               <li><a href="#"><img src="amitimg/whatshap.svg"/></a></li>
            </ul> 
          </div>
            
            
            </li>
            <li className="unionclass"><a href="#"><img className="shearesd" src="amitimg/union.svg"/></a>
            
             <div className="unionsocial">
            <ul>
               <li><a href="#"><img src="amitimg/Spotify.svg"/></a></li>
               <li><a href="#"><img src="amitimg/play.svg"/></a></li>
               <li><a href="#"><img src="amitimg/musci.svg"/></a></li>
               <li><a href="#"><img src="amitimg/musci2.svg"/></a></li>
            </ul> 
          </div>
            
            
            </li>
          </ul>
   
          
        </div>
      </div>
    </section>
  </main>
    </>
  );
}
