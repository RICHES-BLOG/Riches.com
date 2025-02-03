fetch('music.json')
  .then(response => response.json())
  .then(data => {
    const musicList = document.getElementById('music-list');
    let html = '';

    data.forEach(song => {
      html += `
        <div>
          <h2>${song.title} - ${song.artist}</h2>
          <a href="${song.fileUrl}" download="${song.title}.mp3">Download</a>
        </div>
      `;
    });

    musicList.innerHTML = html;
  })
  .catch(error => console.error('Error:', error));

