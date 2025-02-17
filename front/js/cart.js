/**
 * fetch recuperer tous les produits
 * recuperer le panier dans le localstorage
 * filtrer parmit tous produits, ceux qui existent dans le panier
 * faire une boucle sur les produits filtres
 * pour chaque produit filtre,
 *      creer le DOM du produit
 *      inserer le produit dans la page
 * 
 * inserer le prix total
 *      calculer le total du panier
 *      inserere ce total dans id: totalQuantity
 * 
 * ecouter les evernements sur les produits
 * faire un eventListner (onclick) sur la classe deleteItem L67
 *      trouver la balise article qui contient deleteItem(querySelector)
 *      suprimer la balise
 *      trouver le produit dans le localStorage
 *      suprimer le produit dans le localstorage
 * 
 * faire un eventLister sur la class itemQuantity (onchange)
 *      trouver le produit dont on modifie la quantite
 *          Trouver la balise article qui itemquantity
 *          recuperer les dataAttributes de la balise article
 *          grace aux data-id et data-color, retrouver le produit dans le panier du localStorage
 *      modifier la quantité dans le panier du localStorage
 *      mettre à jour le prix total
 */

fetch('http://localhost:3000/api/products')
.then(response => response.json())
.then(function(products){
    
    const basket = JSON.parse(localStorage.getItem("basket"));

    console.log(basket)

    basket.forEach(function(item) {
        
        const foundProduct = products.find(function(product) {
            return product.id == item.id && product.color == item.color;
        });
    });
    
});







