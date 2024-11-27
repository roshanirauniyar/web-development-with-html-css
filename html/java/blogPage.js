function myFunction(a) {
  var dots = document.getElementById("dots" + a);
  var moreText = document.getElementById("more" + a);
  var btnText = document.getElementById("myBtn" + a);
  //var lastBtn = document.querySelector('#myBtn4');

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}

