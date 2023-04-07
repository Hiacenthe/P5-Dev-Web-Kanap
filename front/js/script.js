// Récupération de tous les produits à afficher
fetch('http://localhost:3000/api/products')
.then(response => response.json())
.then(function (products) {

    products.forEach(function(product){
        showProduct(product)
    })
})
.catch(function(error) {
    // je gère les erreurs s'il y en a (par exemple: afficher à l'utilisateur un message, relancer la request etc)
    alert('Une erreur est survenue, veuillez réessayer plus tard.');
});

function showProduct(product) {

    const anchorElement = document.createElement('a');
    anchorElement.setAttribute("href", `./product.html?id=${product._id}`);
    const articleElement = document.createElement('article');
    const imageElement = document.createElement('img');
    imageElement.src = product.imageUrl;
    imageElement.alt = product.altTxt;
    const nomElement = document.createElement('h3');
    nomElement.innerText = product.name;
    const descriptionElement = document.createElement('p');
    descriptionElement.innerText = product.description;

    const sectionItems = document.getElementById("items");
    sectionItems.appendChild(anchorElement);
    anchorElement.appendChild(articleElement);
    articleElement.appendChild(imageElement);
    articleElement.appendChild(nomElement);
    articleElement.appendChild(descriptionElement);
}







