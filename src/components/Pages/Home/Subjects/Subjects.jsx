import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';

const Subjects = () => {
  const subjects = [
    {
      id: 1,
      name: 'Algorithm',
      icon: 'https://i.ibb.co/dWyg51f/workflow-6756837.png',
      path: 'algorithm/'
    },
    {
      id: 2,
      name: 'Algorithm Lab',
      icon: 'https://i.ibb.co/t23j3fD/algorithm.png',
      path: 'algorithm lab'
    },
    {
      id: 3,
      name: 'Microprocessor',
      icon: 'https://i.ibb.co/sbWqDwG/cpu-900618.png',
      path: 'microprocessor'
    },
    {
      id: 4,
      name: 'Microprocessor Lab',
      icon: 'https://i.ibb.co/vjpbn3b/hardware.png',
      path: 'microprocessor lab'
    },
    {
      id: 5,
      name: 'Economics',
      icon: 'https://i.ibb.co/BPvjz2m/economics.png',
      path: 'economics'
    },
    {
      id: 6,
      name: 'E. Devices and Circuits & Pulse Tecq.',
      icon: 'https://i.ibb.co/cCKS84K/heart.png',
      path: 'pulse'
    },
    {
      id: 7,
      name: 'E. Devices and Circuits & Pulse Tecq. lab',
      icon: 'https://i.ibb.co/MGCXcQ1/electrical.png',
      path: 'pulse lab'
    },
    {
      id: 8,
      name: 'Computer Architecture',
      icon: 'https://i.ibb.co/pXWycNn/computer-Achitecture.png',
      path: 'architecture'
    },
  ];

  return (
    <div className='w-11/12 mx-auto mt-24'>
      <Swiper
        spaceBetween={30}
        style={{
          '--swiper-navigation-color': '#D9042B',
          '--swiper-pagination-color': '#D9042B',
          '--swiper-navigation-size' : '30px'
        }}
        autoplay={{
          delay: 1500,
        }}
        navigation={true}
        modules={[Autoplay, Navigation]}
        className="mySwiper"
        breakpoints={{
          // When window width is <= 640px (mobile devices), slidesPerView will be 1
          576: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 4,
          },
          // When window width is > 640px (larger screens), slidesPerView will be 6
          1024: {
            slidesPerView: 5,
          },
          1200: {
            slidesPerView: 6,
          },
        }}
      >
        {subjects.map((subject) => (
          <SwiperSlide key={subject?.id}>
            <Link to={`/subwise/${subject?.path}`}>
            <div className='text-center py-10 card bg-[#f2f2f2] h-[170px]'>
              <img className='w-10 mx-auto' src={subject?.icon} alt='' />
              <h1 className='font-semibold mt-2'>{subject?.name}</h1>
            </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Subjects;
