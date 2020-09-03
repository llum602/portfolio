import React, {Component} from 'react';
import './App.css';
import Gallery from 'react-photo-gallery';
import bellTower from'./assets/bellTower.jpeg';
import ikuCircle from './assets/home_graphic_circle.png';
import ikuRect from './assets/home_graphic.png';
import cswnFoot from './assets/footer_graphic.png';
import cswnWorld from './assets/cswn_home_graphic.png';
import cswnWebLogo from './assets/web_logo_3.png';
import cswnLogo from './assets/puzz_day_logo.png';
import tabLogo1 from './assets/camp_shirt_color.png';
import tabLogo2 from './assets/camp_shirtDesign.png';
import waveDesign from './assets/wave_design.png';
import olympic from './assets/olympic.png';
import pertrek from './assets/airplane-logo-red-square.png';


const tableauPhotos = [
  { src: tabLogo1, width: 2, height: 2 },
  { src: tabLogo2, width: 3, height: 3 },
]

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
  { src: waveDesign, width: 3, height: 3 },
  { src: olympic, width: 3, height: 3 },
  { src: pertrek, width: 3, height: 3 },

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
    try{
      this.setState({
        currentImage: obj.index,
        lightboxIsOpen: true,
      });
    }
    catch(e) {
      console.log("OPENING FAILED " + e);
    }
    
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

        <div className="sectionHead">Tableau</div>
        <div className="sectionDesc">
          These logos were created during my internship at Tableau during Summer 2020- after entering them
          in a contest with designs from other interns, it received the most votes and was printed on shirts that
          would be distributed to all Tableau interns.
        </div>
        <Gallery photos={tableauPhotos}/>

        <div className="sectionHead">CSWN</div>
        <div className="sectionDesc">
          Created for CSWN `(Computer Science Women's Network)` 2019 Puzzle Day, a day-long
          even where students completed as many hand-crafted puzzles as possible. Graphics were 
          used for stickers, website, promotional materials, and participant t-shirts. Find the 
          puzle day website here: <a href="http://cswnpuzzleday.com" target="_blank">cswnpuzzleday.com</a>
        </div>
        <Gallery photos={cswnPhotos}/>
        {/* <Gallery photos={cswnPhotos} onClick={this.openLightbox} />
        <Lightbox images={cswnPhotos}
          onClose={this.closeLightbox}
          onClickPrev={this.gotoPrevious}
          onClickNext={this.gotoNext}
          currentImage={this.state.currentImage}
          isOpen={this.state.lightboxIsOpen}
        /> */}

        <div className="sectionHead">IKU</div>
        <div className="sectionDesc">
          Created for CS252 final project, a haiku web app that allowed users to 
          write, view, and check syllables of haikus. Find the final project 
          here: <a href="https://i-kuu.herokuapp.com/" target="_blank">i-kuu.herokuapp.com</a>
        </div>
        <Gallery photos={ikuPhotos}/>
        {/* <Gallery photos={ikuPhotos} onClick={this.openLightbox} />
        <Lightbox images={ikuPhotos}
          onClose={this.closeLightbox}
          onClickPrev={this.gotoPrevious}
          onClickNext={this.gotoNext}
          currentImage={this.state.currentImage}
          isOpen={this.state.lightboxIsOpen}
        /> */}

        <div className="sectionHead">Other Graphics</div>
        <Gallery photos={otherPhotos}/>
        {/* <Gallery photos={otherPhotos} onClick={this.openLightbox} />
        <Lightbox images={otherPhotos}
          onClose={this.closeLightbox}
          onClickPrev={this.gotoPrevious}
          onClickNext={this.gotoNext}
          currentImage={this.state.currentImage}
          isOpen={this.state.lightboxIsOpen}
        /> */}
      </div>
    )
  }
}


export default Design;
