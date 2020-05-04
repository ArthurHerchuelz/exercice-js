document.getElementById('Block1').style.visibility = 'hidden';
document.getElementById('Block2').style.visibility = 'hidden';
document.getElementById('Block3').style.visibility = 'hidden';


document.onscroll = function onscroll() {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
   document.getElementById('Block1').style.visibility = 'visible';
 }
  else {
  document.getElementById('Block1').style.visibility = 'hidden';
  }
}
