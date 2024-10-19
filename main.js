
document.querySelector('.cta-button').addEventListener('click', function(event) {
    event.preventDefault();  // Prevent the default action
    document.querySelector('#rooms').scrollIntoView({ behavior: 'smooth' });  // Scroll to rooms section smoothly
});


const rooms = document.querySelectorAll()


const spookySound1 =new Audio('something-haunted-passing-by-190277.mp3');
// const spookySound2 =new Audio('something-haunted-passing-by-190277.mp3');
// const spookySound3 =new Audio('something-haunted-passing-by-190277.mp3'); // Example spooky sound URL

function playaudio(){
  spookySound1.play();
}

rooms.forEach(room => {
  room.addEventListener('click',playaudio);

});


// function pauseAllAudios() {
//     spookySound.forEach(audio => audio.pause());
//   }
//   rooms.forEach((room, index) => {
//     room.addEventListener('click', () => {
//       const currentAudio = spookySound[index];

//       // If the clicked audio is playing, pause it
//       if (currentAudio === currentlyPlaying && !currentAudio.paused) {
//         currentAudio.pause();
//         currentlyPlaying = null;
//       } else {
//         // Pause any other playing audio
//         pauseAllAudios();
//         // Play the clicked audio
//         currentAudio.play();
//         currentlyPlaying = currentAudio;
//       }
//     });
//   });

