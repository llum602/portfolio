import React, {Component} from 'react';
import './App.css';
import Lightbox from 'react-images';
import Gallery from 'react-photo-gallery';
import bellTower from'./bellTower.jpeg';
import shoeWire from'./shoeWire.png';
import foxMask from'./foxMask.jpeg';
import deerForest from './deerForest.jpeg';
import forest from './forest.png';
import chordIcon3 from './chordIcon3.png';
import transistorSword from './transistorSword.jpeg';
import worldLogo from './worldLogo.png';
import deer from './deer.png';
import ikuCircle from './home_graphic_circle.png';
import ikuRect from './home_graphic.png';
import tunercat from './tunercat.jpg';
import cswnFoot from './footer_graphic.png';
import cswnWorld from './cswn_home_graphic.png';
import cswnWebLogo from './web_logo_3.png';
import cswnLogo from './puzz_day_logo.png';


const photos = [
  { src: cswnFoot, width: 9, height: 1.3 },
  { src: cswnWebLogo, width: 5, height: 5 },
  { src: cswnLogo, width: 3, height: 3 },
  { src: cswnWorld, width: 4, height: 4 },
  { src: ikuCircle, width: 3, height: 3 },
  { src: ikuRect, width: 3.1, height: 2 },

  { src: bellTower, width: 3, height: 3 },
  // { src: foxMask, width: 3, height: 3 },
  // { src: chordIcon3, width: 2, height: 2 },
  // { src: transistorSword, width: 1, height: 2 },
];

const cswnPhotos = [
  { src: cswnFoot, width: 9, height: 1.3 },
  { src: cswnWebLogo, width: 5, height: 5 },
  { src: cswnLogo, width: 3, height: 3 },
  { src: cswnWorld, width: 4, height: 4 }
];

const ikuPhotos = [
  { src: ikuCircle, width: 3, height: 3 },
  { src: ikuRect, width: 3.1, height: 2 }
];

const otherPhotos = [
  { src: bellTower, width: 3, height: 3 },
]

class Design extends Component {
  constructor() {
    super();
    this.state = { currentImage: 0 };
    this.closeLightbox = this.closeLightbox.bind(this);
    this.openLightbox = this.openLightbox.bind(this);
    this.gotoNext = this.gotoNext.bind(this);
    this.gotoPrevious = this.gotoPrevious.bind(this);
  }
  openLightbox(event, obj) {
    this.setState({
      currentImage: obj.index,
      lightboxIsOpen: true,
    });
  }
  closeLightbox() {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false,
    });
  }
  gotoPrevious() {
    this.setState({
      currentImage: this.state.currentImage - 1,
    });
  }
  gotoNext() {
    this.setState({
      currentImage: this.state.currentImage + 1,
    });
  }
  render() {
    return (
      <div className="galleries">
        <div className="title">Lauren Lum</div>

        <div className="sectionHead">CSWN</div>
        <div className="sectionDesc">
          Created for CSWN `(Computer Science Women's Network)` 2019 Puzzle Day, a day-long
          even where students completed as many hand-crafted puzzles as possible. Graphics were 
          used for stickers, promotional materials, and participant t-shirts.
        </div>
        <Gallery photos={cswnPhotos} onClick={this.openLightbox} />
        <Lightbox images={cswnPhotos}
          onClose={this.closeLightbox}
          onClickPrev={this.gotoPrevious}
          onClickNext={this.gotoNext}
          currentImage={this.state.currentImage}
          isOpen={this.state.lightboxIsOpen}
        />

        <div className="sectionHead">IKU</div>
        <div className="sectionDesc">
          Created for CS252 final project, a haiku web app that allowed users to 
          write, view, and check syllables of haikus.
        </div>
        <Gallery photos={ikuPhotos} onClick={this.openLightbox} />
        <Lightbox images={ikuPhotos}
          onClose={this.closeLightbox}
          onClickPrev={this.gotoPrevious}
          onClickNext={this.gotoNext}
          currentImage={this.state.currentImage}
          isOpen={this.state.lightboxIsOpen}
        />

        <div className="sectionHead">Other Graphics</div>
        <Gallery photos={otherPhotos} onClick={this.openLightbox} />
        <Lightbox images={otherPhotos}
          onClose={this.closeLightbox}
          onClickPrev={this.gotoPrevious}
          onClickNext={this.gotoNext}
          currentImage={this.state.currentImage}
          isOpen={this.state.lightboxIsOpen}
        />
      </div>
    )
  }
}


export default Design;
