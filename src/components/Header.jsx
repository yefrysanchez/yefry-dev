const Header = () => {
  return (
    <div className="h-screen p-4 lg:p-8">
      <div className="bg-slate-100/30 h-full rounded-3xl flex justify-center items-center">
        <div className="text-white text-center">
          <p className="text-4xl">Hey, I am</p>
          <h1 className="text-[90px] font-semibold my-8 italic">Yefry</h1>
          <p className="text-4xl flex flex-col gap-8 lg:hover:italic">
            <span className="border-2 rounded-3xl hover:rounded-xl py-2">
              Front-End
            </span>{" "}
            <span>Developer</span>
          </p>
        </div>
        <p className="absolute right-14 bottom-12 text-gray-300 font-semibold">
          Bronx, NY
        </p>
      </div>
    </div>
  );
};

export default Header;
