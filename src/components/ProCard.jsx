const ProCard = () => {
  return (
    <div className="relative h-full w-full rounded-3xl overflow-hidden group">
      <img
        className="h-full w-full object-cover group-hover:opacity-70 group-hover:scale-105 transition duration-400"
        src="https://framerusercontent.com/images/yeMjyZFBIbIpBvw4fReP199oif0.png"
        alt="project image"
      />
      <div className="absolute left-4 bottom-4 lg:left-8 lg:bottom-8">
        <h2 className="font-semibold italic text-3xl lg:text-5xl opacity-0 group-hover:opacity-100 transition duration-400">Redesigns</h2>
        <p className="opacity-0 group-hover:opacity-100 transition-all">Project Description</p>
      </div>
    </div>
  );
};

export default ProCard;
