// _id: string;
// categoryName: string;
// oldPrice: number;
// price: number;
// productDetails: string;
// productName: string;
// productQuantity: number;
// img: StaticImageData;
// totalCard?:number | undefined;

import { ProductType } from "@/interFace/interFace"
import thumbOne from "../../public/assets/img/shop/img1.jpg"
import thumbTwo from "../../public/assets/img/shop/img2.jpg"
import thumbThree from "../../public/assets/img/shop/img3.jpg"
import thumbFour from "../../public/assets/img/shop/img4.jpg"
import thumbFive from "../../public/assets/img/shop/img5.jpg"
import thumbSix from "../../public/assets/img/shop/img6.jpg"
import thumbSeven from "../../public/assets/img/shop/img7.jpg"
import thumbEight from "../../public/assets/img/shop/img8.jpg"
import thumbNine from "../../public/assets/img/shop/img9.jpg"

export const prodcutData:ProductType[] = [
    {
        _id: 1,
        categoryName: "Cloths",
        oldPrice:120 ,
        price:95 ,
        productDetails: "",
        productName:"Black Headphone" ,
        productQuantity: 120,
        img: thumbOne
    },
    {
        _id: 2,
        categoryName: "Cloths",
        oldPrice:115 ,
        price:88 ,
        productDetails: "",
        productName:"Women Smart Bag" ,
        productQuantity: 120,
        img: thumbTwo
    },
    {
        _id: 3,
        categoryName: "Cloths",
        oldPrice:100 ,
        price:78 ,
        productDetails: "",
        productName:"New Men Collection" ,
        productQuantity: 120,
        img: thumbThree
    },
    {
        _id: 4,
        categoryName: "Cloths",
        oldPrice:120 ,
        price:95 ,
        productDetails: "",
        productName:"Black Headphone" ,
        productQuantity: 120,
        img: thumbFour
    },
    {
        _id: 5,
        categoryName: "Cloths",
        oldPrice:115 ,
        price:77 ,
        productDetails: "",
        productName:"Women Smart Bag" ,
        productQuantity: 120,
        img: thumbFive
    },
    {
        _id: 6,
        categoryName: "Cloths",
        oldPrice:120 ,
        price:95 ,
        productDetails: "",
        productName:"Black Headphone" ,
        productQuantity: 120,
        img: thumbSix
    },
    {
        _id: 7,
        categoryName: "Cloths",
        oldPrice:120 ,
        price:95 ,
        productDetails: "",
        productName:"Black Headphone" ,
        productQuantity: 120,
        img: thumbSeven
    },
    {
        _id: 8,
        categoryName: "Cloths",
        oldPrice:125 ,
        price:48 ,
        productDetails: "",
        productName:"Women Smart Bag" ,
        productQuantity: 120,
        img: thumbEight
    },
    {
        _id: 9,
        categoryName: "Cloths",
        oldPrice:120 ,
        price:55 ,
        productDetails: "",
        productName:"Black Headphone" ,
        productQuantity: 120,
        img: thumbNine
    },
]