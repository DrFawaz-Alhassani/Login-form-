//كود لاخفاء جميع العناصر عند التحميل 
window.onload =function ee(){
 let hide = document.querySelectorAll('section');
 hide.forEach(hide => hide.classList.add('section'));
};
//كود لاظهار عنصر محدد من القائمة الجانبية 



function show(sectionid){
  let show = document.getElementById(sectionid);
let hide = document.querySelectorAll('section');

  if (sectionid==='section3'){
  hide.forEach(hide => hide.classList.remove('active'));
show.classList.add('active');
document.getElementById('section3').style.display='grid';

  }
  else{
  document.getElementById('section3').style.display='none';
  hide.forEach(hide => hide.classList.remove('active'));
  show.classList.add('active');
  }
  
};


//كود لاخفاء القائمة الجانبية 
function hedilist() {
  const hide = document.querySelector('.list-ul');
  hide.style.transition = "3s"; // تعيين الانتقال قبل تغيير العرض

  if (getComputedStyle(hide).display === 'block') {
    hide.style.display = 'none';
  } else {
    hide.style.display = 'block';
  }
}



//كود للتعامل مع حذف عنصر من قاعدة بياناتك  بناءا على رقم المعرف 
function deleteforid(){
  
};