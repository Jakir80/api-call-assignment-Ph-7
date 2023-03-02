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
    console.log(data);
    const {image_link, input_output_examples} = data;;
    const modalBody = document.getElementById('modal-body');
    modalBody.innerHTML = `
    <div class="row">
        <div class="col col-md-6">
        <div class="col">
        <div class="card h-100 p-2">
          <img src="${image_link[0]}" class="card-img-top" alt="...">
          <div class="card-body text-center">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          </div>
        </div>
      </div>
        </div>
        <div class="col col-md-6">
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
    `
};
loadFetch();




