document.addEventListener("DOMContentLoaded", function() {
  
  // 1 - 1
  var greeting = document.getElementById('greeting');
  greeting.innerText = "Hello, World!";

  // 1 - 2 
  var list = document.querySelectorAll('li');
  for (var i=0; i < list.length; i++) {
    list[i].style.backgroundColor = "yellow";
  }

  // 1 - 3
  var img = document.createElement('img'); 
  img.setAttribute('width', '100px');
  img.setAttribute('height', '100px');
  img.src= 'http://49.media.tumblr.com/tumblr_m6qt1rjPSz1rxjzkho1_500.gif';
  greeting.appendChild(img);

  // 2 - 1 and 2-2
  // find all elements with the selected class
  // loop through the array to remove each one
  // then add class
  // update the new selected element

  var allSelected = document.querySelectorAll(".selected");
  var foodImg = document.getElementsByTagName('img');
  foodImg = foodImg[1];
  for (var i=0; i < list.length; i++) {
    list[i].addEventListener('click', function(e) {
      allSelected[0].classList.remove('selected');
      e.target.classList.add('selected');
      allSelected = document.querySelectorAll(".selected");
      foodImg.src = "images/"+ e.target.innerText + ".jpeg";
    });
  }

  // 2 - 3
  var ghostDiv = document.getElementById('ghosting');
  ghostDiv.addEventListener("mouseenter", function(e){
    event.target.style.display = 'none';
  });

  // 2 - 4
  var resizeDiv = document.getElementById("resize");
  var originalWidth = resizeDiv.offsetWidth.toString();
  var twice = (originalWidth*2).toString();
  resizeDiv.addEventListener("mouseenter", function(event){
    event.target.style.width = "400px";
  });

  resizeDiv.addEventListener("mouseleave", function(event){
    event.target.style.width = "200px";
  });

  // 2 - 5
  var button = document.getElementById("reset");
  button.addEventListener("click", function(event){
    allSelected[0].classList.remove('selected');
    foodImg.src = "images/panic.jpeg";
  });

  // 2-6
  var input = "";
  var konami = "383840403739373966986597";
  window.addEventListener('keypress', function(k) {
    input += k.which;
    if (k.which >= 48  && k.which <= 57) {
      alert("I HATE NUMBERZZZ!");
    } else if (input == konami) {
      alert("YOU ARE AN EVENT HANDLER GURUUUUUUUUU!");
    }
    // console.log(input);
    // console.log(k.which);
  });

  window.addEventListener('keydown', function(k) {
    input += k.which;
    if (k.which >= 48  && k.which <= 57) {
      alert("I HATE NUMBERZZZ!");
    } else if (input == konami) {
      alert("YOU ARE AN EVENT HANDLER GURUUUUUUUUU!");
    }
    // console.log(input);
    // console.log(k.which);
  });

});

