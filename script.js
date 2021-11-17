// INTERACTIONS
const hamburger = document.querySelector('.hamburger');
const navUl = document.querySelector('.navbar-items');
const closeButton = document.querySelector('.close');

hamburger.addEventListener('click', () => {
  hamburger.classList.add('hide');
  navUl.classList.add('show');
  closeButton.classList.add('show');
});

closeButton.addEventListener('click', () => {
  hamburger.classList.remove('hide');
  navUl.classList.remove('show');
  closeButton.classList.remove('show');
});

// HOME PAGE FEATURED SPEAKERS
const speakers = [
  {
    featuredImage: 'assets/images/Herbie-Hancock-720x720.jpeg',
    alt: 'Image of Herbie Hancock',
    name: 'Herbie Hancock',
    role: 'Piano',
    description: 'American jazz pianist, keyboardist, bandleader, and composer, who helped redefine the role of a jazz rhythm section and was one of the primary architects of the post-bop sound.',
  },
  {
    featuredImage: 'assets/images/6d67c-christian-mcbride-001-cheltenham-byjohnwatson.jpeg',
    alt: 'Image of Christian McBride',
    name: 'Christian McBride',
    role: 'Bass',
    description: 'American jazz bassist, composer and arranger. He has appeared on more than 300 recordings as a sideman, and is a seven-time Grammy Award winner.',
  },
  {
    featuredImage: 'assets/images/imagen.jpeg',
    alt: 'Image of Pat Metheny',
    name: 'Pat Metheny',
    role: 'Guitar',
    description: 'Leader of the Pat Metheny Group and is also involved in duets, solo works, and other side projects. His style incorporates elements of progressive and contemporary jazz, Latin jazz, and jazz fusion. Metheny has three gold albums and 20 Grammy Awards and is the only person to win Grammys in 10 categories.',
  },
  {
    featuredImage: 'assets/images/chirs-potter.jpeg',
    alt: 'Image of Chris Potter',
    name: 'Chris Potter',
    role: 'Saxophone',
    description: 'American jazz saxophonist, composer, and multi-instrumentalist. Potter came to prominence as a sideman with trumpeter Red Rodney, before stints with drummer Paul Motian, bassist Dave Holland, trumpeter Dave Douglas and others.',
  },
  {
    featuredImage: 'assets/images/Headshot+1.jpeg',
    alt: 'Image of Marquis Hill',
    name: 'Marquis Hill',
    role: 'Trumpet',
    description: 'American trumpet player, composer, and band leader from Chicago, Illinois. His musical style stems from Black American Music, synthesizing genres from jazz, hip-hop, R&B, Chicago house and neo-soul.',
  },
  {
    featuredImage: 'assets/images/A-316701-1425651763-6372.jpeg.jpg',
    alt: 'Image of Antonio Sanchez',
    name: 'Antonio Sanchez',
    role: 'Drums',
    description: 'Mexican-American jazz drummer and composer best known for his work with jazz guitarist Pat Metheny and as a composer of the film score for the 2014 film Birdman.',
  },
];

const createElementWithClass = (type, className) => {
  const element = document.createElement(type);
  element.classList.add(className);
  return element;
};

const featuredSpeakers = (speakers, number) => {
  for (let i = 0; i < number; i += 1) {
    const desktopSpeaker = document.querySelector('.desktop-speaker');
    const speakerDiv = createElementWithClass('div', 'speaker');
    const speakerImage = createElementWithClass('img', 'speaker-image');
    speakerImage.src = speakers[i].featuredImage;
    speakerImage.alt = speakers[i].alt;
    const speakerInfo = createElementWithClass('div', 'speaker-info');
    const h3 = createElementWithClass('h3', 'speaker-name');
    h3.textContent = speakers[i].name;
    const h4 = createElementWithClass('h4', 'speaker-role');
    h4.textContent = speakers[i].role;
    const p = createElementWithClass('p', 'speaker-description');
    p.textContent = speakers[i].description;
    speakerInfo.appendChild(h3);
    speakerInfo.appendChild(h4);
    speakerInfo.appendChild(p);
    speakerDiv.appendChild(speakerImage);
    speakerDiv.appendChild(speakerInfo);
    desktopSpeaker.appendChild(speakerDiv);
  }
};

featuredSpeakers(speakers, 6);
