let pages = document.querySelectorAll(".page");
let current = 0;

document.body.addEventListener("click", e => {
  if (e.target.tagName === "A") return;

  pages[current].classList.remove("active");

  current++;

  if (current >= pages.length) {
    current = pages.length - 1;
  }

  pages[current].classList.add("active");
});

// Snow
for(let i=0;i<80;i++){
  let s=document.createElement("div");
  s.style.position="fixed";
  s.style.width="4px";
  s.style.height="4px";
  s.style.background="white";
  s.style.borderRadius="50%";
  s.style.left=Math.random()*100+"vw";
  s.style.top="-10px";
  s.style.opacity=Math.random();
  s.style.animation=`fall ${5+Math.random()*10}s linear infinite`;
  s.style.animationDelay=`${Math.random()*5}s`;
  document.body.appendChild(s);
}

// Petals
for(let i=0;i<30;i++){
  let p=document.createElement("div");
  p.innerHTML="🌹";
  p.style.position="fixed";
  p.style.left=Math.random()*100+"vw";
  p.style.top="-20px";
  p.style.animation=`fall ${8+Math.random()*10}s linear infinite`;
  p.style.animationDelay=`${Math.random()*5}s`;
  document.body.appendChild(p);
}

let style=document.createElement("style");
style.innerHTML=`
@keyframes fall{
0%{
transform:translateY(-50px);
}
100%{
transform:translateY(110vh);
}
}
`;
document.head.appendChild(style);
