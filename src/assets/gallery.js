const images = [
  {image: "/img/384146_6fc8e15f2bec4ae7b289cc5ff4c063de~mv2.webp"},
  {image: "/img/384146_68c68f1bb5e3437b98e0177e3cf2c124~mv2.webp"},
  {image: "/img/384146_f046381000894d8f80bdee6aebfc0bef~mv2.webp"},
  {image: "/img/418777304_1301720747189427_4940456595351902444_n.jpg"},
  {image: "/img/419566548_372501158702216_8507430000828026224_n.jpg"},
  {image: "/img/419592255_1781011949067563_3266793270815622966_n.jpg"},
  {image: "/img/421694742_1557177341704803_5315094856398002163_n.jpg"},
  {image: "/img/421715515_1448278469418793_2932073833232543602_n.jpg"},
  {image: "/img/422704722_7066546176759238_2458559993872467561_n.jpg"},
  {image: "/img/427643415_770808327755852_8814108512799943192_n.jpg"},
  {image: "/img/427766306_353428770926805_766961964536751455_n.jpg"},
  {image: "/img/430114512_758029416276723_7668547964057680836_n.jpg"},
  {image: "/img/431263618_1800063983772749_3919006284685757279_n.jpg"},
  {image: "/img/434067742_387054937456024_5139803757044345318_n.jpg"},
  {image: "/img/434582978_949230820043574_1324351002395183703_n.jpg"},
  {image: "/img/434646717_2137480066604453_1228258865401989462_n.jpg"},
  {image: "/img/434831751_1417829968873162_7563192536384764272_n.jpg"},
  {image: "/img/434839753_432569762761778_5637625166339637688_n.jpg"},
  {image: "/img/435929169_1495513401374121_2864711708942405914_n.jpg"},
  {image: "/img/435949890_306546455591731_8424229011202799873_n.jpg"},
  {image: "/img/436076745_3273139476164146_4181004066113016797_n.jpg"},
  {image: "/img/IMG_8683_edited.webp"},
  {image: "/img/photo_5850310825628254639_y.jpg"},
  {image: "/img/photo_5850310825628254645_y.jpg"},
  {image: "/img/photo_5850310825628254684_y.jpg"},
  {image: "/img/photo_5850310825628254687_y.jpg"},
  {image: "/img/photo_5850310825628254693_y.jpg"},
  {image: "/img/photo_5850310825628254698_y.jpg"},
  {image: "/img/photo_5850310825628254704_y.jpg"},
  {image: "/img/photo_5850310825628254734_y.jpg"},
  {image: "/img/photo_6037471541744222512_y.jpg"},
  {image: "/img/photo_6037471541744222516_y.jpg"},
  {image: "/img/photo_6037471541744222518_y.jpg"},
  {image: "/img/photo_6037471541744222520_y.jpg"},
  {image: "/img/photo_6037471541744222525_y.jpg"},
  {image: "/img/photo_6037471541744222533_y.jpg"},
  {image: "/img/photo_6037471541744222539_y.jpg"},
  {image: "/img/photo_6037471541744222565_y.jpg"},
  {image: "/img/photo_6037471541744222617_y.jpg"},
  {image: "/img/photo_6037471541744222636_y.jpg"},
];

function getRandomImages(images, num) {
  const shuffled = images.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, num);
}

const gallery = getRandomImages(images, 10); // Prendi 10 immagini casuali

export default gallery;


