const baseUrl = "http://onesdesign.local/wp-json/wp/v2/posts?_embed";
const postsContainer = document.querySelector(".posts");

async function getBlogPosts(url){
    const response = await fetch(url);
    const posts = await response.json();
    posts.forEach(function(post){
        postsContainer.innerHTML += `
            <div class="mySlides fade">
                <div class="numbertext">1 / 3</div>
                <img class="blogImage" src="${post._embedded["wp:featuredmedia"]["0"].source_url}"/>
                    
                    </div>
                </div>
            </div>`;
    })         
}

getBlogPosts(baseUrl);