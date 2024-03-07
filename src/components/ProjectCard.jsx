const ProjectCard = () => {
  return (
 
      <div className="relative  rounded-3xl overflow-hidden h-[300px] md:h-[350px] lg:h-[500px]">
        <img
        className="h-full w-full object-cover"
          src="https://images.pexels.com/photos/2693212/pexels-photo-2693212.png?cs=srgb&dl=pexels-anni-roenkae-2693212.jpg&fm=jpg"
          alt=""
        />
        <p className="absolute left-4 bottom-4 text-4xl text-white font-semibold">
          Tecmatic
        </p>

    </div>
  );
};

export default ProjectCard;
