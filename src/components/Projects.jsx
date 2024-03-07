import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div className="bg-zinc-900/60 rounded-3xl pb-16 pt-12 px-8">
      <h1 className="text-orange-100 text-6xl mb-16">
        <span className="italic">p</span>rojects
      </h1>

      <div className="grid gap-8 lg:grid-cols-5 ">
        <div className="lg:col-span-3"><ProjectCard /></div>
        <div className="lg:col-span-2"><ProjectCard /></div>
        <div className="lg:col-span-2"><ProjectCard /></div>
        <div className="lg:col-span-3"><ProjectCard /></div>
     
      </div>
    </div>
  );
};

export default Projects;
