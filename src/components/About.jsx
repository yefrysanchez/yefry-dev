const About = () => {
  return (
    <div className="lg:p-16 grid lg:grid-cols-6 lg:grid-rows-2 gap-4 lg:gap-8 lg:h-[800px] xl:h-[1000px] 2xl:h-[1100px] pb-4">
      <div className="bg-slate-700 rounded-3xl lg:col-span-3 h-[300px] lg:h-auto">
        about
      </div>
      <div className="bg-slate-700 rounded-3xl lg:col-span-3 h-[300px] lg:h-auto">
        about PIC
      </div>
      <div className="bg-slate-700 rounded-3xl lg:col-span-2 h-[300px] lg:h-auto">
        GIT
      </div>
      <div className="bg-slate-700 rounded-3xl lg:col-span-2 h-[300px] lg:h-auto">
        Linkedin
      </div>
      <div className="bg-slate-700 rounded-3xl lg:col-span-2 h-[300px] lg:h-auto">
        Climate
      </div>
    </div>
  );
};

export default About;
