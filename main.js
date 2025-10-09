let bak= document.getElementById("sec");
let box= document.getElementById("box");
let wr = document.getElementById("dark")

function gi(){
if (wr.innerText=="Dark mode") {
  bak.style.background="#123";
  bak.style.transition=".2s"
  box.style.border="2px solid rgba(28, 120, 59, 1)";
  wr.innerText="White Mode"
} else if(wr.innerText=="White Mode") {
  bak.style.background="url('e.jpeg')";
  bak.style.backgroundSize='cover';
  bak.style.transition=".2s";
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
    lan.innerText="English";
    btn.innerText="تسجيل الدخول";
    las.innerText="اسم المستخدم";
    lass.innerText="كلمة المرور";
    h2.innerText="تسجيل الدخول";
  document.getElementById('fo').innerHTML = 'هل نسيت كلمة المرور؟ <a id="repa" href="#">استرجاع كلمة المرور</a>';
  document.getElementById('do').innerHTML = 'هل لاتمتلك حساب لدينا ..؟<a id="forget" href="#"> انشاء حسابك الآن </a>';
    
      } else if(lan.innerText=="English"){
    lan.innerText="عربي";
    btn.innerText="Log in";
    las.innerText="Username";
    lass.innerText="Password";
    h2.innerText="Log in Form";
    document.getElementById('fo').innerHTML = 'Do not forget password <a id="repa" href="#"> : forget password now </a>';
 document.getElementById('do').innerHTML = 'Do not have account <a id="forget" href="#"> Create a account now !!! </a>';
    
  }
};