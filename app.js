const songs = [
  {
    name: 'When the love falls',
    url: 'https://iamtd.github.io/songs/WhenTheLoveFalls-Yiruma.mp3',
    artist: 'Yiruma'
  },
  {
    name: 'Snow Flower',
    url: 'songs/SnowFlower-KimYoon.mp3',
    artist: 'Kim Yoon'
  },
  {
    name: 'Love',
    url: 'songs/Love-WangWei.mp3',
    artist: 'Wang Wei'
  },
  {
    name: 'Remember',
    url: 'songs/Remember-KimYoon.mp3',
    artist: 'Kim Yoon'
  },
  {
    name: 'Bài hát viết cho em',
    url: 'songs/BaiHatVietChoEm-PhamHoaiNam.mp3',
    artist: 'Kim Yoon'
  },
  {
    name: 'Chỉ còn những mùa nhớ',
    url: 'songs/ChiConNhungMuaNho-BaoTram.mp3',
    artist: 'Kim Yoon'
  },
  {
    name: 'Chuyện của ta',
    url: 'songs/ChuyenCuaTa-GleeGiaThieu.mp3',
    artist: 'Kim Yoon'
  },
  {
    name: 'Còn tuổi nào cho em',
    url: 'songs/ConTuoiNaoChoEm-MiuLe.mp3',
    artist: 'Kim Yoon'
  },
  {
    name: 'Đánh rơi bên hồ',
    url: 'songs/DanhRoiBenHo-ThuyChi.mp3',
    artist: 'Kim Yoon'
  },
  {
    name: 'Nhớ mang em về',
    url: 'songs/NhoMangEmVe-Hy.mp3',
    artist: 'Kim Yoon'
  },
  {
    name: 'Sài gòn vẫn thế',
    url: 'songs/SaiGonVanThe-PhamHoaiNam.mp3',
    artist: 'Kim Yoon'
  },
  {
    name: 'Dream Catcher',
    url: 'songs/DreamCatcher-XiaoPing.mp3',
    artist: 'Kim Yoon'
  },
  {
    name: 'Em vẫn như ngày xưa',
    url: 'songs/EmVanNhuNgayXua-ThaiTrinh.mp3',
    artist: 'Kim Yoon'
  },
  {
    name: 'Giấc mơ nhẹ nhàng',
    url: 'songs/GiacMoNheNhang-ThuyChiFtMinhVuong.mp3',
    artist: 'Kim Yoon'
  },
  {
    name: 'Dona, Dona',
    url: 'songs/JoanBaez-DonnaDonna.mp3',
    artist: 'Kim Yoon'
  },
  {
    name: 'Mong manh tình về',
    url: 'songs/MongManhTinhVe-ThuyChi.mp3',
    artist: 'Kim Yoon'
  },
  {
    name: "Morning Please Don't Come",
    url: 'songs/MorningPleaseDontCome-WangWei.mp3',
    artist: 'Kim Yoon'
  },
  {
    name: 'Mùa hoa bỏ lại',
    url: 'songs/MuaHoaBoLai-PhamHoaiNam.mp3',
    artist: 'Kim Yoon'
  },
  {
    name: 'Muộn màng là từ lúc',
    url: 'songs/MuonMangLaTuLuc-NguyenHa.mp3',
    artist: 'Kim Yoon'
  },
  {
    name: 'Ta có hẹn với tháng 5',
    url: 'songs/TaCoHenVoiThang5-NguyenHa.mp3',
    artist: 'Kim Yoon'
  },
  {
    name: 'Tháng mười một',
    url: 'songs/ThangMuoiMot-Hy.mp3',
    artist: 'Kim Yoon'
  },
  {
    name: 'Tinh cầu cô đơn',
    url: 'songs/TinhCauCoDon-PhamHoaiNam.mp3',
    artist: 'Kim Yoon'
  },
  {
    name: 'Tình đầu',
    url: 'songs/TinhDau-NguyenHa.mp3',
    artist: 'Kim Yoon'
  },
  {
    name: 'Vừa biết dấu yêu',
    url: 'songs/VuaBietDauYeu-ThanhTrangNguyen.mp3',
    artist: 'Kim Yoon'
  },
  {
    name: 'Want to be a Pisces',
    url: 'songs/WantToBeAPisces-JinShi.mp3',
    artist: 'Kim Yoon'
  },
  {
    name: 'Lạc Nhau Có Phải Muôn Đời',
    url: 'songs/LacNhauCoPhaiMuonDoi-TrietPham.mp3',
    artist: 'Kim Yoon'
  },
  {
    name: 'Bảy bước tới mùa hè',
    url: 'songs/BayBuocToiMuaHe-DaoLiuLoo.mp3',
    artist: 'Kim Yoon'
  },
  {
    name: 'Ngày Hạ',
    url: 'songs/NgayHa-DiLixKBee.mp3',
    artist: 'Kim Yoon'
  }
];

// INIT PLAYLIST
let newSongs = [...songs];
const shuffleSongs = () => (newSongs = songs.sort(() => Math.random() - 0.5));

// INIT AUDIO
shuffleSongs();
let index = 0;
const audio = new Audio(newSongs[index].url);

// NEXT SONG
const btnNext = document.getElementById('btn-next');

const nextSong = () => {
  if (index >= songs.length - 1) {
    shuffleSongs();
    index = 0;
  } else {
    index++;
  }
  audio.src = newSongs[index].url;
  audio.play();
  btnMusic.classList.remove('option-icons--off');
};

btnNext.addEventListener('click', nextSong);
audio.addEventListener('ended', function() {
  nextSong();
});

// PAUSE, PLAY
const btnMusic = document.getElementById('btn-music');

const pause = () => {
  !audio.paused ? audio.pause() : audio.play();
  btnMusic.classList.toggle('option-icons--off');
};
btnMusic.addEventListener('click', pause);

// RAIN SOUND
const btnRain = document.getElementById('btn-rain');

const playRainSound = () => {
  var rain = document.getElementById('rain-audio');
  rain.paused ? rain.play() : rain.pause();
  btnRain.classList.toggle('option-icons--off');
};
btnRain.addEventListener('click', playRainSound);

// MENU
const btnMenu = document.getElementById('btn-menu');

var playPromise = audio.play();

// In browsers that don’t yet support this functionality,
// playPromise won’t be defined.
if (playPromise !== undefined) {
  playPromise
    .then(function() {
      // Automatic playback started!
    })
    .catch(function(error) {
      // Automatic playback failed.
      // Show a UI element to let the user manually start playback.
      showOverlay();
    });
}

const overlay = document.querySelector('.overlay');
const bottomMenu = document.querySelector('.bottom-menu');
const settings = document.querySelector('.settings');

const showOverlay = () => {
  overlay.classList.remove('d-none');
  bottomMenu.classList.add('d-none');
  settings.classList.add('d-none');
};

const hideOverlay = () => {
  overlay.classList.add('d-none');
  bottomMenu.classList.remove('d-none');
  settings.classList.remove('d-none');
  nextSong();
};
