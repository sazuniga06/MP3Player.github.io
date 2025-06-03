const SongTitle = document.querySelector('.Player h1');
const SongArtist = document.querySelector('.Player p');
const SongCover = document.querySelector('.Player img');

const ProgressBar = document.getElementById('progress');
const Song = document.getElementById('Song');

const PrevButton = document.querySelector('.controls button.Previous');
const NextButton = document.querySelector('.controls button.Next');

const PlayIcon = document.getElementById("iconController");
const PlayButton = document.querySelector('.controls button.Play');

const Songs = [
    {
        title: "Avec toi, Je suis Moi (Latin Version)",
        artist: 'Code ZM',
        cover: 'Pics/Avec toi Je suis moi.png',
        src: "Songs/Avec toi, Je suis Moi v1.mp3"
    },
    {
        title: 'Avec toi, Je suis moi',
        artist: 'Code ZM',
        cover: 'Pics/Avec toi Je suis moi.png',
        src: "Songs/Avec toi, Je suis moi.mp3"
    },
    {
        title: 'Casualidad',
        artist: 'Code ZM',
        cover: 'Pics/Casualidad.png',
        src: 'Songs/Casualidad.mp3'
    },
    {
        title: 'Cuando el camino nos cruce de nuevo',
        artist: 'Code ZM',
        cover: 'Pics/Cuando el camino nos cruce de nuevo.png',
        src: 'Songs/Cuando El Camino Nos Cruce De Nuevo.mp3'
    },
    {
        title: 'La Fresa',
        artist: 'Code ZM',
        cover: 'Pics/La Fresa.PNG',
        src: 'Songs/La fresa.mp3'
    },
    {
        title: 'La Hacker',
        artist: 'Code ZM',
        cover: 'Pics/La Hacker.PNG',
        src: 'Songs/La Hacker.mp3'
    },
    {
        title: 'La veo sonreir',
        artist: 'Code ZM',
        cover: "Pics/La veo sonreir.png",
        src: 'Songs/La veo Sonreir.mp3'
    },
    {
        title: 'Nunca te lo dire',
        artist: 'Code ZM',
        cover: 'Pics/Nunca te lo dire.png',
        src: 'Songs/Nunca te lo dire.mp3'
    },
    {
        title: 'Te veo',
        artist: 'Code ZM',
        cover: 'Pics/Te veo.png',
        src: 'Songs/Te veo.mp3'
    },
    {
        title: 'Y tu que tienes que perder',
        artist: 'Code ZM',
        cover: 'Pics/Y tu que tienes que perder.png',
        src: 'Songs/Y tu que tienes que perder_.mp3'
    }
];

let currentSongIndex = 0;
let isPlaying = false;

function loadSong() {
    const current = Songs[currentSongIndex];
    SongTitle.textContent = current.title;
    SongArtist.textContent = current.artist;
    SongCover.src = current.cover;
    Song.src = current.src;
}

function playSong() {
    Song.play();
    isPlaying = true;
    PlayIcon.classList.remove("bi-play-circle-fill");
    PlayIcon.classList.add("bi-pause-circle-fill");
}

function pauseSong() {
    Song.pause();
    isPlaying = false;
    PlayIcon.classList.remove("bi-pause-circle-fill");
    PlayIcon.classList.add("bi-play-circle-fill");
}

function togglePlayPause() {
    if (isPlaying) {
        pauseSong();
    } else {
        playSong();
    }
}

function nextSong() {
    currentSongIndex = (currentSongIndex + 1) % Songs.length;
    loadSong();
    playSong();
}

function prevSong() {
    currentSongIndex = (currentSongIndex - 1 + Songs.length) % Songs.length;
    loadSong();
    playSong();
}

// Actualiza la barra de progreso mientras se reproduce la canción
function updateProgress() {
    const progressPercent = (Song.currentTime / Song.duration) * 100;
    ProgressBar.value = progressPercent || 0;
}

// Permite saltar en la canción al cambiar la barra
function setProgress() {
    const newTime = (ProgressBar.value / 100) * Song.duration;
    Song.currentTime = newTime;
}

PlayButton.addEventListener('click', togglePlayPause);
NextButton.addEventListener('click', nextSong);
PrevButton.addEventListener('click', prevSong);
Song.addEventListener('timeupdate', updateProgress);
ProgressBar.addEventListener('input', setProgress);

loadSong();
