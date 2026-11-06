let isFollowing = false;

function followUser() {
    let count = document.getElementById('follower-count');
    if (!isFollowing) {
        count.innerText = parseInt(count.innerText) + 1;
        isFollowing = true;
        event.target.innerText = "Unfollow";
    } else {
        count.innerText = parseInt(count.innerText) - 1;
        isFollowing = false;
        event.target.innerText = "Follow";
    }
}

function createPost() {
    let text = document.getElementById('post-text').value;
    if (text.trim() === "") return;

    let container = document.getElementById('posts-container');
    
    let postDiv = document.createElement('div');
    postDiv.className = 'post';
    postDiv.innerHTML = `
        <p>${text}</p>
        <button onclick="likePost(this)">❤️ Like (<span class="like-count">0</span>)</button>
    `;

    container.prepend(postDiv);
    document.getElementById('post-text').value = "";
}

function likePost(btn) {
    let span = btn.querySelector('.like-count');
    span.innerText = parseInt(span.innerText) + 1;
}