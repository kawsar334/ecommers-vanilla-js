





const products = [
    {
        id:1,
        tittle:"AIR force",
        price:1122,
        colors:[
         {
                code: "black",
                img: "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
         },
         {
             code: "darkblue",
             img: "https://images.pexels.com/photos/2385477/pexels-photo-2385477.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
         }

        ]
    },
    {
        id: 2,
        tittle: "AIR jordan",
        price: 219,
        colors: [
            {
                code: "lightgray",
                img: "https://images.pexels.com/photos/2529147/pexels-photo-2529147.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            },
            {
                code: "green",
                img: "https://images.pexels.com/photos/1478442/pexels-photo-1478442.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            }

        ]
    },
    {
        id: 3,
        tittle: "AIR force",
        price: 319,
        colors: [
            {
                code: "black",
                img: "https://images.pexels.com/photos/1027130/pexels-photo-1027130.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            },
            {
                code: "darkblue",
                img: "https://images.pexels.com/photos/1027130/pexels-photo-1027130.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            }

        ]
    },
    {
        id: 4,
        tittle: "AIR force",
        price: 419,
        colors: [
            {
                code: "black",
                img: "https://images.pexels.com/photos/2749941/pexels-photo-2749941.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            },
            {
                code: "gray",
                img: "https://images.pexels.com/photos/3261068/pexels-photo-3261068.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            }

        ]
    },
    {
        id: 5,
        tittle: "AIR force",
        price: 519,
        colors: [
            {
                code: "black",
                img: "https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            },
            {
                code: "darkblue",
                img: "https://images.pexels.com/photos/1027130/pexels-photo-1027130.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            }

        ]
    },
   
]

const sliderwrapper = document.querySelector(".sliderwrapper")
console.log(sliderwrapper)
const menu_item = document.querySelectorAll(".menu_item");

let chooseProduct = products[0]
let currentProductImfg = document.querySelector(".productimg");
let producttitle = document.querySelector(".producttitle");
let product_price = document.querySelector(".product_price");
let colors = document.querySelectorAll(".color");

let currentSize = document.querySelectorAll(".size");

console.log(currentProductImfg)
    menu_item.forEach((item, index) => {
        item.addEventListener("click", () => {
            // change the current slide 

            menu_item.forEach((i)=>{
                i.style.backgroundColor = ''
            })
            sliderwrapper.style.transform = `translateX(${-100 * index}vw)`;
            item.style.backgroundColor = "teal";

            // change the choosen product 
            chooseProduct = products[index]
            
           

            // change texts of current product 
            producttitle.innerHTML = chooseProduct.tittle
            product_price.innerHTML = chooseProduct.price;

            currentProductImfg.src = chooseProduct.colors[0].img;

      
            // aisgn color
            colors.forEach((colorr,index)=>{
                colorr.style.backgroundColor= chooseProduct.colors[index].code
            })



        

            
            


        })
    })



colors.forEach((color,index)=>{
    color.addEventListener("click",()=>{
        currentProductImfg.src= chooseProduct.colors[index].img
    })
})
currentSize.forEach((size,index)=>{


    size.addEventListener("click",()=>{
        currentSize.forEach((size)=>{
            size.style.backgroundColor = "white";
            size.style.color = "black";
        })
        size.style.backgroundColor = "black" ;
        size.style.color = "white";


    })
})

const payment = document.querySelector(".payment") ;
const product_btn = document.querySelector(".product_btn");
const close = document.querySelector(".close");


product_btn.addEventListener("click",()=>{
    payment.style.display= "flex"
})
close.addEventListener("click",()=>{
    payment.style.display= "none"
})







