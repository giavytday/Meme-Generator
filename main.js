const memeForm = document.getElementById('memeForm');
const memeContainer = document.getElementById('memeContainer');

memeForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const topText = document.getElementById('topText').value;
    const bottomText = document.getElementById('bottomText').value;
    const imageLink = document.getElementById('imageLink').value;

    if (!topText || !bottomText || !imageLink) {
        alert('Please fill in all fields.');
        return;
    }

    const meme = document.createElement('div');
    meme.classList.add('meme');

    const image = document.createElement('img');
    image.src = imageLink;

    const topTextDiv = document.createElement('div');
    topTextDiv.classList.add('topText');
    topTextDiv.textContent = topText;

    const bottomTextDiv = document.createElement('div');
    bottomTextDiv.classList.add('bottomText');
    bottomTextDiv.textContent = bottomText;

    const deleteButton = document.createElement('button');
    deleteButton.classList.add('delete-button');
    deleteButton.textContent = 'X';
    deleteButton.addEventListener('click', () => {
        memeContainer.removeChild(meme);
    });

    meme.appendChild(image);
    meme.appendChild(topTextDiv);
    meme.appendChild(bottomTextDiv);
    meme.appendChild(deleteButton);

    memeContainer.appendChild(meme);

    // Clear form fields
    document.getElementById('topText').value = '';
    document.getElementById('bottomText').value = '';
    document.getElementById('imageLink').value = '';
});