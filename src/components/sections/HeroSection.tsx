import ProfileImg from '@/assets/images/adrian-andrea.png';

export default function HeroSection() {
  return (
    <>
      <div className='absolute inset-0 h-full w-full bg-black opacity-70'></div>
      <div className='realtive h-screen w-screen bg-[url("@/assets/images/hero-background.jpg")] bg-cover bg-center bg-no-repeat'>
        <img
          src={ProfileImg}
          alt='dj adrian andrea'
          className='absolute bottom-0 right-0'
        />
      </div>
    </>
  );
}
