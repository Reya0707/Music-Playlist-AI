function displayWaitingMessage() {
  document.getElementById("playlist-response").innerHTML = "Generating playlist...";
}

function displayplaylist(response) {
  let playlistResponse = document.getElementById("playlist-response");
  playlistResponse.innerHTML = ""; 
  new Typewriter(playlistResponse, {
    strings: response.data.answer,
    autoStart: true,
    cursor: null,
    delay: 1,
    cursor: ""
  });
}


function generateplaylist(event) {
  event.preventDefault();
 displayWaitingMessage();
  let instructionsInput = document.querySelector("#user-instructions"); 
  let apiKey = "36c26f017e4ae34tb6a9679bb25odafe";
  let context =
    "You are an AI Music expert that loves to curate playlists. The playlist must be provided in HTML format with a suggestion of 10 songs. The songs should each include the name of the artist. Sign the playlist at the end with Reya AI and make sure only Reya AI is bold. Provide a title for each playlist and font size should be 15px and bold. Make sure the follow the user instructions.";
  let prompt = `User instructions: Generate a playlist about ${instructionsInput.value}`;
  
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  console.log("Generating playlist");
  console.log(`Prompt: ${prompt}`);
  console.log(`Context: ${context}`);
  
  axios.get(apiURL).then(displayplaylist);
}

let playlistFormElement = document.querySelector("#playlist-generator-form");
playlistFormElement.addEventListener("submit", generateplaylist);