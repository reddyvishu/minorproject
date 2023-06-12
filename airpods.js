document.addEventListener("DOMContentLoaded", function() {
    const products = [
        {
            imgSrc: "ap1.webp",
            altText: "Product 1",
            name: "Apple AirPods(2nd gen) with Charging Case Bluetooth Headset with Mic  (White, True Wireless)",
            description: "With Mic:Yes Automatically on, automatically connected Easy setup for all your Apple devices  Quick access to Siri by saying �Hey Siri� Double-tap to play or skip forward",
            price: "₹9999",
            htmlFile: "ap1.html"
        },
        {
            imgSrc: "ap2.webp",
            altText: "Product 2",
            name: "APPLE Airpods Pro with MagSafe Charging Case Bluetooth Headset  (White, True Wireless)",
            description: "With Mic:Yes  Connector type: No Bluetooth version: v5.0 Active Noise Cancellation for immersive sound More than 24 hours of total listening time with the MagSafe Charging Case",
            price: "₹15,990",
            htmlFile: "ap2.html"
        },
        {
            imgSrc: "ap3.webp",
            altText: "Product 3",
            name: "APPLE AirPods Pro (2nd generation) Bluetooth Headset  (White, True Wireless)",
            description: "With Mic:Yes Connector type:  Active Noise Cancellation reduces unwanted background noise Adaptive Transparency lets outside sounds in while reducing loud environmental noise",
            price: "₹23,990",
            htmlFile: "ap3.html"
        },
        {
            imgSrc: "ap4.webp",
            altText: "Product 4",
            name: "APPLE AirPods (3rd generation) with Lightning Charging Case Bluetooth Headset  (White, True Wireless)",
            description: "With Mic:Yes Connector type: No  Spatial audio with dynamic head tracking places sound all around Adaptive EQ automatically tunes music to your ears",
            price: "₹16,990",
            htmlFile: "ap4.html"
        },
        {
            imgSrc: "ap5.webp",
            altText: "Product 5",
            name: "APPLE AirPods (3rd generation) Bluetooth Headset  (White, True Wireless)",
            description: "With Mic :Yes Bluetooth version: 5    Spatial audio with dynamic head tracking places sound all around Adaptive EQ automatically tunes music to your ears",
            price: "₹17,990",
            htmlFile: "ap5.html"
        },
        {
            imgSrc: "ap6.webp",
            altText: "Product 6",
            name: "Apple AirPods with Wireless Charging Case Bluetooth Headset with Mic  (White, True Wireless)",
            description: "With Mic:Yes Connector type: No  Automatically on, automatically connected, Seamless switching between Apple devices  Easy setup for all your Apple devices, Universal fit that's comfortable all day",
            price: "₹13,990",
            htmlFile: "ap6.html"
        },
        {
            imgSrc: "ap7.webp",
            altText: "Product 7",
            name: "APPLE Airpods Pro With Wireless Charging Case Active noise cancellation enabled Bluetooth Headset  (Pearl White, True Wireless)",
            description: "With Mic:Yes Battery life: 24 hours  Active Noise Cancellation for immersive sound Transparency mode for hearing and interacting with the world around you",
            price: "₹20,990",
            htmlFile: "ap7.html"
        },
        {
            imgSrc: "ap8.webp",
            altText: "Product 8",
            name: "APPLE New AirPods Max Bluetooth Headset  (Silver, On the Ear)",
            description: "With Mic:Yes Bluetooth version: 5 Apple-designed dynamic driver provides high-fidelity audio Active Noise Cancellation blocks outside noise, so you can immerse yourself in music",
            price: "₹44,999",
            htmlFile: "ap8.html"

        },
        {
            imgSrc: "ap9.webp",
            altText: "Product 9",
            name: "APPLE New AirPods Max Bluetooth Headset  (Pink, On the Ear)",
            description: "With Mic:Yes Bluetooth version: 5 Apple-designed dynamic driver provides high-fidelity audio Active Noise Cancellation blocks outside noise, so you can immerse yourself in music",
            price: "44,999",
            htmlFile: "ap9.html"
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

