import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay } from 'swiper/modules';

const Subjects = () => {
  const subjects = [
    {
      id: 1,
      name: 'Algorithm',
      icon: 'https://i.ibb.co/dWyg51f/workflow-6756837.png',
    },
    {
      id: 2,
      name: 'Algorithm Lab',
      icon: 'https://i.ibb.co/t23j3fD/algorithm.png',
    },
    {
      id: 3,
      name: 'Microprocessor',
      icon: 'https://i.ibb.co/sbWqDwG/cpu-900618.png',
    },
    {
      id: 4,
      name: 'Microprocessor Lab',
      icon: 'https://i.ibb.co/vjpbn3b/hardware.png',
    },
    {
      id: 5,
      name: 'Economics',
      icon: 'https://i.ibb.co/BPvjz2m/economics.png',
    },
    {
      id: 6,
      name: 'E. Devices and Circuits & Pulse Tecq.',
      icon: 'https://i.ibb.co/cCKS84K/heart.png',
    },
    {
      id: 7,
      name: 'E. Devices and Circuits & Pulse Tecq. lab',
      icon: 'https://i.ibb.co/MGCXcQ1/electrical.png',
    },
    {
      id: 8,
      name: 'Computer Architecture',
      icon: 'https://i.ibb.co/pXWycNn/computer-Achitecture.png',
    },
  ];

  return (
    <div className='w-11/12 mx-auto mt-24'>
      <Swiper
        spaceBetween={30}
        autoplay={{
          delay: 1500,
        }}
        modules={[Autoplay]}
        className="mySwiper"
        breakpoints={{
          // When window width is <= 640px (mobile devices), slidesPerView will be 1
          640: {
            slidesPerView: 1,
          },
          // When window width is > 640px (larger screens), slidesPerView will be 6
          1024: {
            slidesPerView: 6,
          },
        }}
      >
        {subjects.map((subject) => (
          <SwiperSlide key={subject.id}>
            <div className='text-center py-10 card bg-[#f2f2f2] h-[150px]'>
              <img className='w-10 mx-auto' src={subject.icon} alt='' />
              <h1 className='font-semibold mt-2'>{subject.name}</h1>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Subjects;
