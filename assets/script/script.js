var url ="https://raw.githubusercontent.com/nasr188/nasr188.github.io/master/links/corsi/corsi.json";
    fetch(url)
  .then(response=>{
      return response.json()
  }).then(result=>{ 
      let info = result.data;
      let parent = document.querySelector(".content_wraper");
  
      let output="";
console.log(info);
datt.forEach(data => {

     let recette= `
     <div class="content_item">
     <h1></h1>
     <img src="${data.avatar}" alt="">
     <button>leggi di più</button>
     <div class="oltre">
     <ul>
         <li></li>
     </ul>
     <div>
         <h1>passi per preparare </h1>
         <ol>
             <li></li>
         </ol>
     </div>
 </div>
 </div>`
    
    output+= recette

});
parent.innerHTML = output
    
  });
