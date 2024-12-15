// Import images
import graphics_one from "./assets/bad.jpg";
import BROCHURE from "./assets/BROCHURE.jpg";
import Brutalism from "./assets/Brutalism.jpg";
import COVER_ART from "./assets/COVER_ART.jpg";
import F_BAR from "./assets/F_BAR.jpg";
import F_CLUB from "./assets/F_CLUB.jpg";
import F_DINER from "./assets/F_DINER.jpg";
import F_GYM from "./assets/F_GYM.jpg";
import F_HOUSE from "./assets/F_HOUSE.jpg";
import F_MODEL from "./assets/F_MODEL.jpg";
import INSIDE from "./assets/INSIDE.png";
import INSIGNIA from "./assets/INSIGNIA.jpg";
import JAI_TO_MUMBAI from "./assets/JAI - TO - MUMBAI.png";
import OUTSIDE from "./assets/OUTSIDE.png";
import VOICE_OF_PUNJAB from "./assets/VOICE_OF_PUNJAB.jpg";

// areana all images
import arena_one from "./assets/arena/arena_01.jpg";
import arena_two from "./assets/arena/arena_02.jpg";
import arena_three from "./assets/arena/arena_03.jpg";
import arena_four from "./assets/arena/arena_04.jpg";
import arena_five from "./assets/arena/arena_05.jpg";
import arena_six from "./assets/arena/arena_06.jpg";
import arena_seven from "./assets/arena/arena_07.jpg";
import arena_eight from "./assets/arena/arena_08.jpg";
import arena_nine from "./assets/arena/arena_09.jpg";
import arena_ten from "./assets/arena/arena_10.jpg";

//art-gallery images 
import art_gallery_01 from "./assets/art-gallary/art_gallery_01.png";
import art_gallery_02 from "./assets/art-gallary/art_gallery_02.png";
import art_gallery_03 from "./assets/art-gallary/art_gallery_03.jpg";
import art_gallery_04 from "./assets/art-gallary/art_gallery_04.jpg";
import art_gallery_05 from "./assets/art-gallary/art_gallery_05.jpg";
import art_gallery_06 from "./assets/art-gallary/art_gallery_06.jpg";
import art_gallery_07 from "./assets/art-gallary/art_gallery_07.jpg";
import art_gallery_08 from "./assets/art-gallary/art_gallery_08.png";
import art_gallery_09 from "./assets/art-gallary/art_gallery_09.jpg";
import art_gallery_10 from "./assets/art-gallary/art_gallery_10.jpg";
import art_gallery_11 from "./assets/art-gallary/art_gallery_11.jpg";
import art_gallery_12 from "./assets/art-gallary/art_gallery_12.jpg";
import art_gallery_13 from "./assets/art-gallary/art_gallery_13.jpg";
import art_gallery_14 from "./assets/art-gallary/art_gallery_14.jpg";


// cola-drinks
import coladeinks1 from "./assets/cola drink/cocacola_1.png";
import  coladeinks2 from "./assets/cola drink/cocacola_2.png";
import coladeinks3 from "./assets/cola drink/cocacola_3.png";
import coladeinks4 from "./assets/cola drink/cocacola_4.png";
import coladeinks5 from "./assets/cola drink/cocacola_5.png";
import coladeinks6 from "./assets/cola drink/cocacola_6.png";
import coladeinks7 from "./assets/cola drink/cocacola_7.png";
import coladeinks8 from "./assets/cola drink/cocacola_8.png";


//cosy-home 
import cosy1 from "./assets/cosy home/cosy-home-1.jpg";
import cosy2 from "./assets/cosy home/cosy-home-2.jpg";
import cosy3 from "./assets/cosy home/cosy-home-3.jpg";
import cosy4 from "./assets/cosy home/cosy-home-4.jpg";
import cosy5 from "./assets/cosy home/cosy-home-5.jpg";


//Dock room 
import Dock1 from "./assets/Dock Park/dock1.png";
import Dock2 from "./assets/Dock Park/dock2.png";
import Dock3 from "./assets/Dock Park/dock3.png";
import Dock4 from "./assets/Dock Park/dock4.png";
import Dock5 from "./assets/Dock Park/dock5.png";
import Dock6 from "./assets/Dock Park/dock6.png";
import Dock7 from "./assets/Dock Park/dock7.png";
import Dock8 from "./assets/Dock Park/dock8.png";
import Dock9 from "./assets/Dock Park/dock9.png";
import Dock10 from "./assets/Dock Park/dock10.png";
import Dock11 from "./assets/Dock Park/dock11.png";
import Dock12 from "./assets/Dock Park/dock12.png";

//hall
import hall1 from "./assets/Hall/hall1.png";
import hall2 from "./assets/Hall/hall2.png";
import hall3 from "./assets/Hall/hall3.png";
import hall4 from "./assets/Hall/hall4.png";
import hall5 from "./assets/Hall/hall5.png";
import hall6 from "./assets/Hall/hall6.png";
import hall7 from "./assets/Hall/hall7.png";
import hall8 from "./assets/Hall/hall8.png";



// lockeroom
import locker1 from "./assets/locker room/locker1.jpg";
import locker2 from "./assets/locker room/locker2.jpg";
import locker3 from "./assets/locker room/locker3.jpg";
import locker4 from "./assets/locker room/locker4.jpg";


//maze 
import maze1 from "./assets/maze/maze1.png";
import maze2 from "./assets/maze/maze2.png";
import maze3 from "./assets/maze/maze3.png";
import maze4 from "./assets/maze/maze4.png";

//Taj
import Taj1 from "./assets/TAJ park/taj1.png";
import Taj2 from "./assets/TAJ park/taj2.png";
import Taj3 from "./assets/TAJ park/taj3.png";
import Taj4 from "./assets/TAJ park/taj4.png";
import Taj5 from "./assets/TAJ park/taj5.png";
import Taj6 from "./assets/TAJ park/taj6.png";
import Taj7 from "./assets/TAJ park/taj7.png";


//farming
import farm1 from "./assets/verticle farming/farming1.png";
import farm2 from "./assets/verticle farming/farming2.png";
import farm3 from "./assets/verticle farming/farming3.png";
import farm4 from "./assets/verticle farming/farming4.png";
import farm5 from "./assets/verticle farming/farming5.png";


// Create an array of all images with id and category
const allImages = [
  { id: 1, name: "graphics_one", src: graphics_one, category: "graphics" },
  { id: 2, name: "BROCHURE", src: BROCHURE, category: "graphics" },
  { id: 3, name: "Brutalism", src: Brutalism, category: "graphics" },
  { id: 4, name: "COVER_ART", src: COVER_ART, category: "graphics" },
  { id: 5, name: "F_BAR", src: F_BAR, category: "graphics" },
  { id: 6, name: "F_CLUB", src: F_CLUB, category: "graphics" },
  { id: 7, name: "F_DINER", src: F_DINER, category: "graphics" },
  { id: 8, name: "F_GYM", src: F_GYM, category: "graphics" },
  { id: 9, name: "F_HOUSE", src: F_HOUSE, category: "graphics" },
  { id: 10, name: "F_MODEL", src: F_MODEL, category: "graphics" },
  { id: 11, name: "INSIDE", src: INSIDE, category: "graphics" },
  { id: 12, name: "INSIGNIA", src: INSIGNIA, category: "graphics" },
  { id: 13, name: "JAI_TO_MUMBAI", src: JAI_TO_MUMBAI, category: "graphics" },
  { id: 14, name: "OUTSIDE", src: OUTSIDE, category: "graphics" },
  { id: 15, name: "VOICE_OF_PUNJAB", src: VOICE_OF_PUNJAB, category: "graphics" },

];
 
export const renderThumbnils = [
  {id: 1, name: "ESPORTS ARENA", src: arena_one ,category: "renders_arena"},
  {id: 2, name: "ART GALLERY", src: art_gallery_01, category: "renders_art_gallery" },
  {id: 3, name: "COLA DRINKS", src: coladeinks1 , category: "renders_cocacola"},
  {id: 4, name: "COZY HOME", src: cosy1 ,  category: "renders_cosyhomes"},
  {id: 5, name: "Dock Park", src: Dock1 , category: "renders_dock"},
  {id: 6, name: "THE HALL", src: hall1 , category: "renders_hails"},
  {id: 7, name: "THE LOCKERS", src: locker1 , category: "renders_lockerRooms"},
  {id: 8, name: "THE MAZE", src: maze1 ,category: "renders_mazes" },
  {id: 9, name: "TAJ PARK", src: Taj1 ,  category: "renders_park"},
  {id: 10, name: "VERTICLE FARMING", src: farm1, category: "renders_farming"},
]



export const renders = [
  { id: 16, name: "arena_one", src: arena_one, category: "renders_arena" },
  { id: 17, name: "arena_two", src: arena_two, category: "renders_arena" },
  { id: 18, name: "arena_three", src: arena_three, category: "renders_arena" },
  { id: 19, name: "arena_four", src: arena_four, category: "renders_arena" },
  { id: 20, name: "arena_five", src: arena_five, category: "renders_arena" },
  { id: 21, name: "arena_six", src: arena_six, category: "renders_arena" },
  { id: 22, name: "arena_seven", src: arena_seven, category: "renders_arena" },
  { id: 23, name: "arena_eight", src: arena_eight, category: "renders_arena" },
  { id: 24, name: "arena_nine", src: arena_nine, category: "renders_arena" },
  { id: 25, name: "arena_ten", src: arena_ten, category: "renders_arena" },
]


export const art_gallerys = [
  { id: 1, name: "art gallery one", src: art_gallery_01 , category: "renders_art_gallery" },
  { id: 2, name: "art gallery two", src: art_gallery_02, category: "renders_art_gallery" },
  { id: 3, name: "art gallery three", src: art_gallery_03, category: "renders_art_gallery" },
  { id: 4, name: "art gallery four", src: art_gallery_04, category: "renders_art_gallery" },
  { id: 5, name: "art gallery five", src: art_gallery_05, category: "renders_art_gallery" },
  { id: 6, name: "art gallery six", src: art_gallery_06, category: "renders_art_gallery" },
  { id: 7, name: "art gallery seven", src: art_gallery_07, category: "renders_art_gallery" },
  { id: 8, name: "art gallery eight", src: art_gallery_08, category: "renders_art_gallery" },
  { id: 9, name: "art gallery nine", src: art_gallery_09, category: "renders_art_gallery" },
  { id: 10, name: "art gallery ten", src: art_gallery_10, category: "renders_art_gallery" },
  { id: 11, name: "art gallery eleven", src: art_gallery_11, category: "renders_art_gallery" },
  { id: 12, name: "art gallery twelve", src: art_gallery_12, category: "renders_art_gallery" },
  { id: 13, name: "art gallery thirteen", src: art_gallery_13, category: "renders_art_gallery" },
  { id: 14, name: "art gallery fourteen", src: art_gallery_14, category: "renders_art_gallery" },
];


export const cocacolas = [
  { id: 1, name: "cocacola1", src: coladeinks1 , category: "renders_cocacola" },
  { id: 2, name: "cocacola2", src: coladeinks2 , category: "renders_cocacola" },
  { id: 3, name: "cocacola3", src: coladeinks3 , category: "renders_cocacola" },
  { id: 4, name: "cocacola4", src: coladeinks4 , category: "renders_cocacola" },
  { id: 5, name: "cocacola5", src: coladeinks5 , category: "renders_cocacola" },
  { id: 6, name: "cocacola6", src: coladeinks6 , category: "renders_cocacola" },
  { id: 7, name: "cocacola7", src: coladeinks7 , category: "renders_cocacola" },
  { id: 8, name: "cocacola8", src: coladeinks8 , category: "renders_cocacola" },
];

export const cosy_homes = [
  { id: 1, name: "cosy-home-1", src: cosy1 , category: "renders_cosyhomes" },
  { id: 2, name: "cosy-home-2", src: cosy2, category: "renders_cosyhomes" },
  { id: 3, name: "cosy-home-3", src: cosy3, category: "renders_cosyhomes" },
  { id: 4, name: "cosy-home-4", src: cosy4, category: "renders_cosyhomes" },
  { id: 5, name: "cosy-home-5", src: cosy5, category: "renders_cosyhomes" },
];


export const dock_parks = [
  { id: 1, name: "dock1", src: Dock1 , category: "renders_dock" },
  { id: 2, name: "dock2", src: Dock2 , category: "renders_dock" },
  { id: 3, name: "dock3", src: Dock3 , category: "renders_dock" },
  { id: 4, name: "dock4", src: Dock4 , category: "renders_dock" },
  { id: 5, name: "dock5", src: Dock5 , category: "renders_dock" },
  { id: 6, name: "dock6", src: Dock6 , category: "renders_dock" },
  { id: 7, name: "dock7", src: Dock7 , category: "renders_dock" },
  { id: 8, name: "dock8", src: Dock8 , category: "renders_dock" },
  { id: 9, name: "dock9", src: Dock9 , category: "renders_dock" },
  { id: 10, name: "dock10", src: Dock10 , category: "renders_dock" },
  { id: 11, name: "dock11", src: Dock11 , category: "renders_dock" },
  { id: 12, name: "dock12", src: Dock12 , category: "renders_dock" },
];


export const halls = [
  { id: 1, name: "hall1", src: hall1 , category: "renders_hails" },
  { id: 2, name: "hall2", src: hall2, category: "renders_hails" },
  { id: 3, name: "hall3", src: hall3, category: "renders_hails" },
  { id: 4, name: "hall4", src: hall4, category: "renders_hails" },
  { id: 5, name: "hall5", src: hall5, category: "renders_hails" },
  { id: 6, name: "hall6", src: hall6, category: "renders_hails" },
  { id: 7, name: "hall7", src: hall7, category: "renders_hails" },
  { id: 8, name: "hall8", src: hall8, category: "renders_hails" },
];



export const lockerRooms = [
  { id: 1, name: "locker1", src: locker1, category: "renders_lockerRooms" },
  { id: 2, name: "locker2", src: locker2, category: "renders_lockerRooms" },
  { id: 3, name: "locker3", src: locker3, category: "renders_lockerRooms" },
  { id: 4, name: "locker4", src: locker4, category: "renders_lockerRooms" },
];

export const mazes = [
  { id: 1, name: "maze1", src: maze1, category: "renders_mazes" },
  { id: 2, name: "maze2", src: maze2, category: "renders_mazes" },
  { id: 3, name: "maze3", src: maze3, category: "renders_mazes" },
  { id: 4, name: "maze4", src: maze4, category: "renders_mazes" },
];


export const TajParkImages = [
  { id: 1, name: "taj1", src: Taj1 ,  category: "renders_park" },
  { id: 2, name: "taj2", src: Taj2 ,  category: "renders_park" },
  { id: 3, name: "taj3", src: Taj3 ,  category: "renders_park" },
  { id: 4, name: "taj4", src: Taj4 ,  category: "renders_park" },
  { id: 5, name: "taj5", src: Taj5 ,  category: "renders_park" },
  { id: 6, name: "taj6", src: Taj6 ,  category: "renders_park" },
  { id: 7, name: "taj7", src: Taj7 ,  category: "renders_park" },
];




export const VerticalFarmingImages = [
  { id: 1, name: "farming1", src: farm1 ,category: "renders_farming"},
  { id: 2, name: "farming2", src: farm2 ,category: "renders_farming" },
  { id: 3, name: "farming3", src: farm3 ,category: "renders_farming" },
  { id: 4, name: "farming4", src: farm4 ,category: "renders_farming" },
  { id: 5, name: "farming5", src: farm5 ,category: "renders_farming" },
];



export const allrenderimages = [
  ...renders,
  ...art_gallerys,
  ...cocacolas,
  ...cosy_homes,
  ...dock_parks,
  ...halls,
  ...lockerRooms,
  ...mazes,
  ...TajParkImages,
  ...VerticalFarmingImages

]




export const animationWalkthrough = [
  {
    id: 1,
    name: "The Map",
    category: "Walkthrough",
    videoId: "vdtu-Hv9eyw"
  },
  {
    id: 2,
    name: "Portal Room",
    category: "Walkthrough",
    videoId: "n_b-QCdSPMI"
  },
  {
    id: 3,
    name: "Toon House",
    category: "Walkthrough",
    videoId: "KrvXbSQzXqY"
  },
  {
    id: 4,
    name: "Vertical Farming",
    category: "Walkthrough",
    videoId: "Zjhg7wx62tw"
  },
  {
    id: 5,
    name: "The Bridge",
    category: "Walkthrough",
    videoId: "pJIpQ-IF1uo"
  },
  {
    id: 6,
    name: "THE - TShirt",
    category: "Walkthrough",
    videoId: "3F22A8et2nQ"
  },
  {
    id: 7,
    name: "The Aura",
    category: "Walkthrough",
    videoId: "43XP-n1VlHw"
  }
];












// Export the array and individual images if needed
export {
  allImages,
  graphics_one,
  BROCHURE,
  Brutalism,
  COVER_ART,
  F_BAR,
  F_CLUB,
  F_DINER,
  F_GYM,
  F_HOUSE,
  F_MODEL,
  INSIDE,
  INSIGNIA,
  JAI_TO_MUMBAI,
  OUTSIDE,
  VOICE_OF_PUNJAB,
  arena_one,
  arena_two,
  arena_three,
  arena_four,
  arena_five,
  arena_six,
  arena_seven,
  arena_eight,
  arena_nine,
  arena_ten,
  art_gallery_01,
  art_gallery_02,
  art_gallery_03,
  art_gallery_04,
  art_gallery_05,
  art_gallery_06,
  art_gallery_07,
  art_gallery_08,
  art_gallery_09,
  art_gallery_10,
  art_gallery_11,
  art_gallery_12,
  art_gallery_13,
  art_gallery_14,
  coladeinks1,
  coladeinks2,
  coladeinks3,
  coladeinks4,
  coladeinks5,
  coladeinks6,
  coladeinks7,
  coladeinks8,
  cosy1,
  cosy2,
  cosy3,
  cosy4,
  cosy5,
  Dock1,
  Dock2,
  Dock3,
  Dock4,
  Dock5,
  Dock6,
  Dock7,
  Dock8,
  Dock9,
  Dock10,
  Dock11,
  Dock12,
  hall1,
  hall2,
  hall3,
  hall4,
  hall5,
  hall6,
  hall7,
  hall8,
  locker1,
  locker2,
  locker3,
  locker4,
   maze1,
   maze2,
   maze3,
   maze4,
   Taj1,
   Taj2,
   Taj3,
   Taj4,
   Taj5,
   Taj6,
   Taj7,
   farm1,
   farm2,
   farm3,
   farm4,
   farm5
};
