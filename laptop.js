let laptopCard = document.getElementById("laptopCard")

let arrCard = [
    {
        title: "Macbook Pro 2022",
        description: "Apple M2 chip 8-core CPU with 4 performance cores and 4 efficiency cores",
        image: "/image/laptop 1.png",
        link: "/macbook.html"
    },
    {
        title: "Macbook Pro 2022",
        description: "Apple M2 chip 8-core CPU with 4 performance cores and 4 efficiency cores",
        image: "/image/laptop 2.jpg",
        link: "/macbook.html"
    },
    {
        title: "Macbook Pro 2022",
        description: "Apple M2 chip 8-core CPU with 4 performance cores and 4 efficiency cores",
        image: "/image/laptop 1.png",
        link: "/macbook.html"
    },
    {
        title: "Macbook Pro 2022",
        description: "Apple M2 chip 8-core CPU with 4 performance cores and 4 efficiency cores",
        image: "/image/laptop 2.jpg",
        link: "/macbook.html"
    },
    {
        title: "Macbook Pro 2022",
        description: "Apple M2 chip 8-core CPU with 4 performance cores and 4 efficiency cores",
        image: "/image/laptop 1.png",
        link: "/macbook.html"
    },
    {
        title: "Macbook Pro 2022",
        description: "Apple M2 chip 8-core CPU with 4 performance cores and 4 efficiency cores",
        image: "/image/laptop 2.jpg",
        link: "/macbook.html"
    }
]

arrCard.map((card)=>{
    laptopCard.innerHTML += `
        <div class="col-md-3">
            <div class="card" style="width: 18rem;">
                <img src="${card.image}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${card.title}</h5>
                    <p class="card-text">${card.description}</p>
                    <a href="${card.link}" class="btn btn-primary">Buy Now</a>
                </div>
            </div>
        </div> 
`
})