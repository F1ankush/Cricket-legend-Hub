document.getElementById("fan-form").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form submission to reload the page

  // Collect form data
  const name = document.getElementById("fan-name").value;
  const message = document.getElementById("fan-message").value;
  const profilePicInput = document.getElementById("profile-pic");

  // Create a new story card
  const storyCard = document.createElement("div");
  storyCard.classList.add("story-card");

  // Create the image element if a picture is uploaded
  const imgElement = document.createElement("img");
  if (profilePicInput.files.length > 0) {
      const reader = new FileReader();
      reader.onload = function(event) {
          imgElement.src = event.target.result;
          imgElement.alt = `${name}'s Profile Picture`;
      };
      reader.readAsDataURL(profilePicInput.files[0]);
  } else {
      imgElement.src = "default-avatar.png"; // Default avatar image if no picture is uploaded
      imgElement.alt = "Default Avatar";
  }
  imgElement.width = 60;
  imgElement.height = 60;
  imgElement.classList.add("profile-pic");

 r
  const contentDiv = document.createElement("div");
  contentDiv.classList.add("story-content");

  
  const nameElement = document.createElement("strong");
  nameElement.textContent = name;
  const messageElement = document.createElement("p");
  messageElement.textContent = message;


  const timestamp = document.createElement("div");
  timestamp.classList.add("timestamp");
  const date = new Date();
  timestamp.textContent = `Posted on ${date.toDateString()} at ${date.toLocaleTimeString()}`;


  contentDiv.appendChild(nameElement);
  contentDiv.appendChild(messageElement);
  contentDiv.appendChild(timestamp);
  storyCard.appendChild(imgElement);
  storyCard.appendChild(contentDiv);

  const storiesContainer = document.getElementById("fan-stories");
  storiesContainer.appendChild(storyCard);
  document.getElementById("no-stories").style.display = "none";

  document.getElementById("fan-form").reset();
});
