import React from "react";
import { useNavigate } from "react-router-dom"
import "./Slideshow.css"

const images = ["https://i.imgur.com/mNJTHys.mp4", "https://cdn.shopify.com/s/files/1/0614/0303/7892/articles/Elf-Bar-Bc5000-Disposable-Banner-Tagline_1400x.progressive.jpg?v=1660769809", "https://i.imgur.com/QJFBrDr.jpg"]
const delay = 8000;




//Slideshow
function Slideshow() {
  const [index, setIndex] = React.useState(0);
  const timeoutRef = React.useRef(null);

  
  const navigate = useNavigate();
  const reDirect = () => {
        if({index}.index < 1) {
            navigate("/product/97")
        } else if ({index}.index > 0 && {index}.index < 2) {
            navigate("/product/58")
        } else if({index}.index > 1){
            navigate("/search")
        }
    }

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  React.useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className="slideshow">
      <div
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {images.map((backgroundImage, index) => (
          <div
            className="slide cursor-pointer"
            key={index}
            style={{   backgroundImage: "url(" + images[index] + ")",
            backgroundPosition: 'center',
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            }}onClick={reDirect}
          ><video autoPlay loop muted id='video' className="m-auto h-full"><source src={images[index]} type='video/mp4'></source></video></div>
        ))}
      </div>

      <div className="slideshowDots">
        {images.map((_, idx) => (
          <div
            key={idx}
            className={`slideshowDot${index === idx ? " active" : ""}`}
            onClick={() => {
              setIndex(idx);
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}
export default Slideshow