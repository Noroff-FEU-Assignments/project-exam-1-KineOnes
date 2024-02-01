const baseUrl = "http://onesdesign.local/wp-json/wp/v2/posts";
const postsContainer = document.querySelector(".posts");

async function getBlogPosts(url){
    const response = await fetch(url);
    const posts = await response.json();
    posts.forEach(function(post){
        postsContainer.innerHTML += `
            <div class="blogPost"><h2>${post.title.rendered}</h2>
            ${post.excerpt.rendered}
            </div>`;
    })
    
}

getBlogPosts(baseUrl);
