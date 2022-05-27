function getIceCreamOptions(iceCreams, maxPrice, isVegan) {
  return iceCreams.filter((element) => isVegan && element.type === "vegan" && element.price < maxPrice);
}

module.exports = getIceCreamOptions;
