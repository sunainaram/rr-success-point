document.getElementById("year").textContent=new Date().getFullYear();

const RR_CONFIG = {
  whatsappNumber: "917037939060",
  // After you set up the free Google Apps Script backend, paste its Web App URL here.
  // Until then leave this blank. The website will still save locally + offer WhatsApp.
  adminWebAppUrl: ""
};

const menu=document.getElementById("menuToggle"),nav=document.getElementById("nav");
menu?.addEventListener("click",()=>nav.classList.toggle("open"));
document.querySelectorAll("#nav a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));

let currentApplication=null;
const form=document.getElementById("enrollForm"),success=document.getElementById("enrollSuccess");

form.addEventListener("submit",async e=>{
  e.preventDefault();
  const phone=document.getElementById("studentPhone").value.trim();
  if(!/^[0-9]{10}$/.test(phone)){alert("Please enter a valid 10-digit mobile number.");return;}

  currentApplication={
    id:"RRSP-"+new Date().getFullYear()+"-"+Math.floor(1000+Math.random()*9000),
    student:document.getElementById("studentName").value.trim(),
    parent:document.getElementById("parentName").value.trim(),
    phone, school:document.getElementById("schoolName").value.trim(),
    className:document.getElementById("className").value,
    subject:document.getElementById("subject").value,
    address:document.getElementById("address").value.trim(),
    savedAt:new Date().toLocaleString()
  };

  // Local backup
  const list=JSON.parse(localStorage.getItem("rrsp_enrollments")||"[]");
  list.push(currentApplication);
  localStorage.setItem("rrsp_enrollments",JSON.stringify(list));

  // Optional central admin database (Google Sheet via Apps Script)
  if(RR_CONFIG.adminWebAppUrl){
    try{
      await fetch(RR_CONFIG.adminWebAppUrl,{
        method:"POST",
        mode:"no-cors",
        headers:{"Content-Type":"text/plain;charset=utf-8"},
        body:JSON.stringify(currentApplication)
      });
    }catch(err){ console.log("Central admin save skipped:",err); }
  }

  const a=currentApplication;
  const msg=`*RR SUCCESS POINT — NEW ENROLLMENT*%0A%0AApplication ID: ${a.id}%0AStudent: ${a.student}%0AFather/Mother: ${a.parent}%0AMobile: ${a.phone}%0ASchool: ${a.school||"Not provided"}%0AClass: ${a.className}%0ASubject: ${a.subject}%0AAddress: ${a.address||"Not provided"}`;
  const waUrl="https://wa.me/"+RR_CONFIG.whatsappNumber+"?text="+encodeURIComponent(msg);

  applicationText.textContent="Application ID: "+a.id+" • Application saved. WhatsApp message is ready for RR Success Point.";
  success.hidden=false;
  form.querySelector(".form-grid").style.display="none";
  form.querySelector(".primary").style.display="none";
  success.scrollIntoView({behavior:"smooth",block:"center"});

  // Open WhatsApp in a new tab/window; the student remains on this website.
  setTimeout(()=>window.open(waUrl,"_blank"),250);
});

whatsappEnrollment.addEventListener("click",()=>{
  if(!currentApplication)return;
  const a=currentApplication;
  const msg=`*RR SUCCESS POINT — ONLINE ENROLLMENT*%0A%0AApplication ID: ${a.id}%0AStudent Name: ${a.student}%0AFather/Mother Name: ${a.parent}%0AMobile: ${a.phone}%0ASchool: ${a.school||"Not provided"}%0AClass: ${a.className}%0ASubject: ${a.subject}%0AAddress: ${a.address||"Not provided"}%0A%0APlease confirm my enrollment.`;
  window.open("https://wa.me/"+RR_CONFIG.whatsappNumber+"?text="+msg,"_blank");
});

newEnrollment.addEventListener("click",()=>{
  form.reset();currentApplication=null;success.hidden=true;
  form.querySelector(".form-grid").style.display="grid";
  form.querySelector(".primary").style.display="inline-block";
  document.getElementById("studentName").focus();
});
