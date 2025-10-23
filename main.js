let bak= document.getElementById("sec");
let box= document.getElementById("box");
let wr = document.getElementById("dark")

const boxx = document.getElementById('box');
const forget = document.getElementById('forget');
const email = document.getElementById("email11");
const repassword = document.getElementById("repassword11");
const lab1 = document.getElementById('email1');
const lab2 = document.getElementById('repassword1');
const inboxx = document.getElementById('inputboxx');
const inboxx1 = document.getElementById('inputboxx1');
const ve = document.getElementById('inputboxx12');
//كود لارجاع رمز تحقق
function renumber (){
const renum = Math.floor(100000 + Math.random()* 900000);
return renum.toString()
};



function gi(){
if (wr.innerText=="Dark mode") {
  bak.style.background="#123";
  bak.style.transition="4s"
  box.style.border="2px solid rgba(28, 120, 59, 1)";
  wr.innerText="White Mode"
} else if(wr.innerText=="White Mode") {
  bak.style.background="url('e.jpeg')";
  bak.style.backgroundSize='cover';
  bak.style.transition="4s";
  box.style.border="2px solid rgba(255, 255, 255, 0.5)";
  wr.innerText="Dark mode";
}

};


let las= document.getElementById("s")
let lass = document.getElementById("ss")
let lan = document.getElementById("lan");
let btn = document.getElementById("btn");
let h2= document.getElementById("h2");


function lange () {
  if (lan.innerText=="عربي") {
    ve.innerText = "رمز التحقق";
    lan.innerText="English";
    lab1.innerText="البريد الالكتروني";
 lab2.innerText="اعد كتابة كلمة المرور";
    btn.innerText="تسجيل الدخول";
    las.innerText="اسم المستخدم";
    lass.innerText="كلمة المرور";
    h2.innerText="تسجيل الدخول";
  document.getElementById('fo').innerHTML = 'هل نسيت كلمة المرور؟ <a id="repa" href="#">استرجاع كلمة المرور</a>';
  document.getElementById('do').innerHTML = 'هل لاتمتلك حساب لدينا ..؟<a onclick="widthbocauto()" id="forget" href="#">انشاء حسابك الآن </a>';
    
      } else if(lan.innerText=="English"){
    lan.innerText="عربي";
    btn.innerText="Log in";
    lab1.innerText="Email"
    lab2.innerText="repassword"
    las.innerText="Username";
    lass.innerText="Password";
    h2.innerText="Log in Form";
    ve.innerText = "Code";
    document.getElementById('fo').innerHTML = 'Do not forget password <a id="repa" href="#"> : forget password now </a>';
 document.getElementById('do').innerHTML = 'Do not have account <a onclick="widthbocauto()" id="forget" href="#"> Create account</a>';
    
  }
};


let text1 = document.getElementById("emi");
let pass = document.getElementById("password"); // تأكد من وجود حقل إدخال بهذا المعرف
let text3 = document.getElementById("email11");
let text4 = document.getElementById("repassword11");


function validateCredentials() {
  // التحقق من اسم المستخدم وكلمة المرور
localStorage.setItem("username", text1.value);
localStorage.setItem("password", pass.value);

const user = localStorage.getItem("username");
const pasr = localStorage.getItem("password");


  if (user=== "admin" && pasr==="1234") {
    window.open('home.html');
    
  } else{
    
    text1.value = "خطأ في بياناتك عزيزي المستخدم"; 
    pass.value = "خطأ في كلمة المرور";
  }
}


// تغيير الوضع الى انشاء الحساب



window.onload = function(){
  email.style.display='none';
  repassword.style.display= 'none';
  lab1.style.display='none';
  lab2.style.display='none';
  ve.style.display = "none";
  
}

function widthbocauto(){
  const asaa = document.getElementById('forget');
  if(asaa.innerText==='انشاء حسابك الآن' || asaa.innerText==='Create account'){
    boxx.style.transition='3s';
  wr.style.bottom='700px'
  lan.style.bottom='700px'
  boxx.style.height='650px';
  email.style.display='block';
  repassword.style.display= 'block';
  lab1.style.display='block';
  lab2.style.display='block';
  inboxx.style.display='block'
 inboxx1.style.display='block';
 btn.innerText="Creat Account";
 ve.style.display="block";
 h2.innerText="Create account";
  
 btn.onclick=function (param) {
   appenddatafortabel();
 }
 
  }else{
    
  }
  
}


function appenddatafortabel(param) {
  if (pass.value === text4.value && pass.value !=="" && text4.value!=="" && ve.value!=="") {
    ve.innerText = renumber();
    let cc = localStorage.setItem("Email",text3.value);
let xx = localStorage.setItem("Username",text1.value);
let nn = localStorage.setItem("password",pass.value);
let bb = localStorage.setItem("repassword",text4.value);

alert('Creat account successfully ')
window.open('./administration.html')

  } else {
    alert('Error password ')
  }

}




