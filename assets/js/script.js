
document.getElementById('submit').onclick = function resumeForm() {
  let firstname = document.getElementById("firstname").value;
  let lastname = document.getElementById("lastname").value;
  let city = document.getElementById("city").value;
  alert('Nom : ' + lastname + '\nPrénom : ' + firstname + '\nVille : ' +  city);
};
