const musicPlayerContainer = document.getElementById('musicPlayerContainer');
    const MAX_TRACKS = 5;
    
    function generateMusicPlayer(musicFile) {
        // ... (Your existing code to create the music player)
        console.log("creating player", musicFile);
        const player = document.createElement('audio');
        player.src = URL.createObjectURL(musicFile);
        player.controls = true;
        return player;
    }

    function addFileInput(){
      const fileInput = document.createElement('input');
      fileInput.type = 'file';
      fileInput.accept = '.mp3';
      fileInput.addEventListener('change', (event) => {
        const musicPlayer = generateMusicPlayer(event.target.files[0]);
        musicPlayerContainer.appendChild(musicPlayer);
        fileInput.disabled = true;//disable after file loaded
        addFileInput();//add one more
      });
      musicPlayerContainer.appendChild(fileInput);
    }

    for(let i=0; i<MAX_TRACKS; i++){
      addFileInput();//add a new input file
    }
