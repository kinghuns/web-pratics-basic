const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const imageFiles = ['pic1.jpg','pic2.jpg','pic3.jpg','pic4.jpg','pic5.jpg'];

/* Declaring the alternative text for each image file */
const alts = {
    'pic1.jpg': 'Closeup of a human eye',
    'pic2.jpg': 'Rock that look like a wave',
    'pic3.jpg': 'Purple and white pansies',
    'pic4.jpg': 'Section of wall from pharoah\'s tomb',
    'pic5.jpg': 'Large moth on a leaf'
}
/* Looping through images */
for (const image in imageFiles){
    const newImage = document.createElement('img');
    newImage.setAttribute('src', `images/${image}`);
    newImage.setAttribute('alt', alts[image]);
    thumbBar.appendChild(newImage);
//    增加事件监听器，将预览图的图片放到正文显示
    newImage.addEventListener('click', e=>{
       displayedImage.src = e.target.src;
       displayedImage.alt = e.target.alt;
    });

    // for (const image of images) {
    //     const newImage = document.createElement('img');
    //     newImage.setAttribute('src', `images/${image}`);
    //     newImage.setAttribute('alt', alts[image]);
    //     thumbBar.appendChild(newImage);
    //     newImage.addEventListener('click', e => {
    //         displayedImage.src = e.target.src;
    //         displayedImage.alt = e.target.alt;
    //     });
}



/* Wiring up the Darken/Lighten button */