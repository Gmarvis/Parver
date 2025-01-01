export const scrollAnimation = () => {
  return {
    offScreen: {
      y: 150,
      opacity: 0
    },
    onScreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        duration: 0.5
      }
    }
  };
};
