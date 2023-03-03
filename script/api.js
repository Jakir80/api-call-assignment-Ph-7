//fetch all data from api
const loadFetch=()=>{
    const url=`https://openapi.programming-hero.com/api/ai/tools`
    fetch(url)
    .then(res=>res.json())
    .then(data=>showData(data))
}
const showData=allData=>{
    // const {description,image,published_in,features,name,id}=alldata.data.tools;
    const cardContainer=document.getElementById('card-container');
    // console.log(allData.data.id)
    
    allData.data.tools.forEach(singleData => {
    // console.log(singleData.id);
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
   <div class="d-flex 
 justify-content-between align-items-center  justify-content-center" >
  <div class="d-flex align-items-center ">
  <i class="fas fa-star"></i>
  <p>${singleData.published_in}</p>
  </div>
  <i class="fas fa-arrow-right bg-warning rounded circle p-3 rounded" onclick="fetchDetails('${singleData.id}') "data-bs-toggle="modal" data-bs-target="#detailsModal"></i>
   </div>       
   </div>
   </div> 
  </div>
</div>

</div> 
`;
});

};  

// modal js
const fetchDetails = (id) => { 
      const url =`https://openapi.programming-hero.com/api/ai/tool/${id}`
     fetch(url)
    .then(response => response.json())
    .then(data => showDetails(data.data))
    // console.log(url);
    
}
const showDetails = (data) => {
    console.log(data.integrations[0]);
    // for (feature_name in data.features){
    //   console.log(feature_name)
    // }
    const {image_link, input_output_examples,description} = data;
    const modalBody = document.getElementById('modal-body');
    modalBody.innerHTML = `
    <div class="row">
        <div class="col col-md-7">
        <div class="col">
        <div class="card h-100 p-2 bg-warning-subtle">
        <h1>${description}</h1>
        <div class="d-flex gap-1">
        <div class="bg-warning rounded circle p-2">
        <h5 class="text-success">${data.pricing[0].price}<br> <br><span>${data.pricing[0].plan}</span></h5>
        </div>
        <div class="bg-warning rounded circle p-1">
        <h5 class="text-danger-emphasis">${data.pricing[1].price} <br> <br>${data.pricing[1].plan}</h5>
        </div>
        <div class="bg-warning rounded circle p-1">
        <h5 class="text-danger" >${data.pricing[2].price}<br><br>${data.pricing[2].plan}</h5>       
        </div>      
     </div>      
<div class="d-flex gap-2 justify-content-between">
  <div>
    <h1>
    features
    </h1>
<ul>
    <li>${data.features["1"].feature_name}</li>
    <li>${data.features["2"].feature_name}</li>
    <li>${data.features["3"].feature_name}</li>
</ul>
</div>
<div>
    <h2>Intregation</h2>
    <ul>
        <li>${data.integrations[0]}</li>
        <li>${data.integrations[1]}</li>
        <li>${data.integrations[2]}</li>
      </ul>
    </div>
      </div>
          <div class="card-body text-center">
            <h5 class="card-title"></h5>            
          </div>
        </div>
      </div>
        </div>
        <div class="col col-md-5">
        <div class="col">
        <div class="card h-100 p-2">
          <img src="${image_link[0]}" class="card-img-top" alt="...">
          <div class="card-body text-center">
            <h5 class="card-title">${input_output_examples[0].input}</h5>
            <p class="card-text">${input_output_examples[1].output}</p>
          </div>
        </div>
      </div>
        </div>
    </div>
       `;
};
loadFetch();




