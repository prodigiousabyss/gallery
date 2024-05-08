import logo from '../../constants/images/logo.png';

export const Header = () => {
  return (
    <div className="bg-black w-full h-14 flex items-center justify-start px-8 space-x-2 lg:bg-black lg:w-full lg:h-16 lg:flex lg:items-center lg:justify-start lg:px-10 lg:space-x-4">
      <div className="w-6 h-6 lg:w-8 lg:h-8">
        <img src={logo} alt="logo" className="h-full lg:h-full" />
      </div>
      <div>
        <h1 className="font-mont font-medium text-lg text-white lg:font-mont lg:font-medium lg:text-xl lg:text-white">
          Gallery
        </h1>
      </div>
      <div />
    </div>
  );
};
