const currentUrl = window.location.href;
const url = new URL(currentUrl);
const id = url.searchParams.get("id");

fetch(`http://localhost:3000/api/products/${id}`)
.then(response => response.json())
.then(prod => generateProducts(prod))

.catch(function(error) {
    // je gère les erreurs s'il y en a (par exemple: afficher à l'utilisateur un message, relancer la request etc)
    console.log('Une erreur est survenue, veuillez réessayer plus tard.');
});

function generateProducts(kanap){
    const colors = kanap.colors
    const name = kanap.name
    const price = kanap.price
    const imageUrl = kanap.imageUrl
    const description = kanap.description
    const altTxt = kanap.altTxt
    makeImage(imageUrl, altTxt)
    makeTitle(name)
    makePrice(price)
    makeDescription(description)
    makeColors(colors)
}

function makeImage(imageUrl, altTxt){
    const image = document.createElement("img");
    image.src = imageUrl;
    image.alt = altTxt;
    const divItem_img = document.querySelector(".item__img");
    divItem_img.appendChild(image)
}

function makeTitle(name){
    document.getElementById("title").innerText = name;
}
function makePrice(price){
    document.getElementById("price").innerText = price;
}

function makeDescription(description){
    document.getElementById("description").innerText = description;
}

function makeColors(colors){
    const select = document.getElementById("colors");
    colors.forEach((color) => {
        const option = document.createElement("option");
        option.value = color;
        option.innerText = color;
        select.appendChild(option);
    });
}

const addToCart = document.getElementById("addToCart");
addToCart.onclick = () => {
    const color = document.getElementById("colors").value;
    const quantity = document.getElementById("quantity").value;
    const item = {
        id: id,
        color: color,
        quantity: quantity
    }

    let basket = [];

    if(localStorage.getItem("basket") !== null && Array.isArray(localStorage.getItem("basket"))) {
        basket = JSON.parse(localStorage.getItem("basket"));
    }

    basket.push(item);

    localStorage.setItem(id, JSON.stringify(basket));
}

