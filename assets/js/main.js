/* =========================
   LANGUAGE TOGGLE
========================= */
const langToggle = document.getElementById('langToggle');
let isEnglish = false;

langToggle.addEventListener('click', () => {
  isEnglish = !isEnglish;
  document.body.classList.toggle('en-mode', isEnglish);
  langToggle.textContent = isEnglish ? 'VI' : 'EN';
});

/* =========================
   FILTER ALBUM
========================= */
const menuButtons = document.querySelectorAll('.album-menu button');
const galleryItems = document.querySelectorAll('.gallery a');
const pageTitles = document.querySelectorAll('.page-title h1');
// const pageTitlesh3 = document.querySelectorAll('.page-title h3');
const pageTitleCommingSoon = document.querySelector('.page-title.commingsoon');

const storyofloveGallery = document.querySelector('#storyoflove-gallery');
const bridgegroomGallery = document.querySelector('#bridegroom-gallery');
const ourlovelyguestsGallery = document.querySelector('#ourlovelyguests-gallery');
const momentofjoyGallery = document.querySelector('#momentofjoy-gallery');
const weddingceremonyGallery = document.querySelector('#weddingceremony-gallery');
// const photoboothmomentGaller = document.querySelector('#photoboothmoment-gallery');

menuButtons.forEach(button => {
  button.addEventListener('click', () => {
    // active state
    menuButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    const filter = button.dataset.filter;

    pageTitles.forEach(item => {
      if (filter === "storyoflove") {
        item.textContent = 'STORY OF LOVE';
      }
      if (filter === "bridgegroom") {
        item.textContent = 'BRIDE & GROOM';

        storyofloveGallery.style.padding = '0px';
      }
      if (filter === "ourlovelyguests") {
        item.textContent = 'OUR LOVELY GUESTS';

        storyofloveGallery.style.padding = '0px';
        bridgegroomGallery.style.padding = '0px';
      }
      if (filter === "momentofjoy") {
        item.textContent = 'MOMENT OF JOY';

        storyofloveGallery.style.padding = '0px';
        bridgegroomGallery.style.padding = '0px';
        ourlovelyguestsGallery.style.padding = '0px';
      }
      if (filter === "weddingceremony") {
        item.textContent = 'WEDDING CEREMONY';

        storyofloveGallery.style.padding = '0px';
        bridgegroomGallery.style.padding = '0px';
        ourlovelyguestsGallery.style.padding = '0px';
        momentofjoyGallery.style.padding = '0px';
      }
      if (filter === "photoboothmoment") {
        item.textContent = 'COMMING SOON ♡♡♡';
      }
    });

    galleryItems.forEach(item => {
      const category = item.dataset.category;
      console.log(filter);

      if (category === filter) {
        item.style.display = 'block';
        setTimeout(() => item.classList.add('visible'), 50);
      } else {
        item.classList.remove('visible');
        setTimeout(() => {
          item.style.display = 'none';
        }, 200);
      }
    });
  });
});

/* =========================
   SCROLL FADE-IN
========================= */
const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.15
  }
);

galleryItems.forEach(item => observer.observe(item));

/* =========================
   LIGHTBOX
========================= */
const lightbox = GLightbox({
  touchNavigation: true,
  loop: true,
  preload: false,
  zoomable: false,
  closeButton: true
});

/* =========================
   SMOOTH UX POLISH
========================= */
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    lightbox.close();
  }
});
