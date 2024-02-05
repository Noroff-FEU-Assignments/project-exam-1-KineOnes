const baseUrl = "http://onesdesign.local/wp-json/wp/v2/posts?_embed";
const postsContainer = document.querySelector(".posts");

async function getBlogPosts(url){
    const response = await fetch(url);
    const posts = await response.json();
    posts.forEach(function(post){
        postsContainer.innerHTML += `
            <div class="containerIndex">
            
                <div class="containerItem">
                    <img class="categoryImage" src="${post._embedded["wp:featuredmedia"]["0"].source_url}"/><h2>${post.title.rendered}</h2>
                </div>
            </div>`;
    })
}

getBlogPosts(baseUrl);