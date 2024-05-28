const modifyForm = document.getElementById("modifyform");
      addForm = document.getElementById("addform");
      bookItems = document.getElementById("bookitems")
      readingBtn = document.getElementById("readingBtn");
      toReadBtn = document.getElementById("toReadBtn");
      finishedBtn = document.getElementById("finishedBtn");

/*Object for books */
function Book( title , author ,description, pages , status ) {
  this.title = title,
  this.author = author,
  this.description = description,
  this.pages = pages,
  this.status = status
}

/*Object default books for test */
const harryp = new Book("Harry Potter" , "J.K Rowling" , "Dans la chambre des Secrets vit un basilic, énorme serpent qui a le pouvoir de tuer ceux qui le regardent et de pétrifier ceux qui ne le voient pas directement" , 653, "To Read")
const tolkien = new Book("Le Seigneur des anneaux " , " J. R. R. Tolkien" , "renant place dans le monde fictionnel de la Terre du Milieu, il suit la quête du hobbit Frodon Sacquet," , 890, "To Read")

/*array of books */
let booksList = [harryp,tolkien]


const domBookList = () => {
  
/*Generate the books but in the html */

  const list = booksList.map((book)=>{

     for (const [key, val] in book){
        return`
       <div class="col-12 col-md- col-sm-12 bg-dark text-light rounded  px-4 py-3" >

       <div class="row d-flex justify-content-between ">

        <div class="col-8">
          <h2 class="text-decoration-underline text-capitalize">${book["title"]}</h2>
        </div>

        <div class="col-3">
          <p class="badge bg-warning">${book["status"]}</p>
        </div>

       </div>

       <p class="text-capitalize">${book["author"]}</p>
       <p>${book["description"]}</p>
       <div class="row d-flex justify-content-between">

       
         <div class="col-6">
           <p class="fw-bolder">${book["pages"]} pages</p>
         </div>

         <div class="col-6  d-flex justify-content-end gap-3">
         <button class="btn btn-outline-danger remove" data-id='${book["title"]}'> Delete</button>
         <button class="btn btn-outline-light modify" data-id='${book["title"]}' data-bs-toggle="modal" data-bs-target="#modifyModal"> Modify</button>
         </div>

       </div>
     </div>
     `
     };
   }).join('')
   bookItems.innerHTML = list

    readingBtn.addEventListener('click', ()=>{
    booksList.map((book) => book["status"] == "Reading")
    domBookList()
  })

  toReadBtn.addEventListener('click', ()=>{
    booksList.map((book) => book["status"] == "To Read")
    domBookList()
  })
  
  finishedBtn.addEventListener('click', ()=>{
    booksList.map((book) => book["status"] == "Finished")
    domBookList()
  })
   
/*Remove btn */
   var removeBtn = document.querySelectorAll(".remove");
   removeBtn.forEach((btn)=>{
    btn.addEventListener("click", (e)=>{
      booksList = booksList.filter((book) => book["title"] != e.currentTarget.dataset.id)
      console.log(booksList[0])
      domBookList()
     })
  })

/*modify btn */
  var modifyBtn = document.querySelectorAll(".modify");

  modifyBtn.forEach((btn) =>{
    btn.addEventListener("click",(e) =>{
      let modifyBook = booksList.filter((book) => e.currentTarget.dataset.id == book["title"]);
      modifyForm.setAttribute("data-id" , e.currentTarget.dataset.id )
      modifyForm.innerHTML = `
      <div class="modal-body" >
      <div class="mb-3">
      <label for="title" class="form-label">Book Title</label>
      <input type="text" name="title" value="${modifyBook[0]["title"]}" class="form-control" id="title" aria-describedby="titleBook">
    </div>

    <div class="mb-3">
      <label for="title" class="form-label">Author</label>
      <input type="text" name="author"  value="${modifyBook[0]["author"]}"  class="form-control" id="author" aria-describedby="authorName">
    </div>

    <div class="mb-3">
      <label for="title" class="form-label">description</label>
      <input type="text" name="description" value="${modifyBook[0]["description"]}"  class="form-control" id="description" aria-describedby="bookDescription">
    </div>


    <div class="mb-3">
      <label for="title" class="form-label">pages</label>
      <input type="text" name="pages" value="${modifyBook[0]["pages"]}"  class="form-control" id="pages" aria-describedby="pagesNumber">
    </div>

    <div class="mb-3">
      <label for="title" class="form-label">Status</label>
      <select name="status" id="selectStatus" >
        <option value="Reading">Reading</option>
        <option value="To Read">To Read</option>
        <option value="Finished">Finished</option>
      </select>
    </div>
      
             
      <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
          <button type="submit" class="btn btn-warning"  id="modify" data-bs-dismiss="modal">Modify</button>
      </div> `
    })
  })

  modifyForm.addEventListener("submit" ,(e)=>{
    e.preventDefault();

    let data = new FormData(modifyForm)
      datalist = [...data.entries()]
      bookTitle = datalist[0][1]
      bookAuthor = datalist[1][1]
      bookDesc = datalist[2][1]
      bookPages = datalist[3][1]
      bookStatus = datalist[4][1]
      
    for(const index in booksList){
      if (booksList[index]['title'] ==  e.currentTarget.dataset.id ){
        booksList[index]  = {
          title :bookTitle,
          author : bookAuthor,
          description : bookDesc, 
          pages : bookPages,
          status: bookStatus 
        }
        console.log(booksList[index] )
      }

    }

    domBookList()
    
  })

  

 }
 

window.addEventListener("DOMContentLoaded", ()=>{
/*Call the list */
domBookList()
addForm.addEventListener("submit", (e)=>{
  e.preventDefault()
  let data = new FormData(addForm)
     datalist = [...data.entries()]
     bookTitle = datalist[0][1]
     bookAuthor = datalist[1][1]
     bookDesc = datalist[2][1]
     bookPages = datalist[3][1]
     bookStatus = datalist[4][1]
     newBook = new Book(bookTitle,bookAuthor,bookDesc,bookPages,bookStatus)
     booksList.push(newBook)
     addForm.reset()
     domBookList()
    })

})
