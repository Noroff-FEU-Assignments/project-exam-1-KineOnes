
let state = {
    loadedPosts: 0,
}

const postsContainer = document.querySelector(".posts");
const loaderContainer = document.querySelector(".loader"); 
const viewMoreContainer = document.querySelector(".viewMoreButton")

async function getBlogPosts(offset){
    const url = "http://onesdesign.local/wp-json/wp/v2/posts?_embed&per_page=10&offset=" + offset;
    const response = await fetch(url);
    const posts = await response.json();
    return posts
}

async function loadPosts(){
    const posts = await getBlogPosts(state.loadedPosts);

    if (state.loadedPosts == 0) {
        loaderContainer.style.display = "none";
        viewMoreContainer.innerHTML = `<a class="button" onclick="loadPosts()">VIEW MORE</a>`;
    }

    state.loadedPosts += 10;

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
}

loadPosts(); 
