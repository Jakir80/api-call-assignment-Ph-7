//fetch all data from api
// one time use async await for bonus mark
const loadFetch=async()=>{
  const res=await fetch("https://openapi.programming-hero.com/api/ai/tools")
  const data=await res.json();
  showData(data.data.tools.slice(0,6))
};
loadFetch();
const showData=allData=>{
  // console.log(allData)
    const cardContainer=document.getElementById('card-container'); 
    cardContainer.innerHTML='';
    allData.forEach(singleData => {
      const {image,features,name,published_in,id}=singleData;
      // console.log(singleData.id);
      // console.log(singleData)
      console.log(features)
      cardContainer.innerHTML+=`
      <div class="col">
      <div class="card h-100">
      <img src="${image}" class="card-img-top" alt="...">
      <div class="card-body">
      <h5 class="card-title">${"Features"}</h5>
   
      <ol>
      ${features ? features.map(feature =>`<li>${feature}</li>`) : "No Data Found"}
      </ol>
      </div>
      <div class="card-footer">
      <h3>${name?name:"No data found"}</h3>
      <div class="d-flex 
      justify-content-between align-items-center  justify-content-center" >
      <div class="d-flex text-center">
      <p><i class="fa-regular fa-calendar-days"></i> ${published_in?published_in:"No data found"}</p>
      </div>
      <i class="fas fa-arrow-right text-danger bg-danger bg-opacity-25 rounded-circle rounded circle p-3 rounded" onclick="fetchDetails('${id}') "data-bs-toggle="modal" data-bs-target="#detailsModal"></i>
      </div>       
      </div>
      </div> 
      </div>
      </div>
      
      </div> 
      `;
    }); 
    toggleSpinner(false);  
  };  
// modal js
const fetchDetails = (id) => { 
      const url =`https://openapi.programming-hero.com/api/ai/tool/${id}`
     fetch(url)
    .then(response => response.json())
    .then(data => showDetails(data.data))
}
const showDetails = (data) => {
    // console.log(data);
    const {image_link, input_output_examples,description,accuracy} = data;
    const modalBody = document.getElementById('modal-body');
    modalBody.innerHTML = `
    <div class="row">
        <div class="col col-md-6">
        <div class="col">
        <div class="card h-100 p-1 bg-warning-subtle">
        <h3>${description?description:"No data found"}</h3>
        <div class="d-flex gap-2">
        <div class="bg-light rounded circle p-1">
        <h5 class="text-success">${data.pricing?data.pricing[0].price:"No data found"}<br><span>${data.pricing?data.pricing[0].plan:""}</span></h5>
        </div>
        <div class="bg-light rounded circle p-1">
        <h5 class="text-danger-emphasis">${data.pricing?data.pricing[1].price:"no data found"}<br>${data.pricing?data.pricing[1].plan:""}</h5>
        </div>
        <div class="bg-light rounded circle p-1">
        <h5 class="text-danger" >${data.pricing?data.pricing[2].price:"no data found"}<br>${data.pricing?data.pricing[2].plan:""}</h5>       
        </div>      
     </div>      
<div class="d-flex gap-2 justify-content-between">
  <div>
    <h1>
    features
    </h1>
<ul>
    <li>${data.features["1"].feature_name?data.features["1"].feature_name:"no data found"}</li>
    <li>${data.features["2"].feature_name?data.features["2"].feature_name:"no data found"}</li>
    <li>${data.features["3"].feature_name?data.features["3"].feature_name:"no data found"}</li>
</ul>
</div>
<div>
    <h2>Intregation</h2>
     <ul>
     ${data.integrations ? data.integrations.map(items =>`<li>${items}</li>`) : "No Data Found"}
      </ul>
    </div>
      </div>
          <div class="card-body text-center">                 
          </div>
        </div>
      </div>
        </div>
        <div class="col h-100 col-md-6">
        <div class="col">
        <div class="card p-2">       
          <img src="${image_link[0]?image_link[0]:"no data found "}"  class="card-img-top"   alt="..."
          <button type="button" class="btn btn-primary position-relative p-3">
          <span class="position-absolute customize translate-middle badge right-100 rounded-pill bg-danger">
          ${accuracy.score!=null? `${Math.round(accuracy.score*100)} % Accuracy`
          :"no accuracy available"}
         </span>         
        </button>
         
          <div class="card-body text-center">
            <h5 class="card-title">${input_output_examples?input_output_examples[0].input:"no  data found"}</h5>
            <p class="card-text">${input_output_examples?input_output_examples[1].output:"no data found"}</p>
          </div>
        </div>
      </div>
        </div>
    </div>
    `;
};
const showAllDataTogether=()=>{
  const url=`https://openapi.programming-hero.com/api/ai/tools`
  fetch(url)
  .then(res=>res.json())
  .then(data=>showData(data.data.tools))
  // .then(data=>console.log(data.data.tools[11]))
  const seeAll=document.getElementById('see-All');
  seeAll.classList.add('d-none')
  toggleSpinner(true);
}
const toggleSpinner=isLoading=>{
  const loaderSection=document.getElementById('loader');
  if(isLoading){
      loaderSection.classList.remove('d-none')
  }
  else{
  loaderSection.classList.add('d-none');  
  }
};








