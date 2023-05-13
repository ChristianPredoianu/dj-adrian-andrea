import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function SocialMediaIcons() {
  return (
    <div className='w-1/6 flex justify-between'>
      <FontAwesomeIcon icon={['fab', 'soundcloud']} />
      <FontAwesomeIcon icon={['fab', 'facebook']} />
      <FontAwesomeIcon icon={['fab', 'instagram']} />
    </div>
  );
}
