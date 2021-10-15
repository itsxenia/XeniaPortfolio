/* Mobile Menu Toggle Button JavaScript */
function myFunction() {
    
  var x = document.getElementById("mobile-menu");
  console.log('here', x)
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}