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
    let html = '';

    data.forEach(song => {
      html += `
        <div class="song">
          <img src="${song.coverImage}" alt="${song.title} cover">
          <div>
            <h2>${song.title} - ${song.artist}</h2>
            <button class="download-button" onclick="downloadSong('${song.fileUrl}', '${song.title}.mp3')">Download</button>
          </div>
        </div>
      `;
    });

    musicList.innerHTML = html;
  })
  .catch(error => console.error('Error:', error));

