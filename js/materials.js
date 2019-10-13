/*
<div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
*/
const bookContainerId = "book-container";

var loadBooks = function(){
    let bookContainer = document.getElementById(bookContainerId);
    for (i = 0; i < 20; i++){
        bookContainer.innerHTML += createBook("Card title"
        , "Some quick example text to build on the card title and make up the bulk of the card's content."
        , "Go somewhere"
        , "#"
        , ""
        , "book image");
    }
    
}

var createBook =  function(bookTitle, bookBrief, linkText, linkHref, imageSrc, imageAlt){
    return "<div class='card col-auto m-sm-1' style='width: 15rem;'>"
    + "<img src='"+ imageSrc +"' class='card-img-top' alt='"+ imageAlt +"'>"
    + "<div class='card-body'>"
    + "<h5 class='card-title'>" + bookTitle + "</h5>"
    + "<p class='card-text'>" + bookBrief +"</p>"
    + "<a href='" + linkHref + "' class='btn btn-primary'>" + linkText + "</a>"
    + "</div>"
    + "</div>";
}
loadBooks();