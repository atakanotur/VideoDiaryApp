// const black = '';
// const white = '';
// const grey = '';
// const red = '';
// const blue = '';

// const light = {
//   primary: white,
//   secondary: grey,
//   background: white,
//   text: black,
//   border: grey,
//   error: red,
//   success: blue,
// };

// const dark = {
//   primary: black,
//   secondary: grey,
//   background: black,
//   text: white,
//   border: grey,
//   error: red,
//   success: blue,
// };

// export { light, dark };

import { vars } from 'nativewind';

export const themes = {
  light: vars({
    '--color-primary': 'black',
    '--color-secondary': 'white',
    
  }),
  dark: vars({
    '--color-primary': 'white',
    '--color-secondary': 'dark',
  }),
};
