import '../styles/global.css';
import { useEffect } from 'react';
import { themeChange } from 'theme-change';

function MyApp({ Component, pageProps }) {
  const themeValues = [
    'Night',
    'Pastel',
    'Black',
    'Corporate',
    'Synthwave',
    'Cyberpunk',
    'Dracula',
    'Aqua',
  ];

  useEffect(() => {
    themeChange(false);
  });
  return (
    <>
      <select
        className="absolute bg-primary text-primary-content rounded-lg px-2 py-0.5 m-2"
        data-choose-theme
      >
        <option value="">Light</option>
        {themeValues.map((value) => (
          <option key={value.toLowerCase()} value={value.toLowerCase()}>
            {value}
          </option>
        ))}
      </select>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
