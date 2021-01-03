const mainTheme = {
  headerColor: 'rgba(6, 6, 84, 0.7)',
  borderPrimary: 'solid white 3px',
  borderSecondary: 'solid white 2px',
  metallicBackgroundNormal: (opacity) => `background-image: linear-gradient(
    to right,
    rgba(128, 128, 128, ${opacity}),
    rgba(211, 211, 211, ${opacity}),
    rgba(128, 128, 128, ${opacity})
  )`,
};

export default mainTheme;
