let lis = document.getElementById("list");
let ite = document.getElementById('butn1');
let fe = document.getElementsByClassName('free');
let bu = document.getElementById("logu");

function ru(param) {
  if (lis.style.width === '181px') {
    lis.style.transition = "3s";
    bu.style.width = "50px";
    ite.style.transition="3s";
    ite.style.width = "50px"
    for (let i = 0; i < fe.length; i++) {
      fe[i].style.display = 'none';
    }
    lis.style.width = '0px';
    bu.style.transition="3s";
  } else {
    lis.style.transition = "3s";
    ite.style.width = "181px";
    
    for (let i = 0; i < fe.length; i++) {
      fe[i].style.display = 'block';
    }
  ite.style.transition="3s";
lis.style.width = '181px';
 bu.style.width = "180px";
 bu.style.transition="3s";
 
  }
}
