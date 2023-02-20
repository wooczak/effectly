const getRandomColor = () => {
  const colorsArray = ["#A2EAB6", "#A2D2FF", "#F4EEB9", "#F5B8E8"];
  const color = colorsArray[Math.floor(Math.random() * colorsArray.length)];

  return color;
};

export default getRandomColor