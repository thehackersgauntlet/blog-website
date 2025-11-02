function renderHomepage() {
    const postListContainer = document.getElementById('post-list-container');
    postListContainer.innerHTML = '';
    
    allPosts.forEach(post => {
        const postCard = `
            <article class="post-card">
                <h2>${post.title}</h2>
                <p class="post-date">${post.date}</p>
                <p class="post-summary">${post.summary}</p>
            </article>
        `;
    });
}
