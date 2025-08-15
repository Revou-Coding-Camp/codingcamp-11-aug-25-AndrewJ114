// Greeting on home page
window.onload = () => {
  const welcome = document.getElementById('welcome-message');
  if (welcome) {
    let name = prompt("Please enter your name:");
    welcome.textContent = `Hi ${name ? name : 'Guest'}, Welcome to my website!`;
  }
};

// Section switching
function showSection(id) {
  document.querySelectorAll('.section').forEach(sec => {
    sec.classList.remove('active');
  });
  document.getElementById(id).classList.add('active');
}

// Form submission & validation
const form = document.getElementById('messageForm');
if (form) {
  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
      alert('All fields are required!');
      return;
    }

    const display = `
      <h3>Form Submitted</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong> ${message}</p>
    `;
    document.getElementById('submittedData').innerHTML = display;
    form.reset();
  });
}
