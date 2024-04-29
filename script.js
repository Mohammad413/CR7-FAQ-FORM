let list1 = document.querySelector("#one");
let list2 = document.querySelector("#two");
let list3 = document.querySelector("#three");

list1.addEventListener("click", (event) => {
  let p_1 = document.querySelector("#list-1");
  let icon = event.target.querySelector('i');

  if (p_1.style.display === "") {

    icon.classList.remove('fa-plus');
    icon.classList.add('fa-minus');
    icon.style.color = '#d1003f';
    p_1.style.display = "block"
    let p_2 = document.querySelector("#list-2");
    let p_3 = document.querySelector("#list-3");
    p_2.style.display = ""
    p_3.style.display = ""
  } 
  else {
    p_1.style.display = ""
    icon.classList.remove('fa-minus');
    icon.classList.add('fa-plus');
    icon.style.color = '#63E6BE';
  }


});





list2.addEventListener("click", (event) => {
  let p_2 = document.querySelector("#list-2");
  let icon = event.target.querySelector('i');


  if (p_2.style.display === "") {
    p_2.style.display = "block"
    let p_1 = document.querySelector("#list-1");
    let p_3 = document.querySelector("#list-3");
    p_1.style.display = ""
    p_3.style.display = ""
    icon.classList.remove('fa-plus');
    icon.classList.add('fa-minus');
    icon.style.color = '#d1003f';

  } else {
    p_2.style.display = ""
    icon.classList.remove('fa-minus');
    icon.classList.add('fa-plus');
    icon.style.color = '#63E6BE';

  }


});






list3.addEventListener("click", (event) => {
  let p_3 = document.querySelector("#list-3");
  let icon = event.target.querySelector('i');

  let p_2 = document.querySelector("#list-2");
  let p_1 = document.querySelector("#list-1");

  if (p_3.style.display === "") {
    p_3.style.display = "block"
    p_2.style.display = ""
    p_1.style.display = ""
    icon.classList.remove('fa-plus');
    icon.classList.add('fa-minus');
    icon.style.color = '#d1003f';
  } else {
    p_3.style.display = ""
    icon.classList.remove('fa-minus');
    icon.classList.add('fa-plus');
    icon.style.color = '#63E6BE';
  }


});