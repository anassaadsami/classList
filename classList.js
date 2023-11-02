
  let button = document.getElementsByClassName("btn")[0];
  let div1 = document.getElementsByClassName("div1")[0];

  console.log(document.getElementById('on').classList.length);
  console.log(document.getElementById('on'));

  // now when we click on the button so we change its color
  // but we can not back to its original state
  button.onclick = function () {
    div1.style.backgroundColor = "red";
  };
  // now we have 2 buttons one change div color and other
  // return back div to its original color

  let on = document.getElementsByClassName("on")[0];
  let off = document.getElementsByClassName("off")[0];
  let div2 = document.getElementsByClassName("div2")[0];

  // when we click on button so we add className (change) to
  // element div2 and this class name have already changes in css file
  on.onclick = function () {
    div2.classList.add("change");
  };

  // when click off button so we remove this classname from div2 classList
  // so it will back to its original state
  off.onclick = function () {
    div2.classList.remove("change");
  };

  // but we have best way to do add and remove together
  // by using toggle method

  let onOff = document.getElementById("switch");
  let div3 = document.getElementsByClassName("div3")[0];
  onOff.onclick = function () {
    div3.classList.toggle("change");
  };

  // three button when i click one , second button will be shown 
  // cause hidden classname will remove from it, and other button 
  // will be hidden cause hidden classname will add to it
  let hidden = document.getElementsByClassName("hidden")[0];
  let show = document.getElementsByClassName("show")[0];
  let willHidden = document.getElementsByClassName("willHidden")[0];

  show.onclick = function(){
    hidden.classList.remove('hidden');  // this will be shown
    willHidden.classList.add('hidden');  // this will be hidden
  };


