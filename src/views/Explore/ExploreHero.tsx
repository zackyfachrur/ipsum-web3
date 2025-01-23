import Hero from "/assets/HeroSlider/Hero-1.png";

const ExploreHeros = () => {
  return (
    <>
      <section
        className={`bg-[url('/assets/Hero-Gradient.png')] bg-center bg-cover w-[100vw] flex justify-center items-center p-20 h-[100vh] -z-0 flex-col pt-32`}
      >
        <div className="flex flex-col items-center justify-center gap-4">
          <h2 className="text-6xl font-bold">Explore More</h2>
          <p className="text-xl uppercase text-colorAqua">
            Explore More Games That You Like
          </p>
        </div>
        <img src={Hero} alt="Hero Images" className="mt-12 w-[80vw]" />
      </section>
    </>
  );
};

export default ExploreHeros;
