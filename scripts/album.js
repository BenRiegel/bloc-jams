var albumPicasso = {
     title: 'The Colors',
     artist: 'Pablo Picasso',
     label: 'Cubism',
     year: '1881',
     albumArtUrl: 'assets/images/album_covers/01.png',
     songs: [
         { title: 'Blue', duration: '4:26' },
         { title: 'Green', duration: '3:14' },
         { title: 'Red', duration: '5:01' },
         { title: 'Pink', duration: '3:21'},
         { title: 'Magenta', duration: '2:15'}
     ]
 };

 var albumMarconi = {
     title: 'The Telephone',
     artist: 'Guglielmo Marconi',
     label: 'EM',
     year: '1909',
     albumArtUrl: 'assets/images/album_covers/20.png',
     songs: [
         { title: 'Hello, Operator?', duration: '1:01' },
         { title: 'Ring, ring, ring', duration: '5:01' },
         { title: 'Fits in your pocket', duration: '3:21'},
         { title: 'Can you hear me now?', duration: '3:14' },
         { title: 'Wrong phone number', duration: '2:15'}
     ]
 };

 var albumToddler = {
   title: 'Terrible Twos',
   artist: 'Li\'l Toddler',
   label: 'Binky',
   year: '2017',
   albumArtUrl: 'assets/images/album_covers/14.png',
   songs: [
       { title: 'Don\'t want to nap!', duration: '3:17' },
       { title: 'No, no, no!', duration: '4:04' },
       { title: 'I want to do it by myself', duration: '2:58'},
       { title: 'Potty time', duration: '1:27' },
       { title: 'Where\'s binky?', duration: '3:46'}
   ]
 };


var createSongRow = function(songNumber, songName, songLength) {
     var template =
        '<tr class="album-view-song-item">'
      + '  <td class="song-item-number">' + songNumber + '</td>'
      + '  <td class="song-item-title">' + songName + '</td>'
      + '  <td class="song-item-duration">' + songLength + '</td>'
      + '</tr>'
      ;

     return template;
};

var setCurrentAlbum = function(album) {

     var albumTitle = document.getElementsByClassName('album-view-title')[0];
     var albumArtist = document.getElementsByClassName('album-view-artist')[0];
     var albumReleaseInfo = document.getElementsByClassName('album-view-release-info')[0];
     var albumImage = document.getElementsByClassName('album-cover-art')[0];
     var albumSongList = document.getElementsByClassName('album-view-song-list')[0];

     albumTitle.firstChild.nodeValue = album.title;
     albumArtist.firstChild.nodeValue = album.artist;
     albumReleaseInfo.firstChild.nodeValue = album.year + ' ' + album.label;
     albumImage.setAttribute('src', album.albumArtUrl);

     albumSongList.innerHTML = '';

     for (var i = 0; i < album.songs.length; i++) {
         albumSongList.innerHTML += createSongRow(i + 1, album.songs[i].title, album.songs[i].duration);
     }
 };

 window.onload = function() {
     setCurrentAlbum(albumPicasso);

      var counter = 0;
      var albumImage = document.getElementsByClassName('album-cover-art')[0];
      albumImage.addEventListener("click", function(){
        counter+=1;
        if (counter % 3 == 1){
          setCurrentAlbum(albumMarconi);
        } else if (counter % 3 == 2){
          setCurrentAlbum(albumToddler);
        } else {
          setCurrentAlbum(albumPicasso);
        }
      });
 };
