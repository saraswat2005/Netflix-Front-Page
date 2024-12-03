a=document.querySelector("#ooo");
b=document.querySelector("body");
c=document.querySelector("#hh");
d=document.querySelector(".text1")
e=document.querySelector(".text2")
f=document.querySelector(".text3")
g=document.querySelector(".net1")
h=document.querySelector(".net2")
i=document.querySelector(".net3")

a.addEventListener("click",()=>{
 window.open('index2.html','_blanck');
})
const l={d:false,e:false,f:false};
g.onclick=()=>{
  if(l.d===false){
  l.d=true
  d.classList.add("cloud")

  
  
  }else if(l.d===true){
    d.classList.remove("cloud")
    l.d=false
   
    
  }

}
h.onclick=()=>{
  if(l.e===false){
    l.e=true
    e.classList.add("cloud")
  
    
    
    }else if(l.e===true){
      e.classList.remove("cloud")
      l.e=false
     
      
    }

}
i.onclick=()=>{
  if(l.f===false){
    l.f=true
    f.classList.add("cloud")
  
    
    
    }else if(l.f===true){
      f.classList.remove("cloud")
      l.f=false
     
      
    }

}

