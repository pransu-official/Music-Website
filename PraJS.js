const audio = document.getElementById("audio");
    const playPauseBtn = document.getElementById("masterplay");
    const progressBar = document.getElementById("progressBar");
    const songInfo = document.getElementById("currentSong");
    const songContainer = document.getElementById("songContainer");

    let currentSongIndex = 0;

    const songs = [
      
      { name: "Vibe", artist: "",  url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3", type: "bollywood" },
      { name: "Vibe", artist: "",  url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3", type: "bollywood" },
    
    ];

    // Render song cards
    songs.forEach((song, index) => {
      const card = document.createElement("div");
      card.className = `song-card ${song.type}`;
      card.innerHTML = `<img src="${song.image}" alt="${song.name}"><div class="song-details"><h3>${song.name}</h3><p>${song.artist}</p></div>`;
      card.addEventListener("click", () => {
        playSong(index);
      });
      songContainer.appendChild(card);
    });

    // Functions
    function playSong(index) {
      currentSongIndex = index;
      audio.src = songs[index].url;
      audio.play();
      songInfo.textContent = `Now Playing: ${songs[index].name} - ${songs[index].artist}`;
      playPauseBtn.classList.replace("fa-play", "fa-pause");
    }

    playPauseBtn.addEventListener("click", () => {
      if (audio.paused) {
        audio.play();
        playPauseBtn.classList.replace("fa-play", "fa-pause");
      } else {
        audio.pause();
        playPauseBtn.classList.replace("fa-pause", "fa-play");
      }
    });

    document.getElementById("next").addEventListener("click", () => {
      currentSongIndex = (currentSongIndex + 1) % songs.length;
      playSong(currentSongIndex);
    });

    document.getElementById("prev").addEventListener("click", () => {
      currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
      playSong(currentSongIndex);
    });

    // Update progress bar
    audio.addEventListener("timeupdate", () => {
      if (audio.duration) {
        progressBar.value = (audio.currentTime / audio.duration) * 100;
      }
    });

    // Seek
    progressBar.addEventListener("input", () => {
      audio.currentTime = (progressBar.value / 100) * audio.duration;
    });