document.addEventListener("DOMContentLoaded", function() {
    const products = [
        {
            imgSrc: "13.png",
            altText: "Product 1",
            name: "APPLE iPhone 13 (Pink, 128 GB)",
            description: "128 GB ROM\n15.49 cm (6.1 inch) Super Retina XDR Display\n12MP + 12MP | 12MP Front Camera\nA15 Bionic Chip Processor",
            price: "₹67,999",
            htmlFile: "13.html"
        },
        {
            imgSrc: "14PRO.jpg",
            altText: "Product 2",
            name: "APPLE iPhone 14 Pro (Silver, 128 GB)",
            description: "128 GB ROM\n17.02 cm (6.7 inch) Super Retina XDR Display\n48MP + 12MP + 12MP | 12MP Front Camera\nA16 Bionic Chip Processor",
            price: "₹1,57,999",
            htmlFile: "14PRO.html"
        },
     
        {
            imgSrc: "11PRO.webp",
            altText: "PRODUCT 3",
            name: "APPLE iPhone 11 Pro (Midnight Green, 64 GB)",
            description: "64 GB ROM 14.73 cm (5.8 inch) Super Retina XDR Display 12MP + 12MP + 12MP | 12MP Front Camera A13 Bionic Chip Processor",
            price: "₹87,099",
            htmlFile: "11PRO.html"
        },

        {
            imgSrc: "13pro.webp",
            altText: "Product 4",
            name: "APPLE iPhone 13 Pro (Silver, 512 GB)",
            description: "128 GB ROM\n15.49 cm (6.1 inch) Super Retina XDR Display\n12MP + 12MP | 12MP Front Camera\nA15 Bionic Chip Processor",
            price: "1,09,999",
            htmlFile: "13pro.html"
        },
        {
            imgSrc: "12.webp",
            altText: "Product 5",
            name: "APPLE iPhone 12 (Purple, 64 GB)",
            description: "128 GB ROM\n17.02 cm (6.7 inch) Super Retina XDR Display\n48MP + 12MP + 12MP | 12MP Front Camera\nA16 Bionic Chip Processor",
            price: "₹83,999",
            htmlFile: "12.html"

        },
    
        {
            imgSrc: "11.webp",
            altText: "Product 6",
            name: "APPLE iPhone 11 (White, 64 GB)",
            description: "64 GB ROM 15.49 cm (6.1 inch) Liquid Retina HD Display 12MP + 12MP | 12MP Front Camera A13 Bionic Chip Processor",
            price: "₹46,999",
            htmlFile: "11.html"
        },
        {
            imgSrc: "12PRO.webp",
            altText: "Product 7",
            name: "APPLE iPhone 12 Pro Max (Graphite, 512 GB)",
            description: "256 GB ROM  17.02 cm (6.7 inch) Super Retina XDR Display 12MP + 12MP + 12MP | 12MP Front Camera A14 Bionic Chip Processor",
            price: "₹1,27,999",
            htmlFile: "12PRO.html"
        },
        {
            imgSrc: "14.webp",
            altText: "Product 8",
            name: "APPLE iPhone 14 (Purple, 128 GB)",
            description: "128 GB ROM 15.49 cm (6.1 inch) Super Retina XDR Display 12MP + 12MP | 12MP Front CameraA15 Bionic Processor",
            price: "₹1,39,999",
            htmlFile: "14.html"
        },
        {
            imgSrc: "12mini.webp",
            altText: "Product 9",
            name: "APPLE iPhone 12 mini (White, 64 GB)",
            description: "64 GB ROM 13.72 cm (5.4 inch) Super Retina XDR Display 12MP + 12MP | 12MP Front Camera A14 Bionic Chip Processor",
            price: "₹89,999",
            htmlFile: "12mini.html"
        },

        {
            imgSrc: "13blue.webp",
            altText: "Product 10",
            name: "APPLE iPhone 13 (Blue, 128 GB)",
            description: "128 GB ROM 15.49 cm (6.1 inch) Super Retina XDR Display 12MP + 12MP | 12MP Front Camera A15 Bionic Chip Processor",
            price: "₹1,00,999",
            htmlFile: "13blue.html"
        },
        {
            imgSrc: "14yellow.webp",
            altText: "Product 11",
            name: "APPLE iPhone 14 (Yellow, 128 GB)",
            description: "128 GB ROM15.49 cm (6.1 inch) Super Retina XDR Display12MP + 12MP | 12MP Front Camera A15 Bionic Chip Processor",
            price: "₹1,09,999",
            htmlFile: "14yellow.html"
        },
        {
            imgSrc: "13problue.webp",
            altText: "Product 12",
            name: "APPLE iPhone 13 Pro Max (Sierra Blue, 256 GB)",
            description: "256 GB ROm 17.02 cm (6.7 inch) Super Retina XDR Displa12MP + 12MP + 12MP | 12MP Front Camera A15 Bionic Chip Processor",
            price: "₹1,29,999",
            htmlFile: "13problue.html"
        },
        
        
        // Add more product objects as needed
    ];

    const productContainer = document.getElementById("productContainer");

    products.forEach(function(product) {
        const productDiv = document.createElement("div");
        productDiv.classList.add("product");

        const productImageLink = document.createElement("a");
        productImageLink.href = product.htmlFile;

        const productImage = document.createElement("img");
        productImage.src = product.imgSrc;
        productImage.alt = product.altText;

        const productName = document.createElement("h2");
        productName.textContent = product.name;

        const productDescription = document.createElement("p");
        productDescription.textContent = product.description;

        const productPrice = document.createElement("div");
        productPrice.classList.add("price");
        productPrice.textContent = product.price;

        const wishlistButton = document.createElement("button");
        wishlistButton.classList.add("wishlist-btn");
        wishlistButton.innerHTML = '<i class="far fa-heart"></i>';
        wishlistButton.addEventListener("click", function() {
            wishlistButton.classList.toggle("active");
            const heartIcon = wishlistButton.querySelector("i");
            if (wishlistButton.classList.contains("active")) {
                heartIcon.classList.replace("far", "fas");
            } else {
                heartIcon.classList.replace("fas", "far");
            }
        });

        productImageLink.appendChild(productImage);
        productDiv.appendChild(productImageLink);
        productDiv.appendChild(productName);
        productDiv.appendChild(productDescription);
        productDiv.appendChild(productPrice);
        productDiv.appendChild(wishlistButton);

        productContainer.appendChild(productDiv);
    });
});

