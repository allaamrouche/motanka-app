import img1 from "../../pic/sunflowers.jpg";
import img2 from "../../pic/sunflowers2.jpg"
import img3 from "../../pic/sunflowers3.jpg"
import img4 from "../../pic/sunflowers.jpg"


const photos = [
    img1,
    img2,
    img3,
   img4
];
const imageData = [photos, photos,photos,photos ]
const points =[
    [11, 2, 12, 2],
    [18, 6, 7, 1],
    [29, 5, 12, 3],
    [16, 10, 13, 3],
    [30, 14, 5, 2]
]

export { imageData, points }