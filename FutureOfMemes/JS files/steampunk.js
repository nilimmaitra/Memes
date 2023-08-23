const jokeText = document.getElementById('joke-text');
const lmaoButton = document.getElementById('lmao-button');

function fetchJoke() {
    jokeText.textContent = 'Loading jokes...';
    lmaoButton.disabled = true;

    // Replace with the actual Joke API URL
    const jokeApiUrl = 'YOUR_JOKE_API_URL_HERE';

    fetch(jokeApiUrl)
        .then(response => response.json())
        .then(data => {
            const joke = data.joke;
            jokeText.textContent = joke;
            lmaoButton.disabled = false;
        })
        .catch(error => {
            jokeText.textContent = 'Failed to fetch joke.';
            lmaoButton.disabled = false;
        });
}

lmaoButton.addEventListener('click', fetchJoke);

// Fetch a joke when the page loads
fetchJoke();
