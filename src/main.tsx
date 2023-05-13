import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '@/pages/Home';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  fab,
  faFacebook,
  faInstagram,
  faSoundcloud,
} from '@fortawesome/free-brands-svg-icons';

library.add(fab, faFacebook, faInstagram, faSoundcloud);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
