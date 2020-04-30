document.getElementById('submit').onclick = function autorisation() {
  let age = document.getElementById('age').value;
   if (age < 18) {
alert('Vous êtes mineur!');
}
  else {
alert('Vous êtes majeur!')
}
};
