var title = document.getElementById("title");
var imgurl = document.getElementById("imgurl");
var description = document.getElementById("description");
var updatebtn = document.getElementById("updatebtn");
var addbtn = document.getElementById("addbtn");
var updatedIndex = null;
var myArticles = [];
if (localStorage.getItem("allArticles")) {
  myArticles = JSON.parse(localStorage.getItem("allArticles"));
  displayArticles();
}
function addArticle() {
  var article = {
    articleTitle: title.value,
    image: imgurl.value,
    articleDescription: description.value,
  };
  myArticles.push(article);
  localStorage.setItem("allArticles", JSON.stringify(myArticles));
  console.log(myArticles);
  displayArticles();
  clearForm();
}
function deleteArticle(index) {
  console.log(index);
  myArticles.splice(index, 1);
  localStorage.setItem("allArticles", JSON.stringify(myArticles));
  displayArticles();
}

function displayArticles() {
  var box = "";
  for (var i = 0; i < myArticles.length; i++) {
    box += `
         <div class="col-md-4 ">
        <div  class="p-3 shadow rounded-3">
         <img src="${myArticles[i].image}" alt="article image" class="w-100"/>
                <h3>${myArticles[i].articleTitle}</h3>
                <p>${myArticles[i].articleDescription}</p>
                <button class="btn btn-danger" onclick="deleteArticle(${i})">Delete</button>
                <button class="btn btn-success" onclick="UpdateArticle(${i})">Update</button>
                </div>
            </div>
            
        `;
  }
  document.getElementById("item").innerHTML = box;
}
function search(term) {
  console.log(term);
  var searchResult = "";
  for (var i = 0; i < myArticles.length; i++) {
    if (myArticles[i].articleTitle.toLowerCase().includes(term.toLowerCase())) {
      searchResult += `
        <div class="col-md-4 ">
       <div  class="p-3 shadow rounded-3">
        <img src="${myArticles[i].image}" alt="article image" class="w-100" />
               <h3>${myArticles[i].articleTitle}</h3>
               <p>${myArticles[i].articleDescription}</p>
               <button class="btn btn-danger" onclick="deleteArticle(${i})">Delete</button>
               <button class="btn btn-success" onclick='UpdateArticle(${i})'>Update</button>
               </div>
           </div>
           
       `;
    }
    document.getElementById("item").innerHTML = searchResult;
  }
}

function UpdateArticle(index) {
  updatedIndex = index;
  console.log(index);
  updatebtn.classList.replace("d-none", "d-block");
  addbtn.classList.replace("d-block", "d-none");
  title.value = myArticles[index].articleTitle;
  imgurl.value = myArticles[index].image;
  description.value = myArticles[index].articleDescription;
}
function saveUpdates() {
  myArticles[updatedIndex].articleTitle = title.value;
  myArticles[updatedIndex].image = imgurl.value;
  myArticles[updatedIndex].articleDescription = description.value;

  localStorage.setItem("allArticles", JSON.stringify(myArticles));
  displayArticles();
  clearForm();

  addbtn.classList.replace("d-none", "d-block");
  updatebtn.classList.replace("d-block", "d-none");
}

function clearForm() {
  title.value = "";
  imgurl.value = "";
  description.value = "";
}

