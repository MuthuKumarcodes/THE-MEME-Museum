// Dynamically populate the meme gallery
const memeGallery = document.getElementById('memeGallery');

// Mock data for demonstration purposes
const memes = [
  { image: 'https://th.bing.com/th?id=OIP.B5IR-rI7waurYXK-FY1DBgHaNK&w=187&h=333&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2', caption: 'Funny meme 1' },
  { image: 'https://th.bing.com/th?id=OIP.mD3PDR9m6ldpgl0-8vZKmQHaFE&w=302&h=206&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2', caption: 'Hilarious meme 2' },
  { image: 'https://th.bing.com/th?id=OIP.etqVDt3gE4c3ke9Qm-P_LgHaI8&w=227&h=274&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2', caption: 'Laugh out loud meme 3' }
];

memes.forEach(meme => {
  const memeCard = document.createElement('div');
  memeCard.className = 'memeCard';

  const memeImage = document.createElement('img');
  memeImage.src = meme.image;
  memeImage.alt = meme.caption;
  memeCard.appendChild(memeImage);

  const memeCaption = document.createElement('p');
  memeCaption.textContent = meme.caption;
  memeCard.appendChild(memeCaption);

  memeGallery.appendChild(memeCard);
});

// Handle meme creation form submission
const memeForm = document.getElementById('memeForm');
memeForm.addEventListener('submit', e => {
  e.preventDefault();

  const memeImageInput = document.getElementById('memeImage');
  const memeCaptionInput = document.getElementById('memeCaption');

  // Create a new meme card and add it to the gallery
  const memeCard = document.createElement('div');
  memeCard.className = 'memeCard';

  const memeImage = document.createElement('img');
  memeImage.src = memeImageInput.value;
  memeImage.alt = memeCaptionInput.value;
  memeCard.appendChild(memeImage);

  const memeCaption = document.createElement('p');
  memeCaption.textContent = memeCaptionInput.value;
  memeCard.appendChild(memeCaption);

  memeGallery.appendChild(memeCard);

  // Clear the input fields
  memeImageInput.value = '';
  memeCaptionInput.value = '';
});
