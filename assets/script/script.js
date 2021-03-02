var url ="https://raw.githubusercontent.com/nasr188/ZanoliFormaggi.io/master/assets/script/data.json";
    fetch(url)
  .then(response=>{
      return response.json()
  }).then(result=>{ 
      let info = result.data;
      let parent = document.querySelector(".content_wraper");
      console.log(parent)
  
      let output="";
console.log(info);
info.forEach(data => {

     let recette= `
     <div class="content_item">
     <h1>${data.titolo}</h1>
     <img src="${data.avatar}" alt="">
     <button>leggi di più</button>
     <div id="oltre">
     <ul>
         <li>${data.ingredienti[1]}</li>
     </ul>
     
 </div>
 </div>`
    
    output+= recette

});
parent.innerHTML = output
    
  }).catch(err => console.error(err));







  
