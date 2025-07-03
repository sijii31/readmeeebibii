function showMore() {
  const msg = document.getElementById('extraMessage');
  msg.style.display = 'block';
}

// Floating heart animation
const heartsContainer = document.getElementById('heartsContainer');
const emojis = ["im sorry bibi🥺", "pls🥺", "sorrybibuuii", "iloveyousomuch", "💞", "❤️"];

function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('heart-float');
  heart.innerText = emojis[Math.floor(Math.random() * emojis.length)];

  // Random position
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = (Math.random() * 20 + 20) + "px";
  heart.style.animationDuration = (Math.random() * 3 + 4) + "s";

  heartsContainer.appendChild(heart);

  // Remove after animation
  setTimeout(() => {
    heart.remove();
  }, 7000);
}

// Generate lots of hearts repeatedly
setInterval(createHeart, 300);
