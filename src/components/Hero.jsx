import Button from './Button';
import heroImg from './../assets/hero2.png';

const Hero = () => {
  return (
    <main className="lg:px-8 px-4 mx-auto max-w-7xl lg:mt-5 md:mt-3 mt-1">
      <section
        id="overview"
        className="bg-gradient-to-r from-[#7b10c3] to-[#d21887] lg:rounded-tl-[40px] lg:rounded-tr-[40px] lg:rounded-bl-[40px] xl:rounded-br-[200px] lg:rounded-br-[170px] md:rounded-tl-[26px] md:rounded-tr-[26px] md:rounded-bl-[26px] md:rounded-br-[120px] rounded-2xl overflow-hidden shadow-lg"
      >
        <div className="flex md:flex-row flex-col xl:px-12 xl:py-10 lg:px-10 lg:pb-12 lg:pt-4 md:py-9 md:px-6 p-6 items-center">
          <div className="flex flex-col xl:gap-7 lg:gap-6 md:gap-5 gap-4 w-full md:w-2/3">
            <h1 className="lg:text-[44px] xl:text-[58px] md:text-[38px] text-[28px] xl:leading-[67px] lg:leading-[60px] md:leading-[45px] leading-[34px] font-semibold text-white">
              Develop your skills without diligence
            </h1>
            <p className="xl:text-xl text-[16px]  xl:w-4/5 lg:w-4/5 md:w-5/6 w-full md:text-sm text-[#f5f5f5]">
              But I must explain to you how all this mistaken idea of denouncing
              pleasure and praising fun was born, and I will give you a complete
              account of the system.
            </p>

            <div className="flex gap-2">
              <Button name={'Get Started'} />
              <button className="text-[#c675c1] bg-transparent border-[#c675c1] border py-1.5 lg:px-3 md:px-2 px-1 rounded-lg md:text-lg text-xs transition duration-300 ease-in-out hover:bg-[#c675c1] hover:text-white hover:border-transparent hover:shadow-md transform hover:scale-105">
                Discount
              </button>
            </div>
          </div>

          <div>
            <img
              src={heroImg}
              alt="hero"
              className="object-contain xl:w-full xl:h-full lg:h-[310px] md:h-[240px] md:w-[400px] lg:w-[500px] h-[220px] w-full mt-4 md:mt-0"
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Hero;
