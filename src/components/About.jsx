import img1 from './../assets/Saly-26.png';
import img2 from './../assets/Saly-25.png';
import img3 from './../assets/Saly-27.png';

const About = () => {
  const items = [
    {
      id: 1,
      img: img1,
      text: 'Convenient study schedule',
    },
    {
      id: 2,
      img: img2,
      text: 'Convenient homework by teachers',
    },
    {
      id: 3,
      img: img3,
      text: 'Convenient internet platform',
    },
  ];

  return (
    <section className="lg:px-16 px-6 mx-auto max-w-7xl xl:mt-24 md:mt-[50px] lg:mt-[76px] mt-10">
      <div className="flex sm:flex-row flex-col justify-between lg:gap-3 gap-6 xl:gap-0">
        <article className="flex flex-col items-center xl:w-1/4 xl:gap-5 lg:w-1/3 md:w-1/3 lg:gap-3 gap-2">
          <h1 className="md:text-[24px] xl:text-4xl lg:text-[28px] text-[22px] font-semibold ">
            Why are we better than others!
          </h1>
          <p className=" text-[16px] lg:text-xl text-[#222]">
            On the other hand, we denounce with righteous indignation and
            dislike men who are so beguiled and demoralised
          </p>
        </article>

        <ul className="flex sm:flex-row items-center flex-col lg:gap-8 md:gap-6 gap-6">
          {items.map((item) => (
            <li
              key={item.id}
              className={`flex items-center gap-4 flex-col lg:rounded-[40px] sm:rounded-[30px] rounded-[30px] p-6 xl:h-[320px] xl:w-[240px] lg:w-[180px] lg:h-[260px] md:h-[210px] md:w-[145px] h-[200px] w-[190px] ${
                item.id === 2 ? 'sm:mt-16' : 'mt-0'
              }`}
              style={{ boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)' }} // Subtle shadow
            >
              <img
                src={item.img}
                alt={item.text}
                className="xl:h-[160px] xl:w-[170px] lg:h-[120px] lg:w-[130px] md:h-[65px] md:w-[86px] w-[65px] h-[80px] object-contain"
              />
              <p className="lg:text-xl text-center font-semibold leading-5">
                {item.text}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default About;
