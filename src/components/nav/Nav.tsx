import NavLinks from '@/components/nav/NavLinks';
import SocialMediaIcons from '@/components/ui/SocialMediaIcons';

export default function Nav() {
  return (
    <header>
      <nav className='container mx-auto bg-red-500 flex justify-between items-center'>
        <p>Dj Adrian Andrea</p>
        <NavLinks />
        <SocialMediaIcons />
      </nav>
    </header>
  );
}
