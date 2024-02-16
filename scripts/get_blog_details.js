const urlParams = new URLSearchParams(window.location.search);
const postId = urlParams.get('id');
const baseUrl = "http://onesdesign.local/wp-json/wp/v2/posts/" + postId;
const mainContainer = document.querySelector("main");

async function getBlogPost(url){
    const response = await fetch(url);
    const post = await response.json();
    return post
}

async function populateBlogPage(){
    const post = await getBlogPost(baseUrl);

    // Update title dynamically
    document.title = `My Blog | ${post.title.rendered}`;
    const isoDateString = post.date;
    const formattedDate = new Date(isoDateString).toLocaleDateString(); /* Removing the T13 from date displayed */ 

    mainContainer.innerHTML = `
    <div class="containerPost">
        <div class="postItem">
        <h1>${post.title.rendered}</h1></div>
        ${post.content.rendered}
        <div class="postDate">
        ${formattedDate}</div>
        <div class="modal">
            <span class="modal-close">&times;</span>
            <img class="modal-content" />
            <div class="modal-caption"></div> 
            
        </div class="buttonPostHome">
        <a href="index.html" class="button">HOME</a>
        </div>`;

    const modal = document.querySelector(".modal");
    const modalImage = document.querySelector(".modal-content");
    const modalCaptionText = document.querySelector(".modal-caption");
    const modalClose = document.querySelector(".modal-close");
    
    
    modalClose.onclick = function() {
        modal.style.display = "none";
    }

    modal.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
    
    const images = document.querySelectorAll('[class^="wp-image-"]');
    images.forEach(function(img){
        img.onclick = function(){
            modal.style.display = "block";
            modalImage.src = this.src;
            modalCaptionText.innerHTML = this.alt;
          }
    })
}

populateBlogPage();