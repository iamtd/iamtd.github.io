// NAVBAR
function openNav() {
  document.getElementById("myNav").style.width = "100%";
  document.getElementById('text').style.display = 'none';
  document.getElementById('copyright').innerHTML = '<a href="https://www.facebook.com/dinhtu.dt">iamtd, 2019</a>';
}

function closeNav() {
    // document.querySelector('.settings-icons').style.opacity = '0';
    document.getElementById("myNav").style.width = "0%";
    document.getElementById('text').style.display = 'block';
    document.getElementById('copyright').innerHTML = '';   
}




// MUSIC
function init() {
  var audio, playlist;
  
  playlist = [
    {
      name: 'When the love falls',
      url: 'music/WhenTheLoveFalls-Yiruma.mp3',
      artist: 'Yiruma',
      bg: 'images/tinhtrecon.jpg',
      note: 'Cho những tháng năm thương nhớ người...'
    },
    {
        name: 'Snow Flower',
        url: 'music/SnowFlower-KimYoon.mp3',
        artist: 'Kim Yoon',
        bg: 'images/emhonnhien.jpg',
        note: 'Cho những tháng năm thương nhớ người...'
    },
    {
        name: 'Love',
        url: 'music/Love-WangWei.mp3',
        artist: 'Wang Wei',
        bg: 'images/binhyenlaxanh.jpg',
        note: 'Cho những tháng năm thương nhớ người...'
    },
    {
        name: 'Remember',
        url: 'music/Remember-KimYoon.mp3',
        artist: 'Kim Yoon',
        bg: 'images/cunvaem.jpg',
        note: 'Cho những tháng năm thương nhớ người...'
    },
    {
        name: 'Bài hát viết cho em',
        url: 'music/BaiHatVietChoEm-PhamHoaiNam.mp3',
        artist: 'Kim Yoon',
        bg: 'images/hua.jpg',
        note: 'Cho những tháng năm thương nhớ người...'
    },
    {
        name: 'Chỉ còn những mùa nhớ',
        url: 'music/ChiConNhungMuaNho-BaoTram.mp3',
        artist: 'Kim Yoon',
        bg: 'images/lavang.jpg',
        note: 'Cho những tháng năm thương nhớ người...'
    },
    {
        name: 'Chuyện của ta',
        url: 'music/ChuyenCuaTa-GleeGiaThieu.mp3',
        artist: 'Kim Yoon',
        bg: 'images/4.jpg',
        note: 'Cho những tháng năm thương nhớ người...'
    },
    {
        name: 'Còn tuổi nào cho em',
        url: 'music/ConTuoiNaoChoEm-MiuLe.mp3',
        artist: 'Kim Yoon',
        bg: 'images/cunvaem.jpg',
        note: 'Cho những tháng năm thương nhớ người...'
    },
    {
        name: 'Đánh rơi bên hồ',
        url: 'music/DanhRoiBenHo-ThuyChi.mp3',
        artist: 'Kim Yoon',
        bg: 'images/2.jpg',
        note: 'Cho những tháng năm thương nhớ người...'
    },
    {
        name: 'Nhớ mang em về',
        url: 'music/NhoMangEmVe-Hy.mp3',
        artist: 'Kim Yoon',
        bg: 'images/cunvaem.jpg',
        note: 'Cho những tháng năm thương nhớ người...'
    },
    {
        name: 'Sài gòn vẫn thế',
        url: 'music/SaiGonVanThe-PhamHoaiNam.mp3',
        artist: 'Kim Yoon',
        bg: 'images/gocsachnangvang.jpg',
        note: 'Cho những tháng năm thương nhớ người...'
    },
    {
        name: 'Dream Catcher',
        url: 'music/DreamCatcher-XiaoPing.mp3',
        artist: 'Kim Yoon',
        bg: 'images/5.jpg',
        note: 'Cho những tháng năm thương nhớ người...'
    },
    {
        name: 'Em vẫn như ngày xưa',
        url: 'music/EmVanNhuNgayXua-ThaiTrinh.mp3',
        artist: 'Kim Yoon',
        bg: 'images/xam.jpg',
        note: 'Cho những tháng năm thương nhớ người...'
    },
    {
        name: 'Giấc mơ nhẹ nhàng',
        url: 'music/GiacMoNheNhang-ThuyChiFtMinhVuong.mp3',
        artist: 'Kim Yoon',
        bg: 'images/cunvaem.jpg',
        note: 'Cho những tháng năm thương nhớ người...'
    },
    {
        name: 'Dona, Dona',
        url: 'music/JoanBaez-DonnaDonna.mp3',
        artist: 'Kim Yoon',
        bg: 'images/ngungoan.jpg',
        note: 'Cho những tháng năm thương nhớ người...'
    },
    {
        name: 'Lớn rồi còn khóc nhè',
        url: 'music/LonRoiConKhocNhe-TrucNhan.mp3',
        artist: 'Kim Yoon',
        bg: 'images/cunvaem.jpg',
        note: 'Cho những tháng năm thương nhớ người...'
    },
    {
        name: 'Mong manh tình về',
        url: 'music/MongManhTinhVe-ThuyChi.mp3',
        artist: 'Kim Yoon',
        bg: 'images/cunvaem.jpg',
        note: 'Cho những tháng năm thương nhớ người...'
    },
    {
        name: 'Morning Please Don\'t Come',
        url: 'music/MorningPleaseDontCome-WangWei.mp3',
        artist: 'Kim Yoon',
        bg: 'images/1.jpg',
        note: 'Cho những tháng năm thương nhớ người...'
    },
    {
        name: 'Remember',
        url: 'music/Remember-KimYoon.mp3',
        artist: 'Kim Yoon',
        bg: 'images/cunvaem.jpg',
        note: 'Cho những tháng năm thương nhớ người...'
    },
    {
        name: 'Mùa hoa bỏ lại',
        url: 'music/MuaHoaBoLai-PhamHoaiNam.mp3',
        artist: 'Kim Yoon',
        bg: 'images/4.jpg',
        note: 'Cho những tháng năm thương nhớ người...'
    },
    {
        name: 'Muộn màng là từ lúc',
        url: 'music/MuonMangLaTuLuc-NguyenHa.mp3',
        artist: 'Kim Yoon',
        bg: 'images/1.jpg',
        note: 'Cho những tháng năm thương nhớ người...'
    },
    {
        name: 'Ta có hẹn với tháng 5',
        url: 'music/TaCoHenVoiThang5-Nguyen Ha.mp3',
        artist: 'Kim Yoon',
        bg: 'images/cunvaem.jpg',
        note: 'Cho những tháng năm thương nhớ người...'
    },
    {
        name: 'Tháng mười một',
        url: 'music/ThangMuoiMot-Hy.mp3',
        artist: 'Kim Yoon',
        bg: 'images/binhyenlaxanh.jpg',
        note: 'Cho những tháng năm thương nhớ người...'
    },
    {
        name: 'Tinh cầu cô đơn',
        url: 'music/TinhCauCoDon-PhamHoaiNam.mp3',
        artist: 'Kim Yoon',
        bg: 'images/1.jpg',
        note: 'Cho những tháng năm thương nhớ người...'
    },
    {
        name: 'Tình đầu',
        url: 'music/TinhDau-NguyenHa.mp3',
        artist: 'Kim Yoon',
        bg: 'images/tinhtrecon.jpg',
        note: 'Cho những tháng năm thương nhớ người...'
    },
    {
        name: 'Vừa biết dấu yêu',
        url: 'music/VuaBietDauYeu-ThanhTrangNguyen.mp3',
        artist: 'Kim Yoon',
        bg: 'images/binhyenlaxanh.jpg',
        note: 'Cho những tháng năm thương nhớ người...'
    },
    {
        name: 'Want to be a Pisces',
        url: 'music/WantToBeAPisces-JinShi.mp3',
        artist: 'Kim Yoon',
        bg: 'images/honnhien.jpg',
        note: 'Cho những tháng năm thương nhớ người...'
    },
    {
        name: 'Lạc Nhau Có Phải Muôn Đời',
        url: 'songs/LacNhauCoPhaiMuonDoi-TrietPham.mp3',
        note: 'Cho những tháng năm thương nhớ người...'
    }  
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
  

  var playPromise = audio.play();

  if (playPromise !== undefined) {
    playPromise.then(_ => {
      // Automatic playback started!
      // Show playing UI.
    })
    .catch(error => {
      // Auto-play was prevented
      // Show paused UI.
      document.querySelector('.btn-play').classList.remove('d-none');
      document.getElementById('btn-play').addEventListener("click", function() {
        console.log('clicked');
        switchTrack();
        document.querySelector('.btn-play').classList.add('d-none');
      });
    });
  }
  
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

    const btnRain = document.getElementById('btn-rain');
    btnRain.addEventListener('click', rainPlay);

    function rainPlay() {
        var rain = document.getElementById('1');
        console.log(rain.paused);
        if (!rain.paused) {
            rain.pause();
        } else {
            rain.play();
        }
    }


    document.getElementById('btn-rain').addEventListener('click', () => {
        document.getElementById('btn-rain').classList.toggle('settings-icons--off');
        rainPlay;
    });
    document.getElementById('btn-music').addEventListener('click', () => {       
        document.getElementById('btn-music').classList.toggle('settings-icons--off');
        if (!audio.paused) {
            audio.pause();
        } else {
            audio.play();
        }
    });
    document.getElementById('btn-next').addEventListener('click', switchTrack);
}



init();

