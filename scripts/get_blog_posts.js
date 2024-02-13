const baseUrl = "http://onesdesign.local/wp-json/wp/v2/posts?_embed";
const postsContainer = document.querySelector(".posts");

async function getBlogPosts(url){
    const response = await fetch(url);
    const posts = await response.json();
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

getBlogPosts(baseUrl);
