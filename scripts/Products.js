import { getProducts } from "./database.js"

const products = getProducts()

document.addEventListener(
    "click",
    (clickProductEvent) => {
        const productClicked = clickProductEvent.target
            
        if (productClicked.dataset.type === "product") {
                window.alert(`${productClicked.dataset.name} costs ${productClicked.dataset.price}`)
            }
        
    }
)

export const Products = () => {
    let html = "<ul>"

    for (const product of products) {
        html += `<li data-type="product" data-name="${product.name}" data-price="${product.price}">${product.name}</li>`
    }

    html += "</ul>"

    return html
}

