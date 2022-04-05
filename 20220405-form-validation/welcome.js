const searchStr = document.location.search;
const queries = new URLSearchParams(searchStr);

const username = queries.get('username');
const petChoice = queries.get('petChoice');

const choices = {
  cat: 'https://images.unsplash.com/photo-1494256997604-768d1f608cac?fit=crop&w=400&h=400',
  dog: 'https://images.unsplash.com/photo-1611003228941-98852ba62227?fit=crop&w=400&h=400',
  pigeon:
    'https://images.unsplash.com/photo-1592964378097-281cab4a12a5?fit=crop&w=400&h=400',
};

const imageUrl = choices[petChoice];

document.getElementById('petImg').src = imageUrl;
document.getElementById('greeting').innerText = `Welcome ${username}`;
console.log(queries.get('petChoice'), queries.get('petChoice'));
