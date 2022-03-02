const sayFaveColour = (person) => {
  const faveColours = {
    "August": "purple",
    "Haz": "atomic tangerine"
  };

  console.log(`${person}'s favourite colour is ${faveColours[person]}.`)
};

sayFaveColour("August");
sayFaveColour("Haz");
