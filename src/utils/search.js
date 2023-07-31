// Get the search input element and the list of blog posts
const searchInput = document.querySelector('.search-bar input[type="text"]');
const blogList = document.querySelector('.grid');

// Function to handle the search
function handleSearch(event) {
    const searchTerm = event.target.value.toLowerCase();
    const posts = document.querySelectorAll('.grid li');

    posts.forEach((post) => {
        const title = post.querySelector('h2').textContent.toLowerCase();
        const author = post.querySelector('.text-gray-400').textContent.toLowerCase();

        // Show or hide the post based on the search term
        if (title.includes(searchTerm) || author.includes(searchTerm)) {
            post.style.display = 'block';
        } else {
            post.style.display = 'none';
        }
    });
}

// Attach the search event listener to the input field
searchInput.addEventListener('input', handleSearch);
