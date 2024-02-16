
const baseUrl = "http://onesdesign.local/wp-json/wp/v2/posts?_embed&per_page=50"; /* LOAD MORE THEN DEFAULT 10 POSTS */
const postsContainer = document.querySelector(".posts");
const loaderContainer = document.querySelector(".loader"); 

async function loadMore(){
    // TODO load more pages
}

async function getBlogPosts(){
    const response = await fetch(baseUrl);
    const posts = await response.json();

    loaderContainer.style.display = "none";

    posts.forEach(function(post){
        postsContainer.innerHTML += `
            <div class="blogPost">
                <div class="blogFeaturedImage">
                    <img class="blogImage" src="${post._embedded["wp:featuredmedia"]["0"].source_url}"/>
                </div>
                <div class="blogText">
                    <h2>${post.title.rendered}</h2>
                    ${post.excerpt.rendered}
                    <a class="button" href="blog_details.html?id=${post.id}">Read more</a> 
                </div>
            </div>`;
    })

    postsContainer.innerHTML += `<a class="button" onclick="loadMore()">VIEW MORE</a>`;
}

getBlogPosts(); 
