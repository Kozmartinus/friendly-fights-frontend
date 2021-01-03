const mainTheme = {
  headerColor: 'rgba(6, 6, 84, 0.7)',
  borderPrimary: 'solid white 3px',
  borderSecondary: 'solid white 2px',
  tripleGradientBackground: `rgba(75, 77, 124, 0.9),
    rgba(219, 219, 219, 0.9),
    rgba(75, 77, 124, 0.9)`,
  borderRadius: '20px',
  inactiveButtonColor: 'rgba(163, 163, 163)',
  activeButtonColor: 'white',
  greyBackgroundColor: 'rgba(117, 117, 117, 0.5)',
  metallicBackgroundNormal: (opacity) => `background-image: linear-gradient(
    to right,
    rgba(128, 128, 128, ${opacity}),
    rgba(211, 211, 211, ${opacity}),
    rgba(128, 128, 128, ${opacity})
  )`,
};

export default mainTheme;
