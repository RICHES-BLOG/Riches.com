function downloadSong(url, filename) {
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  a.click();
}

fetch('music.json')
  .then(response => response.json())
  .then(data => {
    const musicList = document.getElementById('music-list');
    musicList.innerHTML = ''; // Clear existing content

    data.forEach(song => {
      const songDiv = document.createElement('div');
      songDiv.className = 'song';
      
      const img = document.createElement('img');
      img.src = song.coverImage;
      img.alt = `${song.title} cover`;
      
      const infoDiv = document.createElement('div');
      
      const h2 = document.createElement('h2');
      h2.textContent = `${song.title} - ${song.artist}`;
      
      const button = document.createElement('button');
      button.className = 'download-button';
      button.textContent = 'Download';
      button.addEventListener('click', () => downloadSong(song.fileUrl, `${song.title}.mp3`));
      
      infoDiv.appendChild(h2);
      infoDiv.appendChild(button);
      
      songDiv.appendChild(img);
      songDiv.appendChild(infoDiv);
      
      musicList.appendChild(songDiv);
    });
  })
  .catch(error => console.error('Error:', error));
