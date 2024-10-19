
document.querySelector('.cta-button').addEventListener('click', function(event) {
    event.preventDefault();  // Prevent the default action
    document.querySelector('#rooms').scrollIntoView({ behavior: 'smooth' });  // Scroll to rooms section smoothly
});


const rooms = document.querySelectorAll('#room');
const spookySound = [
    document.getElementById('audio1'),
    document.getElementById('audio2'),
    document.getElementById('audio3')
] // Example spooky sound URL

let currentlyPlaying = null;


function pauseAllAudios() {
    spookySound.forEach(audio => audio.pause());
  }
  rooms.forEach((room, index) => {
    room.addEventListener('click', () => {
      const currentAudio = spookySound[index];

      // If the clicked audio is playing, pause it
      if (currentAudio === currentlyPlaying && !currentAudio.paused) {
        currentAudio.pause();
        currentlyPlaying = null;
      } else {
        // Pause any other playing audio
        pauseAllAudios();
        // Play the clicked audio
        currentAudio.play();
        currentlyPlaying = currentAudio;
      }
    });
  });

