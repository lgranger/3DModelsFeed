export type ProjectData = {
  id: string;
  authorName: string;
  projectName: string;
  images: any[];
  likes: number;
  comments: number;
  description: string;
};

const mockData: ProjectData[] = [
  {
    id: '1',
    authorName: '3dprintbunny',
    projectName: 'String Dreamcatcher',
    images: [require('./resources/dreamcatcher/dc1.jpg'), require('./resources/dreamcatcher/dc2.jpg'), require('./resources/dreamcatcher/dc3.png')],
    likes: 125,
    comments: 4,
    description: 'A Dreamcatcher using single extrusions of filament as strings to create the web.\nPrint at 0.2mm layer height.\nIn Bambu Studio set \'wall generator\' to Arachne'
  },
  {
    id: '2',
    authorName: 'DaveMakesStuff',
    projectName: 'Coiled Rope Mug',
    images: [require('./resources/mug/m1.jpg'), require('./resources/mug/m2.jpg'), require('./resources/mug/m3.png')],
    likes: 25,
    comments: 0,
    description: 'This coiled rope mug is made with a single loop of “rope” that coils up and then loops back to the beginning to form the handle.'
  },
  {
    id: '3',
    authorName: 'cnlson',
    projectName: 'Dragon Box Remix #4',
    images: [require('./resources/dragon/db1.jpg'), require('./resources/dragon/db2.jpg'), require('./resources/dragon/db3.png')],
    comments: 12,
    likes: 54,
    description: 'This is a remix of the classic Dragon Box.\nOk, I had support issues with all of the dragon box lids so i added supports in meshmixer. There was also a hole in v3 dragonbox bottom. And there were no hinge pins for the hinges.\nSo\nTop</b></u> - added nice thick 5mm supports for the chin and both wings. They will break off with a satisfying snap and they will print even at 200mm infill speeds. They will not tip over.\n<b><u>Bottom</b></u> - added supports to all the added weapons and the dragon heads. also filled in and sort of smoothed out the hole in the short side by the mace.\nprints flawlessly\n<b><u>Hinge pins</b></u> - pins should push in from the outside. they will be flush and should keep the top and bottom connected. They are also removable just use a pen or probe to pop them out.\nPrinted in PLA. So they should be ok for pet-g but i\'m not sure how they would react to attempting in ABS.'
  },
];

export default mockData;
