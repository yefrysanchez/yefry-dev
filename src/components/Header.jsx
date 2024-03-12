
import Hero from "./Hero";
import NavBar from "./NavBar";

const Header = () => {


    
  return (
    <header className="h-screen  font-semibold pt-8 lg:pt-16 ">
      <NavBar />
      <Hero />
    </header>
  );
};

export default Header;
