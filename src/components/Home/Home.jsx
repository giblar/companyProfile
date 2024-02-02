

const Home = () => {
  return (
    <div className="h-screen relative">
      <img className="w-full h-full object-cover" src="/image/building.png" alt="logo" />

      <div className="bg-slate-600 flex absolute top-14">
        <div className="flex flex-col">
          <img src="/image/rounded.jpg" className="w-1/4 mb-4" alt="Rounded" />
          <img src="/image/rounded.jpg" className="w-1/3" alt="Rounded" />
        </div>

        <div className="ml-4">
          <h1 className="text-7xl font-bold text-white">
            <span className="text-blue-950">Deep</span> Understanding,
          </h1>
          <h1 className="text-7xl font-bold text-white">
            Inspirational <span className="text-blue-950">Solutions</span>
          </h1>
        </div>
      </div>
      
    </div>
  );
};

export default Home;
