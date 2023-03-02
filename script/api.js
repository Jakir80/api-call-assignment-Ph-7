//fetch all data from api
const loadFetch=()=>{
    const url=`https://openapi.programming-hero.com/api/ai/tools`
    fetch(url)
    .then(res=>res.json())
    .then(data=>showData(data))
}
const showData=allData=>{
    // const {description,image,published_in,features,name,id}=alldata.data.tools;
// console.log(allData.data.tools)
const cardContainer=document.getElementById('card-container');

allData.data.tools.forEach(singleData => {
    console.log(singleData);
cardContainer.innerHTML+=`
<div class="col">
<div class="card h-100">
  <img src="${singleData.image}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${"Features"}</h5>
    <p class="card-text">
    <ol>
    <li>${singleData.features[0]}</li>
    <li>${singleData.features[1]}</li>
    <li>${singleData.features[2]}</li>
</ol></p>
  </div>
  <div class="card-footer">
   <h3>${singleData.name}</h3>
   <div class="d-flex  justify-content: center;
   align-items: center gap-2" >
   <i class="fas fa-star"></i>
   <p>${singleData.published_in}</p>
   </div> 
  </div>
</div>
</div>  

`;
});

}

loadFetch();
