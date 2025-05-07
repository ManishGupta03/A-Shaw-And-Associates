import { useEffect, useState } from 'react';
import './Background.css'
// import video1 from '../../assets/video2.mp4';
import image1 from '../../assets/img1.jpg';
import image2 from '../../assets/img2.jpg';
import image3 from '../../assets/img3.jpg';
import image4 from '../../assets/img4.jpg';
import image5 from '../../assets/img10.jpg';
import image6 from '../../assets/img6.jpg';
import image7 from '../../assets/img7.jpg';
import image8 from '../../assets/img9.jpg';


const images = [image1, image2, image3, image4, image5, image6, image7, image8];
 
const Background = ({ playStatus, heroCount }) => {

  const [fadeImage, setFadeImage] = useState(images[0]);

  useEffect(() => {
    if(!playStatus){
    const timeout = setTimeout(() => {
      setFadeImage(images[heroCount % images.length]);
    }, 50); // delay ensures React renders fade transition

    return () => clearTimeout(timeout);}
  }, [heroCount,playStatus]);

return (
  <>
    {playStatus ? (
      <video className="background fade-in" autoPlay loop muted playsInline>
        <source src="https://res.cloudinary.com/domntnzxw/video/upload/zmgqdcryiuoi7xuiuucx.mp4" type="video/mp4"/>
        </video>
    ) : (
      <div className="background-container ">
        <img src={fadeImage} className="background imageblur fade-in" alt="background" />
      </div>
    )}
  </>
);
};
export default Background;