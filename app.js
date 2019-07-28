// NAVBAR
function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}


document.addEventListener('DOMContentLoaded', function() {
  openNav();
  init();
});

// MUSIC
function init() {
  var audio, playlist;
  
  playlist = [
      {
          name: 'Ngày Hạ',
          url: 'songs/NgayHa-DiLixKBee.mp3',
          note: 'Cho những tháng năm thương nhớ người...'
      },
      {
        name: 'Phiêu Bồng',
        url: 'songs/Tofu-PhieuBongftVovanduc.mp3',
        note: 'Cho những tháng năm thương nhớ người...'
    },
    {
        name: 'Bảy Bước Tới Mùa Hè',
        url: 'songs/BayBuocToiMuaHe-DaoLiuLoo.mp3',
        note: 'Cho những tháng năm thương nhớ người...'
    },  
    {
        name: 'Hạ Chờ',
        url: 'songs/HaCho.mp3',
        note: 'Cho những tháng năm thương nhớ người...'
    },  
    // {
    //     name: 'Lạc Nhau Có Phải Muôn Đời',
    //     url: 'songs/LacNhauCoPhaiMuonDoi-TrietPham.mp3',
    //     note: 'Cho những tháng năm thương nhớ người...'
    // },  
  ];


  var options = {
    strings: ["neighbor", "family", "team", "community"],
    stringsElement: null,
    // typing speed
    typeSpeed: 70,
    // time before typing starts
    startDelay: 700,
    // backspacing speed
    backSpeed: 70,
    // time before backspacing
    backDelay: 700,
    // loop
    loop: true,
    // false = infinite
    loopCount: Infinity,
    // show cursor
    showCursor: false,
    // character for cursor
    cursorChar: "|",
    // attribute to type (null == text)
    attr: null,
    // either html or text
    contentType: 'html'
  }
  

  var typed = new Typed(".type", options);

  
  
  audio = new Audio();
  var newSong = getRandomSong();

  audio.src = newSong.url;

  // document.getElementById('title').innerHTML = `<i class="fas fa-headphones-alt"></i>${newSong.name}`;
  // document.getElementById('note').innerHTML = newSong.note;
  audio.play();
  
  function getRandomNumber() {
      return Math.floor(Math.random() * playlist.length);
  }

  function getRandomSong() {
      var randNumber = getRandomNumber();
      return playlist[randNumber];
  }

  function switchTrack() {
      var randNumber = getRandomNumber();        
      var curSong = audio.src;

      var newSong = playlist[randNumber];

      if (newSong.url === curSong) {
          randNumber++;
          if (randNumber >= playlist.length) {
              newSong = playlist[0];
          } else {
              newSong = playlist[randNumber];
          }
      }


      audio.src = newSong.url;
      // document.getElementById('title').innerHTML = `<i class="fas fa-headphones-alt" id="music"></i>${newSong.name}`;
      // document.getElementById('note').innerHTML = newSong.note;
      audio.play();

  }   
  
  audio.addEventListener('ended', function() {
      switchTrack();
  });

  // document.getElementById('title').addEventListener("click", function() {
  //     switchTrack();
  // });


  // SHAKE
  var shakeEvent = new Shake({ threshold: 10 });
  
  function shake() {
      shakeEvent.start();
      window.addEventListener('shake', function() {
          switchTrack();
      }, false);
  }
  shake();
}


