const isAdult = (age) => age > 18;
const canDrink = (age) => age > 15;
const isSeniorCitizen = (age) => age > 60;

export { isAdult, canDrink, isSeniorCitizen as default };