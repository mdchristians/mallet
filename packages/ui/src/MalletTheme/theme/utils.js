export const generateBtnAliases = (color) => {
  return {
    base: {
      text: color.text,
      bg: color.main,
      active: {
        bg: color.dark,
        ripple: color.light,
      },
    },
    outline: {
      bg: 'transparent',
      text: color.main,
      border: color.main,
      active: {
        bg: color.subtle,
        text: color.dark,
        border: color.dark,
      },
    },
    subtle: {
      bg: 'transparent',
      text: color.main,
      active: {
        bg: color.subtle,
        text: color.dark,
        ripple: color.subtle,
      },
    },
  };
};
