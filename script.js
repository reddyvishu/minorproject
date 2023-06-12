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
            imgSrc: "ip2.webp",
            altText: "Product 2",
            name: "APPLE iPad (10th Gen) 64 GB ROM 10.9 inch with Wi-Fi Only (Silver)",
            description: "64 GB ROM 27.69 cm (10.9 inch) Full HD Display 12 MP Primary Camera | 12 MP Front iPadOS 16 | Battery: Lithium Polymer Processor: A14 Bionic Chip (64-bit Architecture) with Neural Engine",
            price: "₹40,990",
            htmlFile: "ip2.html"
        },
        {
            imgSrc: "mb1.webp",
            altText: "Product 1",
            name: "APPLE 2020 Macbook Air M1 - (8 GB/256 GB SSD/Mac OS Big Sur) MGN63HN/A  (13.3 inch, Space Grey, 1.29 kg)  ",
            description: " Stylish & Portable Thin and Light Laptop 13.3 inch Quad LED Backlit IPS Display (227 PPI, 400 nits Brightness, Wide Colour (P3), True Tone Technology) Light Laptop without Optical Disk Drive",
            price: "₹77,990",
            htmlFile: "mb1.html"
        },
        {
            imgSrc: "mb2.webp",
            altText: "Product 2",
            name: "APPLE 2020 Macbook Air M1 - (8 GB/512 GB SSD/Mac OS Big Sur) MGNE3HN/A  (13.3 inch, Gold, 1.29 kg)",
            description: "  Stylish & Portable Thin and Light Laptop  13.3 inch Quad LED Backlit IPS Display (227 PPI, 400 nits Brightness, Wide Colour (P3), True Tone Technology) Light Laptop without Optical Disk Drive",
            price: "₹1,09,990",
            htmlFile: "mb2.html"
        },

        {
            imgSrc: "ap1.webp",
            altText: "Product 1",
            name: "Apple AirPods(2nd gen) with Charging Case Bluetooth Headset with Mic  (White, True Wireless)",
            description: "With Mic:Yes Automatically on, automatically connected Easy setup for all your Apple devices Quick access to Siri by saying �Hey Siri� Double-tap to play or skip forward",
            price: "₹9999",
            htmlFile: "ap1.html"
        },
        {
            imgSrc: "ap2.webp",
            altText: "Product 2",
            name: "APPLE Airpods Pro with MagSafe Charging Case Bluetooth Headset  (White, True Wireless)",
            description: "With Mic:Yes Connector type: No  Bluetooth version: v5.0  Active Noise Cancellation for immersive sound More than 24 hours of total listening time with the MagSafe Charging Case",
            price: "₹15,990",
            htmlFile: "ap2.html"
        },

        {
            imgSrc: "mb5.webp",
            altText: "Product 5",
            name: "APPLE 2022 MacBook Pro M2 - (8 GB/512 GB SSD/Mac OS Monterey) MNEJ3HN/A  (13.3 Inch, Space Grey, 1.38 Kg)",
            description: "Thin and Light Laptop 13.3 Inch Retina display, LED-backlit display with IPS technology, 500 nits brightness, Wide colour (P3), True Tone technology",
            price: "₹1,37,990",
            htmlFile: "mb5.html"
        },

        {
            imgSrc: "13problue.webp",
            altText: "Product 12",
            name: "APPLE iPhone 13 Pro Max (Sierra Blue, 256 GB)",
            description: "256 GB ROM 17.02 cm (6.7 inch) Super Retina XDR Display12MP + 12MP + 12MP | 12MP Front Camera A15 Bionic Chip Processor",
            price: "₹1,29,999",
            htmlFile: "13problue.html"
        },

        {
            imgSrc: "ap5.webp",
            altText: "Product 5",
            name: "APPLE AirPods (3rd generation) Bluetooth Headset  (White, True Wireless)",
            description: "With Mic :Yes Bluetooth version: 5 Spatial audio with dynamic head tracking places sound all around you Adaptive EQ automatically tunes music to your ears",
            price: "₹17,990",
            htmlFile: "ap5.html"
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

