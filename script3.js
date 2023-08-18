const accessKey = "SwbmzH0MhNmGB3h6R-mWLJhn-86Tok1br0jxHSuN5n4";
const formEl = document.querySelector("form");
const inputEl = document.getElementById("search-input");
const searchResults = document.querySelector(".search-results");
const showMore = document.getElementById("show-more-button");
let inputdata = "";
let page = 1;

async function searchimages() {
  const inputdata = inputEl.value;
  const url =`https://api.unsplash.com/search/photos?page=${page}&query=${inputdata}&client_id=${accessKey}`;
  const response = await fetch(url);
  const data = await response.json();
  console.log(data.results)
  const results = data.results;
  if (page === 1) {
    searchResults.innerHTML ="";
  }
  results.map((result) => {
    const imagewrapper = document.createElement("div");
    imagewrapper.classList.add("search-result");

    const image = document.createElement("img");
    image.src = result.urls.small;
    image.alt = result.alt_description;
    const imagelink = document.createElement("a");
    imagelink.href = result.links.html;
    imagelink.target = "_blank";
    imagelink.textContent = result.alt_description;
    imagewrapper.appendChild(image)
    imagewrapper.appendChild(imagelink)
    searchResults.appendChild(imagewrapper)
  });
  page++;
  if(page>1){
    showMore.style.display="block"   
  }
}

formEl.addEventListener('submit',(event)=>{
    console.log("but clicked")
    event.preventDefault()
    page=1;
    searchimages()
})
showMore.addEventListener('click',()=>{
    
    searchimages()
})
