// subtle scroll reveal
const cards=document.querySelectorAll('.card');
const io=new IntersectionObserver(e=>{
  e.forEach(i=>{
    if(i.isIntersecting){
      i.target.style.opacity=1;
      i.target.style.transform='none';
    }
  })
},{threshold:.2});
cards.forEach(c=>{
  c.style.opacity=0;
  c.style.transform='translateY(30px)';
  io.observe(c);
});
