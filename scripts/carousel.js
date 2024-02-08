let state = {
  posts: [],
  slideIndex: 1,
}

async function getLatestBlogPosts(numPosts){
  const response = await fetch("http://onesdesign.local/wp-json/wp/v2/posts?_embed&per_page=" + numPosts);
  const posts = await response.json();
  return posts
}

// Next/previous controls
function plusSlides(n) {
  showSlides(state.slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(state.slideIndex = n);
}

async function showSlides(n) {
  if (state.posts.length == 0) {
    state.posts = await getLatestBlogPosts(10)
  }

  const slideshowContainer = document.querySelector(".slideshowContainer");
  const dotsContainer = document.querySelector(".dotsContainer");

  slideshowContainer.innerHTML = ``;
  dotsContainer.innerHTML = ``;

  state.posts.forEach(function(post, i){
    slideshowContainer.innerHTML += `
      <div class="mySlides fade">
        <img class="blogImage" src="${post._embedded["wp:featuredmedia"]["0"].source_url}"/>
        <div class="text"><span>${post.title.rendered}</span></div>
      </div>`;
    
    dotsContainer.innerHTML += `<span class="dot" onclick="currentSlide(${i})"></span>`
  })

  slideshowContainer.innerHTML +=`
    <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
    <a class="next" onclick="plusSlides(1)">&#10095;</a>
  `;

  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    state.slideIndex = 1
  }
  if (n < 1) {
    state.slideIndex = slides.length
  }

  let i;
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[state.slideIndex-1].style.display = "block";
  dots[state.slideIndex-1].className += " active";
}

showSlides(state.slideIndex);