const TOGGLE_BUTTON = document.querySelector('.nav-toggle');
const MOBILE_NAV = document.querySelector('.mobile-nav');
const MOBILE_NAV_CLOSE = document.querySelector('.mobile-nav__close')
const SONG_LINK = document.querySelectorAll('.song-link');

TOGGLE_BUTTON.addEventListener('click', function() {
  MOBILE_NAV.classList.add('open-menu');
})

MOBILE_NAV_CLOSE.addEventListener('click', function() {
  MOBILE_NAV.classList.remove('open-menu');
})

for (let i= 0; i < SONG_LINK.length; i++) {
  SONG_LINK[i].addEventListener('click', function() {
    MOBILE_NAV.classList.remove('open-menu');
  });
}