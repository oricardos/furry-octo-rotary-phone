export default function playlistsSpotify() {
    const playlists = document.querySelectorAll('.playlist');
    const sectionPlaylists = document.querySelector('.playlists');

    if (playlists.length > 4) {
        sectionPlaylists.style.overflowY = 'scroll';
        sectionPlaylists.style.height = '340px';
    }

}

