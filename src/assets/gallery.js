const gallery = [
    {image: "https://static.wixstatic.com/media/384146_af609f6b93f0495bb4fcab2f8b4f58ce~mv2.jpg/v1/fill/w_758,h_600,al_r,q_85,usm_0.66_1.00_0.01,enc_auto/384146_af609f6b93f0495bb4fcab2f8b4f58ce~mv2.jpg"},
    {image: "https://bit.ly/3UqdWob"},
    {image: "https://bit.ly/3UqdWob"},
    {image: "https://bit.ly/3UqdWob"},
    {image: "https://bit.ly/3UqdWob"},
    {image: "https://bit.ly/3UqdWob"},
    {image: "https://bit.ly/3UqdWob"},
    {image: "https://bit.ly/3UqdWob"},
    {image: "https://bit.ly/3UqdWob"},
    {image: "https://bit.ly/3UqdWob"}, 
]

export default gallery;


/*const images = [
  "https://drive.google.com/file/d/1Fhqrm3Fp6vCvhmhv20sA7DMYO1nf_is6/view?usp=drive_link",
  "https://drive.google.com/file/d/16kv3-b7tE3SJ6TYf2AZsezVHkIIwF6LG/view?usp=drive_link",
  "https://drive.google.com/file/d/1Ug3kXjPezdhGSdDzbG8M7GjdwD93RT9v/view?usp=drive_link",
  "https://drive.google.com/file/d/1QnUXOhkPc2lE5k3eJvUABctjgTyQ-lpt/view?usp=drive_link",
  "https://drive.google.com/file/d/1ddgMNYnUS6PyFx_XNkvopTTR3FpzYxR6/view?usp=drive_link",
  "https://drive.google.com/file/d/1W5FZZvKokJYznPiAzDNJbAu77HFNq8r5/view?usp=drive_link",
  "https://drive.google.com/file/d/1LEMMzKHzD7FB6beXj9XAIPm7yS5r65Qi/view?usp=drive_link",
  "https://drive.google.com/file/d/1MAbL_KR82b6JuTqA6CL9dmK8NqfIhEDx/view?usp=drive_link",
  "https://drive.google.com/file/d/1tIxdVrsuhESVYL7P57sWsa0vpm1olRlZ/view?usp=drive_link",
  "https://drive.google.com/file/d/1WusUvnSdB1QYoxK-Mg_wINhdaM8FQRtP/view?usp=drive_link",
  "https://drive.google.com/file/d/1OrpJpqWDg7z9iudlOP3SVbqNRftoGFIf/view?usp=drive_link",
  "https://drive.google.com/file/d/1TrcCnnowhwFIdKP8HLIZfNsmCAZ0hmZb/view?usp=drive_link",
  
];

function getRandomImages(images, num) {
  const shuffled = images.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, num);
}

const gallery = getRandomImages(images, 10); // Prendi 10 immagini casuali

export default gallery;

*/

/*const fs = require('fs');
const path = require('path');

const cartellaImmagini = '/src/assets/img';

fs.readdir(cartellaImmagini, (err, files) => {
  if (err) {
    console.error('Errore durante la lettura della cartella:', err);
    return;
  }

  // Filtra solo i file con estensione immagine
  const immagini = files.filter(file => /\.(jpg|jpeg|png|gif)$/i.test(file));

  // Scrivi l'elenco delle immagini in un file JSON
  fs.writeFile('elenco_immagini.json', JSON.stringify(immagini, null, 2), err => {
    if (err) {
      console.error('Errore durante la scrittura del file JSON:', err);
      return;
    }
    console.log('File JSON creato con successo!');
  });
});*/