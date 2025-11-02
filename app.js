function renderHomepage() {
    const postListContainer = document.getElementById('post-list-container');
    if (!postListContainer) return;
    
    postListContainer.innerHTML = '';
    
    allPosts.forEach(post => {
        const postCard = `
            <article class="post-card">
                <h2>${post.title}</h2>
                <p class="post-date">${post.date}</p>
                <p class="post-summary">${post.summary}</p>
                <a href="post.html?id=${post.id}" class="read-more">Read More</a>
            </article>
        `;
        postListContainer.innerHTML += postCard;
    });
}

renderHomepage();
