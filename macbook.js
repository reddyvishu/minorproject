document.addEventListener("DOMContentLoaded", function() {
    const products = [
        {
            imgSrc: "mb1.webp",
            altText: "Product 1",
            name: "APPLE 2020 Macbook Air M1 - (8 GB/256 GB SSD/Mac OS Big Sur) MGN63HN/A  (13.3 inch, Space Grey, 1.29 kg) ",
            description: " Stylish & Portable Thin and Light Laptop 13.3 inch Quad LED Backlit IPS Display (227 PPI, 400 nits Brightness, Wide Colour (P3), True Tone Technology) Light Laptop without Optical Disk Drive",
            price: "₹77,990",
            htmlFile: "mb1.html"
        },
        {
            imgSrc: "mb2.webp",
            altText: "Product 2",
            name: "APPLE 2020 Macbook Air M1 - (8 GB/512 GB SSD/Mac OS Big Sur) MGNE3HN/A  (13.3 inch, Gold, 1.29 kg)",
            description: " Stylish & Portable Thin and Light Laptop 13.3 inch Quad LED Backlit IPS Display (227 PPI, 400 nits Brightness, Wide Colour (P3), True Tone Technology) Light Laptop without Optical Disk Drive",
            price: "₹1,09,990",
            htmlFile: "mb2.html"
        },
        {
            imgSrc: "mb3.webp",
            altText: "Product 3",
            name: "APPLE 2023 MacBook Pro M2 Max - (32 GB/1 TB SSD/macOS Ventura) MNWE3HN/A  (16 Inch, Silver, 2.16 Kg)",
            description: " Light Laptop without Optical Disk Drive 16 Inch Liquid Retina XDR display, 10,00,000:1 contrast ratio, XDR brightness: 1,000 nits sustained full screen, 1,600 nits peak2 (HDR content only),SDR brightness: 500 nits",
            price: "₹3,22,490",
            htmlFile: "mb3.html"
        },
        {
            imgSrc: "mb4.webp",
            altText: "Product 4",
            name: "APPLE 2022 MacBook AIR M2 - (8 GB/256 GB SSD/Mac OS Monterey) MLY33HN/A  (13.6 Inch, Midnight, 1.24 Kg)",
            description: " Stylish & Portable Thin and Light Laptop 13.6 Inch Liquid Retina Display, LED-backlit display with IPS technology, 500 nits brightness, Wide colour (P3), True Tone technology Light Laptop without Optical Disk Drive",
            price: "₹1,09,490",
            htmlFile: "mb4.html"
        },
        {
            imgSrc: "mb5.webp",
            altText: "Product 5",
            name: "APPLE 2022 MacBook Pro M2 - (8 GB/512 GB SSD/Mac OS Monterey) MNEJ3HN/A  (13.3 Inch, Space Grey, 1.38 Kg)",
            description: "Thin and Light Laptop  13.3 Inch Retina display, LED-backlit display with IPS technology, 500 nits brightness, Wide colour (P3), True Tone technology",
            price: "₹1,37,990",
            htmlFile: "mb5.html"
        },
        {
            imgSrc: "mb6.webp",
            altText: "Product 6",
            name: "APPLE 2022 MacBook AIR M2 - (8 GB/256 GB SSD/Mac OS Monterey) MLXW3HN/A  (13.6 Inch, Space Grey, 1.24 Kg)",
            description: "64 GB ROM\n14.73 cm (5.8 inch) Super Retina XDR Display\n12MP + 12MP + 12MP | 12MP Front Camera\nA13 Bionic Chip Processor",
            price: "₹1,09,990",
            htmlFile: "mb6.html"

        },
        {
            imgSrc: "mb7.webp",
            altText: "Product 7",
            name: "APPLE MacBook Air M1 - (16 GB/256 GB SSD/Mac OS Big Sur) Z124J001KD  (13.3 inch, Space Grey, 1.29 Kg)",
            description: "APPLE MacBook Air M1 - (16 GB/256 GB SSD/Mac OS Big Sur) Z124J001KD  (13.3 inch, Space Grey, 1.29 Kg)",
            price: "₹99,999",
            htmlFile: "mb7.html"
        },
        {
            imgSrc: "mb8.webp",
            altText: "Product 8",
            name: "APPLE 2022 MacBook AIR M2 - (8 GB/256 GB SSD/Mac OS Monterey) MLY13HN/A  (13.6 Inch, Starlight, 1.24 kg)",
            description: "Stylish & Portable Thin and Light Laptop 13.6 Inch Liquid Retina Display, LED-backlit display with IPS technology, 500 nits brightness, Wide colour (P3), True Tone technology Light Laptop without Optical Disk Drive",
            price: "₹1,10,490",
            htmlFile: "mb8.html"
        },
        {
            imgSrc: "mb9.webp",
            altText: "Product 9",
            name: "APPLE 2021 Macbook Pro M1 Pro - (16 GB/1 TB SSD/Mac OS Monterey) MK1F3HN/A  (16.2 inch, Silver, 2.1 kg)",
            description: "Light Laptop without Optical Disk Drive 16.2 inch Liquid Retina XDR display, Native resolution at 254 pixels per inch, Up to 1,000 nits sustained (full-screen) brightness, 1,600 nits peak brightness, 10,00,000:1 contrast ratio",
            price: "₹2,39,990",
            htmlFile: "mb9.html"
        },
        
        {
            imgSrc: "mb10.webp",
            altText: "Product 10",      
            name: "APPLE 2021 Macbook Pro M1 Pro - (16 GB/1 TB SSD/Mac OS Monterey) MK1F3HN/A  (16.2 inch, Silver, 2.1 kg)",        
            description:"Light Laptop without Optical Disk Drive 16.2 inch Liquid Retina XDR display, Native resolution at 254 pixels per inch, Up to 1,000 nits sustained (full-screen) brightness, 1,600 nits peak brightness, 10,00,000:1 contrast ratio ",
            price: "₹2,43,999",
            htmlFile: "mb10.html"
        },
        {
            imgSrc: "mb11.webp",
            altText: "Product 11",
            name: "APPLE 2022 MacBook Pro M2 - (8 GB/512 GB SSD/Mac OS Monterey) MNEJ3HN/A  (13.3 Inch, Space Grey, 1.38 Kg)",
            description: "Thin and Light Laptop 13.3 Inch Retina display, LED-backlit display with IPS technology, 500 nits brightness, Wide colour (P3), True Tone technology",
            price: "₹1,37,990",
            htmlFile: "mb11.html"

        },
        {
            imgSrc: "mb12.webp",
            altText: "Product 12",
            name: "APPLE 2023 MacBook Pro M2 Pro - (16 GB/1 TB SSD/macOS Ventura) MPHJ3HN/A  (14 Inch, Silver, 1.60 Kg)",
            description: "Stylish & Portable Thin and Light Laptop 14 Inch Liquid Retina XDR display, 10,00,000:1 contrast ratio, XDR brightness: 1,000 nits sustained full screen, 1,600 nits peak2 (HDR content only),SDR brightness: 500 nits",
            price: "₹2,39,990",
            htmlFile: "mb12.html"
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
