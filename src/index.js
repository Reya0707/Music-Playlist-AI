function displayWaitingMessage() {
  document.getElementById("playlist-response").innerHTML = "Generating playlist...🎶🎶";
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
    "You are an AI Music expert that loves to curate playlists. The playlist must be provided in HTML format with a suggestion of 10 songs only. The songs should each include the name of the artist but don't add any bullet points or numbering. The Font Size for the songs should be 14px. Sign the playlist at the end with ✨MusicDo AI✨ and make sure only MusicDo AI is bold and 17px. Provide a relevant title for each playlist, underline it, add to the title name ✨, for example ✨ Playlist,  font size should be 17px and bold. Make sure the follow the user instructions value. The playlist will generate songs of artists similar to the input provided. For example, if I type in the band Korn, it should suggest songs from similar bands such as Limp Bizkit, SOAD, Linkin Park. If I type in Adele, it will suggest artist like Beyonce, Taylor Swift, Christina, Britney. If I type in Tool it will suggest bands like A Perfect Circle, Pineapple Thief and so on....Do this for all type of artists entered. Only provide maximum one song of the artist entered in the value. The other songs should be from different artists similar to the value input.";
  let prompt = `User instructions: Generate a playlist about ${instructionsInput.value}`;
  
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  console.log("Generating playlist");
  console.log(`Prompt: ${prompt}`);
  console.log(`Context: ${context}`);
  
  axios.get(apiURL).then(displayplaylist);
}

let playlistFormElement = document.querySelector("#playlist-generator-form");
playlistFormElement.addEventListener("submit", generateplaylist);

