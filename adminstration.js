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

function fename(param) {
    const aa = localStorage.getItem("Username");
    const ab = localStorage.getItem("Email");
    const ac = localStorage.getItem("password");
    const ad = localStorage.getItem("repassword");
    const tb = document.getElementById("tbb1").getElementsByTagName('tbody')[0];
    const ce = tb.insertRow();
    
    
   
   
   if(aa && ab && ac){
     const countrows = tb.rows.length - 1; // احصل على عدد الصفوف
    ce.insertCell(0).innerText = countrows -1; // الرقم التسلسلي
    
     const bea = document.getElementById('sph4');
   bea.innerText = countrows;
   
    ce.insertCell(1).innerText = aa; // الاسم
    ce.insertCell(2).innerText = ac; // كلمة المرور
    ce.insertCell(3).innerText = ab; // البريد الإلكتروني

    // أضف الأزرار إلى الخلايا باستخدام innerHTML
    ce.insertCell(4).innerHTML = '<button type="button" onclick="editRow(this)">تعديل</button>';
    ce.insertCell(5).innerHTML = '<button type="button" onclick="deleteRow(this)">حذف</button>';
    
    localStorage.removeItem("Username");
    localStorage.removeItem("Email");
    localStorage.removeItem("password");
    localStorage.removeItem("repassword");
   }
   else{
   }
   
}


window.onload = fename();

// دالة لتعديل صف
function editRow(button) {
    
    const row = button.parentNode.parentNode; 
    const username = row.cells[1].innerText = window.prompt("Enter new value ! for uosername !");
    const password = rows.classList[2].innerText= window.prompt("Enter new value ! for password!");
    const email = row.cells[3].innerText= window.prompt("Enter new value ! for uosername !");
    
    
}

// دالة لحذف صف
function deleteRow(button) {
    const row = button.parentNode.parentNode; // الحصول على الصف
    row.parentNode.removeChild(row); // حذف الصف من الجدول
}



// تنفيذ الدالة كل 20 ثانية
setInterval(() => fename(), 5000);
