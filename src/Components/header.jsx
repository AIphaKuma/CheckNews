import logo from '../assets/checknews.png';

const Header = () => {
    return (
      <header className="bg-steel text-white w-full py-4">
        <div className="container mx-auto flex justify-center items-center px-4">
          <div className="logo flex justify-center flex-col items-center">
          <img src={logo} alt="Logo checknews" className="w-[150px]" />
          <h2 className="text-4xl text-steels paytone-one-regular">Truth in Every Click</h2>
          </div>
          
        </div>
      </header>
    );
  };
  

export default Header;
