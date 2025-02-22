const size = {
  mobileS: '320px',
  mobileM: '390px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '1920px',
};

export const device = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  tabletMX: `(max-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopMX: `(max-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
  desktopMX: `(max-width: ${size.desktop})`,
  desktopL: `(min-width: ${size.desktop})`,
};
