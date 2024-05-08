import { useEffect, useState } from 'react';
import { Shimmer } from './Shimmer';
import { Error } from './Error';

export const Body = () => {
  const [listOfImage, setListOfImage] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchImg = async (page) => {
    try {
      setError(false);
      setLoading(true);
      const response = await fetch(`https://picsum.photos/v2/list?page=${page}&limit=9`);
      const data = await response.json();
      console.log(data);
      setListOfImage(data);
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    } catch (e) {
      setError(true);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchImg(currentPage);
  }, [currentPage]);

  function handleRefresh() {
    fetchImg(currentPage);
  }

  function nextPage() {
    setCurrentPage((currentPage) => currentPage + 1);
    console.log('next Page');
  }

  function prevPage() {
    if (currentPage > 1) {
      setCurrentPage((currentPage) => currentPage - 1);
    }
    console.log('previous page');
  }

  if (error) {
    return <Error handleRefresh={handleRefresh} />;
  }

  return (
    <div className="w-11/12 h-[10rem] px-3 lg:w-11/12 lg:h-[60rem] lg:px-3">
      {loading ? (
        <Shimmer />
      ) : (
        <div className="lg:w-full lg:h-full lg:grid lg:grid-cols-3 lg:gap-4 sm:flex sm:items-center sm:flex-col flex items-center justify-center flex-col">
          {listOfImage.map((list, index) => {
            return (
              <div className="w-full h-full overflow-hidden lg:w-full lg:h-full lg:overflow-hidden sm:overflow-hidden">
                <img
                  key={index}
                  src={list?.download_url}
                  alt="img"
                  className="lg:rounded-xl sm:rounded-md sm:w-full lg:w-full lg:h-full sm:object-cover sm:bg-gray-100 lg:object-cover lg:bg-gray-100 lg:mt-0 mt-2 rounded-md"
                />
              </div>
            );
          })}
        </div>
      )}
      <div className="flex items-center justify-center space-x-3 lg:flex lg:items-center lg:justify-center lg:space-x-6">
        <div className="my-2 w-11/12 h-18 lg:my-4 lg:w-11/12 lg:h-24">
          <button
            disabled={loading}
            onClick={prevPage}
            className="p-2 w-18 text-xs my-2 text-white mx-4 rounded-md enabled:bg-black disabled:bg-gray-600 disabled:cursor-not-allowed lg:text-lg lg:p-2 lg:w-40 lg:text-white lg:mx-4 lg:rounded-xl lg:enabled:bg-black lg:disabled:bg-gray-600 lg:disabled:cursor-not-allowed"
          >
            Previous Page
          </button>
          {currentPage}
          <button
            disabled={loading}
            onClick={nextPage}
            className="p-2 w-18 text-xs my-2 text-white mx-4 rounded-md enabled:bg-black disabled:bg-gray-600 disabled:cursor-not-allowed lg:text-lg lg:p-2 lg:w-40 lg:text-white lg:mx-4 lg:rounded-xl lg:enabled:bg-black lg:disabled:bg-gray-600  lg:disabled:cursor-not-allowed"
          >
            Next Page
          </button>
        </div>
      </div>
    </div>
  );
};
