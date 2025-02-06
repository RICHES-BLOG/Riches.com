//correct using promises
        fetch("music.json")
            .then(response => response.json())
            .then(data => {
                console.log(data.grabberLinks); // Correctly accesses the data
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
  
  
  fetch('movies.json')
  .then(response => response.json())
  .then(data => {
    const movieList = document.getElementById('movie-list');
    let html = '';

    data.forEach(movie => {
      html += `
        <div class="movie">
          <img src="${movie.coverImage}" alt="${movie.title} cover">
          <div>
            <h2>${movie.title} (${movie.year})</h2>
            <p>Genre: ${movie.genre}</p>
            <button onclick="playMovie('${movie.videoUrl}')">Play</button>
          </div>
        </div>
      `;
    });

    movieList.innerHTML = html;
  })
  .catch(error => console.error('Error:', error));

function playMovie(url) {
  const video = document.createElement('video');
  video.src = url;
  video.controls = true;
  video.width = 640;
  video.height = 480;

  const modal = document.createElement('div');
  modal.style.position = 'fixed';
  modal.style.top = '50%';
  modal.style.left = '50%';
  modal.style.transform = 'translate(-50%, -50%)';
  modal.style.background = 'rgba(0, 0, 0, 0.5)';
  modal.style.padding = '20px';

  modal.appendChild(video);
  document.body.appendChild(modal);
}

  
  
  
  
  
  
  
  
  
