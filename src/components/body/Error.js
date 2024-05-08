import image from '../../constants/images/error.png';

export const Error = ({ handleRefresh }) => {
  return (
    <div className="h-[18rem] flex items-center justify-center flex-col my-4 w-11/12 rounded-lg bg-gray-100 lg:flex lg:items-center lg:justify-center lg:flex-col lg:h-[24rem] lg:my-6  lg:w-11/12 lg:rounded-xl lg:bg-gray-100">
      <img src={image} alt="cat" className="w-[12rem] h-[12rem] lg:w-[15rem] lg:h-[15rem]" />
      <h1 className="font-bold text-lg my-2 lg:font-bold lg:text-2xl lg:my-4">oops! Something went wrong!</h1>
      <button
        className="p-2 bg-black text-white text-xs rounded-lg lg:text-xl lg:p-3 lg:w-[8rem] lg:bg-black lg:text-white lg:rounded-xl"
        onClick={handleRefresh}
      >
        Reload
      </button>
    </div>
  );
};
