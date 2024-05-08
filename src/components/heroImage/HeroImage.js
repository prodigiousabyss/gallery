import { useEffect, useState } from 'react';
import { Error } from '../body/Error';

export const HeroImage = () => {
  const [photo, setPhoto] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [error, setError] = useState(false);

  const fetchImg = async () => {
    try {
      setError(false);
      const response = await fetch('https://picsum.photos/v2/list?limit=20');
      const data = await response.json();
      console.log(data);
      setPhoto(data);
      console.log(photo);
    } catch (e) {
      setError(true);
    }
  };

  useEffect(() => {
    fetchImg();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleRefresh() {
    fetchImg();
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (currentSlide < photo.length - 1) {
        setCurrentSlide((currentSlide) => currentSlide + 1);
      } else {
        setCurrentSlide(0);
      }
    }, 4000);
    return () => clearInterval(intervalId);
  }, [currentSlide, photo]);

  if (error) {
    return <Error handleRefresh={handleRefresh} />;
  }
  return (
    <div className="lg:h-[24rem] lg:w-11/12 lg:border-2 lg:rounded-xl lg:my-6 lg:overflow-hidden">
      <div className="lg:w-full lg:h-full lg:overflow-hidden">
        <img
          src={photo?.[currentSlide]?.download_url}
          alt="banner"
          className="lg:w-full lg:h-full lg:object-cover lg:bg-gray-100"
        />
      </div>
    </div>
  );
};
