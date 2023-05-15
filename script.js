const firstNames = ["Emma", "Olivia", "Ava", "Isabella", "Sophia", "Mia", "Charlotte", "Amelia", "Harper", "Evelyn"];
const lastNames = ["Smith", "Johnson", "Williams", "Brown", "Jones", "Garcia", "Miller", "Davis", "Rodriguez", "Martinez"];
const cities = ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix", "Philadelphia", "San Antonio", "San Diego", "Dallas", "San Jose"];

function generateUser() {
    const firstName = firstNames[Math.floor(Math.random()*firstNames.length)];
    const lastName = lastNames[Math.floor(Math.random()*lastNames.length)];
    const age = Math.floor(Math.random() * 60) + 20;
    const email = `${firstName.toLowerCase()}.${lastName.toLowerCase()}@example.com`;
    const accountCreatedDate = new Date(Date.now() - Math.floor(Math.random() * 90 * 24 * 60 * 60 * 1000)).toISOString().slice(0,10);
    const city = cities[Math.floor(Math.random()*cities.length)];
    
    return `<div class="userCard">
      <p>Name: ${firstName} ${lastName}</p>
      <p>Age: ${age}</p>
      <p>Email: ${email}</p>
      <p>Account Created: ${accountCreatedDate}</p>
      <p>City: ${city}</p>
      <button onclick="this.parentNode.remove()">Delete</button>
    </div>`;
}

function addUser() {
  const container = document.getElementById('userContainer');
  if(container.children.length < 10) {
    container.innerHTML += generateUser();
  }
}

window.onload = function() {
  for(let i=0; i<10; i++) {
    addUser();
  }
};
