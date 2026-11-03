const $ = (id) => document.getElementById(id);
const modal = $('modal');
function openModal(title, text, icon='♡') {
  $('modalTitle').textContent = title;
  $('modalText').textContent = text;
  $('modalIcon').textContent = icon;
  modal.classList.add('open');
  modal.setAttribute('aria-hidden','false');
}
function closeModal() {
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden','true');
}
$('recipeBtn').addEventListener('click', () => openModal(
  'A carbonara appreciation note',
  'Some things do not need explaining. A warm bowl of carbonara is one of them. Creamy, comforting, and absolutely worthy of a little happy dance. This is your reminder to enjoy your favourite things.',
  '🍝'
));
$('closeModal').addEventListener('click', closeModal);
$('okayBtn').addEventListener('click', closeModal);
modal.addEventListener('click', e => { if(e.target === modal) closeModal(); });
document.addEventListener('keydown', e => { if(e.key === 'Escape') closeModal(); });

const moods = [
  ['☁','The Soft-Girl Carla','Gentle thoughts, lilac skies, and a playlist that sounds like a warm hug.'],
  ['🍝','The Carbonara Connoisseur','Currently accepting pasta, compliments, and absolutely no disturbances.'],
  ['✳','The Silly Goose','A little unpredictable. A lot iconic. No further explanation.'],
  ['🎬','The Family-Movie Enthusiast','Laughing at the funny bits, emotional at the family bits. A cinematic experience.'],
  ['💜','The Quiet Daydreamer','Just minding her business and making life look effortlessly lovely.']
];
$('moodBtn').addEventListener('click', () => {
  const mood = moods[Math.floor(Math.random()*moods.length)];
  $('moodIcon').textContent = mood[0];
  $('moodResult').textContent = mood[1];
  $('moodBtn').textContent = 'Again, again ↻';
  showToast(mood[2]);
});
$('surpriseBtn').addEventListener('click', () => {
  openModal('Surprise, Carla! ♡','If this website were a person, it would be bringing you carbonara and telling you that your weird little jokes are appreciated. Keep being wonderfully you.','💜');
});
const reminders = [
  'You are allowed to take up space, make mistakes, laugh loudly, and change your mind.',
  'Your little quirks are not things to hide. They are part of what makes you memorable.',
  'A slow day is still a day worth being kind to yourself in.',
  'You deserve the same patience and kindness you give to the people you love.',
  'Never underestimate the power of a good laugh and a really good bowl of pasta.'
];
let reminderIndex = 0;
$('noteBtn').addEventListener('click', () => {
  $('extraNote').textContent = reminders[reminderIndex % reminders.length];
  reminderIndex++;
});
function showToast(message) {
  const toast = $('toast');
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(window.toastTimer);
  window.toastTimer = setTimeout(() => toast.classList.remove('show'), 3300);
}
$('menuBtn').addEventListener('click', () => $('nav').classList.toggle('open'));
document.querySelectorAll('nav a').forEach(link => link.addEventListener('click', () => $('nav').classList.remove('open')));
