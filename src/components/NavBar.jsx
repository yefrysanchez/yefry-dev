import logo from "../assets/logo.png";

const NavBar = () => {
  return (
    <nav className="inline-block">
      <a href="">
        <div className="h-20">
          <img className="h-full w-full object-cover" src={logo} alt="Logo" />
        </div>
      </a>
    </nav>
  );
};

export default NavBar;
