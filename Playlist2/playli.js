 const audio = document.getElementById("audio");
    const playPauseBtn = document.getElementById("playPauseBtn");
    const progress = document.getElementById("progress");
    const songInfo = document.getElementById("songInfo");
    const playlistEl = document.getElementById("playlist");
    const playlistTitle = document.getElementById("playlistTitle");
    const searchInput = document.getElementById("searchInput");

    let currentSongIndex = 0;
    let currentPlaylist = [];

  
    const playlists = {
      "Arijit Singh": [
        { title: "Tum Hi Ho", url: "songs/TumHiHo.mp3" },
        { title: "Channa Mereya", url: "songs/ChannaMereyaAe.mp3" },
        { title: "Aayat", url: "songs/Aayat.mp3" },
        { title: "Kesariya", url: "songs/Kesariya.mp3" },
        { title: "Humdard", url: "songs/Humdard.mp3" },
        { title: "Humnava", url: "songs/Humnava.mp3" },
        { title: "Muskurane", url: "songs/Muskurane.mp3" },
        { title: "Phir Bhi Tumko Chaahunga", url: "songs/PhirBhiTumkoChaahunga.mp3" },
        { title: "Soch Na Sake", url: "songs/SochNaSake.mp3" },
        { title: "Phir Le Aya Dil", url: "songs/PhirLeAyaDil.mp3" }
      ],
      "Diljit Dosanjh": [
        { title: "Do U Know", url: "songs/Punjabi/DoUKnow.mp3" },
        { title: "Chal Kudiye", url: "songs/Punjabi/ChalKudiyeJigra.mp3" },
        { title: "Dil Na Aya Hunda", url: "songs/Punjabi/DilNaAyaHunda.mp3" },
        { title: "Akhan Chasavan", url: "songs/Punjabi/AkhanChasavan.mp3" },
        { title: "Lagey Rabb Warga", url: "songs/Punjabi/LageyRabbWarga.mp3" },
        { title: "Teriyan Meriyan", url: "songs/Punjabi/TeriyanMeriyan.mp3" }
      ],
      "Sapna Choudhary": [
        { title: "Gajban", url: "songs/sapna/Gajban.m4a" },
        { title: "Lajwab", url: "songs/sapna/Lajwab.m4a" },
        { title: "Lage", url: "songs/sapna/Lage.m4a" },
        { title: "Ankhya ka Kajal", url: "songs/sapna/AnkhyaKaKajal.m4a" },
        { title: "Bandook Chalegi", url: "songs/sapna/BandookChalegi.mp3" },
        { title: "Mai Teri Nachai ", url: "songs/sapna/maiterinachai.mp3" },
        { title: "Matak Chalungi", url: "songs/sapna/MatakChalungi.m4a" },
        { title: "Laad Ladau", url: "songs/sapna/Laadladau.m4a" }
      ],

      "Sonu Nigam": [
        { title: "Janu Na Mai", url: "songs/sonu_nigam/JanuNaMai.m4a" },
        { title: "Abhi Mujh Mein Kahin", url: "songs/sonu_nigam/AbhiMujhMeinKahin.mp3" },
        { title: "Mujhe Raat Din", url: "songs/sonu_nigam/MujheRaatDin.mp3" },
        { title: "Pyar Kiya To Nibhana", url: "songs/sonu_nigam/PyarKiyaToNibhana.m4a" },
        { title: "Tera Mera Pyar", url: "songs/sonu_nigam/TeraMeraPyar.m4a" },
        { title: "Tu", url: "songs/sonu_nigam/Tu.m4a" },
        { title: "Tum Se", url: "songs/sonu_nigam/TumSe.m4a" }
      ],

      "KK": [
        { title: "Tu Hi Haquiqat", url: "songs/KK/HaHiHaquiqt.m4a" },
        { title: "Dil Ibadat", url: "songs/KK/DilIbadat.m4a" },
        { title: "Dilnashi", url: "songs/KK/Dilnashi.m4a" },
        { title: "Ha Tu Hai", url: "songs/KK/HaTuHai.m4a" },
        { title: "Tera Mera Rista Purana", url: "songs/KK/TeraMeraRishtaPurana.mp3" },
        { title: "To phir Ao", url: "songs/KK/TohPhirAao.mp3" },
        { title: "Zara Sa", url: "songs/KK/ZaraSa.m4a" },
        { title: "Beete Lamhe", url: "songs/KK/BeeteLamhe.m4a" },
        { title: "Aap Ki Kashis", url: "songs/KK/ApKiKashis.m4a" }
      ],

      "Jubin Nautiyal": [
        { title: "Narayan Mil Jayega", url: "songs/Jubin/NarayanMilJayega.m4a" },
        { title: "Ho Na Jaye Pyar", url: "songs/Jubin/HoNayePyar.m4a" },
        { title: "Humnava", url: "songs/Jubin/HumnavaMere.m4a" },
        { title: "Dil Galti Kar Baitha Hai", url: "songs/Jubin/DilGaltiKarBaitha.m4a" },
        { title: "Masoom Chehra", url: "songs/Jubin/BeTeraMasoomChehra.m4a" },
        { title: "Mai Jis Din Bhula Du", url: "songs/Jubin/MaiJisDinBhulaDu.m4a" },
        { title: "Lut Gaye", url: "songs/Jubin/LutGaye.m4a" },
        { title: "Tera Yu Muskuran", url: "songs/Jubin/TeraYuMuskurana.m4a" },
        { title: "Wafa Na Ras Aai", url: "songs/Jubin/WafaNaRasAayi.m4a" }
      ],

      "Pawan Singh": [
        { title: "Babuane", url: "songs/pawan/Babuane.m4a" },
        { title: "Padi jai", url: "songs/pawan/PadiJaai.m4a" },
        { title: "Chhalkat", url: "songs/pawan/Chhalkat.m4a" },
        { title: "Luta Ho", url: "songs/pawan/LutalHo.m4a" },
        { title: "Raja", url: "songs/pawan/Raja.m4a" },
        { title: "Rangbaaj", url: "songs/pawan/Rangbaj.m4a" },
        { title: "Raja Ji Ke", url: "songs/pawan/Rajajike.m4a" },
        { title: "Rumal Me", url: "songs/pawan/RumalMe.m4a" },
        { title: "Umar Lag Jaye", url: "songs/pawan/UmarlagJaye.m4a" },
        { title: "Dihe Na ", url: "songs/pawan/DiheNa.m4a" }
      ]
   
    };

    document.querySelectorAll("[data-singer]").forEach(img => {
      img.addEventListener("click", () => {
        const singer = img.dataset.singer;
        currentPlaylist = playlists[singer] || [];
        currentSongIndex = 0;
        renderPlaylist(singer, currentPlaylist);
      });
    });

  
    function renderPlaylist(title, list) {
      playlistEl.innerHTML = "";
      playlistTitle.textContent = title + " Playlist";
      list.forEach((song, idx) => {
        const li = document.createElement("li");
        li.textContent = song.title;
        li.onclick = () => {
          currentPlaylist = list;
          playSong(idx);
        };
        playlistEl.appendChild(li);
      });
    }

   
    function playSong(index) {
      if (!currentPlaylist.length) return;
      currentSongIndex = index;
      const song = currentPlaylist[index];
      audio.src = song.url;
      audio.play();
      playPauseBtn.classList.replace("fa-play", "fa-pause");
      songInfo.textContent = "Now Playing: " + song.title;
    }


    function togglePlay() {
      if (!audio.src) return;
      if (audio.paused) {
        audio.play();
        playPauseBtn.classList.replace("fa-play", "fa-pause");
      } else {
        audio.pause();
        playPauseBtn.classList.replace("fa-pause", "fa-play");
      }
    }

    
    function nextSong() {
      if (!currentPlaylist.length) return;
      currentSongIndex = (currentSongIndex + 1) % currentPlaylist.length;
      playSong(currentSongIndex);
    }

 
    function prevSong() {
      if (!currentPlaylist.length) return;
      currentSongIndex = (currentSongIndex - 1 + currentPlaylist.length) % currentPlaylist.length;
      playSong(currentSongIndex);
    }

   
    audio.addEventListener("timeupdate", () => {
      if (audio.duration) {
        progress.value = (audio.currentTime / audio.duration) * 100;
      }
    });


    progress.addEventListener("input", () => {
      audio.currentTime = (progress.value / 100) * audio.duration;
    });


    audio.addEventListener("ended", nextSong);

    
    searchInput.addEventListener("keyup", () => {
      const filter = searchInput.value.toLowerCase();
      if (!filter) {
        playlistEl.innerHTML = "";
        playlistTitle.textContent = "Search a song or select a singer";
        return;
      }

      
      const results = [];
      for (let singer in playlists) {
        playlists[singer].forEach(song => {
          if (
            song.title.toLowerCase().includes(filter) ||
            singer.toLowerCase().includes(filter)
          ) {
            results.push({ ...song, singer });
          }
        });
      }

      if (results.length > 0) {
        renderPlaylist("Search Results", results);
      } else {
        playlistEl.innerHTML = "<li>No match found</li>";
        playlistTitle.textContent = "Search Results";
      }
    });