export const getLoaderColor = (variant, type, theme) => {
  return type === 'default'
    ? theme.colors.btn[variant].base.text
    : theme.colors.btn[variant].outline.text;
};

export const getLoaderSize = (size, theme) => {
  switch (size) {
    case 'xs':
    case 'sm':
      return { loaderSize: 12, iconSize: theme.fontSizes.xs };
    case 'md':
      return { loaderSize: 14, iconSize: theme.fontSizes.sm };
    case 'lg':
      return { loaderSize: 16, iconSize: theme.fontSizes.md };
    default:
      return { loaderSize: 14, iconSize: theme.fontSizes.sm };
  }
};
