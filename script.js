// Show full message
function showFullMessage() {
  document.getElementById('mainContainer').style.display = 'none';
  document.getElementById('fullMessageContainer').style.display = 'block';
}

// Go back to main
function goBack() {
  document.getElementById('fullMessageContainer').style.display = 'none';
  document.getElementById('mainContainer').style.display = 'block';
}

// Floating heart animation
const heartsContainer = document.getElementById('heartsContainer');
const emojis = ["im sorry bibi🥺", "pls🥺", "sorrybibuuii", "iloveyousomuch", "💞", "❤️"];

function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('heart-float');
  heart.innerText = emojis[Math.floor(Math.random() * emojis.length)];
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = (Math.random() * 20 + 20) + "px";
  heart.style.animationDuration = (Math.random() * 3 + 4) + "s";
  heartsContainer.appendChild(heart);

  setTimeout(() => heart.remove(), 7000);
}

setInterval(createHeart, 300);
