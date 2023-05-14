import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function SocialMediaIcons() {
  return (
    <div className='hidden justify-between gap-4 text-2xl text-red-800 lg:flex'>
      <FontAwesomeIcon icon={['fab', 'soundcloud']} />
      <FontAwesomeIcon icon={['fab', 'facebook']} />
      <FontAwesomeIcon icon={['fab', 'instagram']} />
    </div>
  );
}
