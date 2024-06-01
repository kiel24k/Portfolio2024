let div = document.querySelector(".rowDiv")
let fullDiv = document.querySelector("fullDiv")
let fullList = document.querySelector('.fullList')
let load = document.querySelector(".loading")
let content = document.querySelector('.content')


const burgerModal = () => {
   let navTwo = document.querySelector(".nav-two")
   let burgerAnimate = document.querySelector(".burger")
   let burger = document.querySelector(".burger img").addEventListener("click", () => {
    navTwo.classList.toggle("navShow")
    burgerAnimate.classList.toggle("burgerAnimate")  
   })
}
burgerModal()



const crypto = async () => {
    try {
        load.style.display = "none"
        const response = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd');
    const dataObj = await response.json();
    for(let data in  dataObj){
        div.innerHTML +=
        '<tr>' +
           '<td>'+dataObj[data].market_cap_rank+'</td>' +
           '<td><img width="50px" src="'+dataObj[data].image+'">'+'     '+dataObj[data].id +'</td>' +
           '<td>'+'$'+dataObj[data].current_price+'</td>' +
           '<td> <p class="text-success">'+'<b class="text-white">'+'High:'+' '+'</b>'+ dataObj[data].high_24h+'</p>'+'<br>'+'<p class="text-danger">'+ '<b class="text-white">'+'Low:'+' '+'</b>'+dataObj[data].low_24h+'</p></td>' +
        '</tr>'
        if(dataObj[data].market_cap_rank == 5){ //this is my test only
          continue
           }
        }
        
    } catch (error) {
        load.style.display = "block"
    }

    }
    
crypto()

const news = async()=>{
   try{
    const response = await fetch('https://saurav.tech/NewsAPI/top-headlines/category/health/in.json')
    const dataObj = await response.json();
   
   
    for(data in dataObj.articles){
    
        content.innerHTML += 
        `<div class="news-content">
        <div class="">
        <img src="${dataObj.articles[data].urlToImage}" width="500px" height="300px" class="img-fluid">
        </div>
        <div class="text-info">
            <b><small>${dataObj.articles[data].publishedAt}</small> | ${dataObj.articles[data].author}</b>
        </div>
        <div class="article-title">
            <h3><b>${dataObj.articles[data].title}</b></h3>
        </div>
        <div class="article-description text-start">
            <b>${dataObj.articles[data].description}</b>
        </div>
    </div>`
    }
   }catch(error){
    console.log(error);
   }
}
news()

const modal1 = () => {
    const modal1 = document.querySelector(".skills1-modal")
    let folder1 = document.querySelector(".skills-folder1").addEventListener("click", () => {
          modal1.style.display = "block"
    })
    let closeModal = document.querySelector(".skills1-modal .close-modal").addEventListener("click", () => {
        modal1.style.display = "none"
    })
}
modal1()

const modal2 = () => {
    const modal2 = document.querySelector(".skills2-modal")
    let folder2 = document.querySelector(".skills-folder2").addEventListener("click", () => {
        modal2.style.display = "block"
    })
    let closeModal = document.querySelector(".skills2-modal .close-modal").addEventListener("click", () => {
        modal2.style.display = "none"
    })
}
modal2()

const modal3 = () => {
    const modal3 = document.querySelector(".skills3-modal")
    let folder3 = document.querySelector(".skills-folder3").addEventListener("click", () => {
        modal3.style.display = "block"
    })
    let closeModal = document.querySelector(".skills3-modal .close-modal").addEventListener("click", () => {
        modal3.style.display = "none"
    })
}
modal3()

const modal4 = () => {
    const modal4 = document.querySelector(".skills4-modal")
    let folder4 = document.querySelector(".skills-folder4").addEventListener("click", () => {
        modal4.style.display = "block"
    })
    let closeModal = document.querySelector(".skills4-modal .close-modal").addEventListener("click", () => {
        modal4.style.display = "none"
    })
}
modal4()

const modal5 = () => {
    const modal5 = document.querySelector(".skills5-modal")
    let folder5 = document.querySelector(".skills-folder5").addEventListener("click", () => {
        modal5.style.display = "block"
    })
    let closeModal = document.querySelector(".skills5-modal .close-modal").addEventListener("click", () => {
        modal5.style.display = "none"
    })
}
modal5()


