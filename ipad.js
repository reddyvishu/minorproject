document.addEventListener("DOMContentLoaded", function() {
    const products = [
        {
            imgSrc: "ip1.webp",
            altText: "Product 1",
            name: "APPLE iPad (9th Gen) 64 GB ROM 10.2 inch with Wi-Fi Only (Space Grey)",
            description: "64 GB ROM 25.91 cm (10.2 inch) Display 8 MP Primary Camera | 12 MP Front iOS 15 | Battery: Lithium Polymer Processor: A13 Bionic Chip with 64-bit Architecture",
            price: "₹28,990",
            htmlFile: "ip1.html"
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
            imgSrc: "ip3.webp",
            altText: "Product 3",
            name: "APPLE iPad Pro (4th Gen) 128 GB ROM 11.0 inch with Wi-Fi Only (Space Grey)",
            description: "128 GB ROM 27.94 cm (11.0 inch) Full HD Display 12 MP Primary Camera | 12 MP Front iPadOS 16 | Battery: Lithium Polymer Processor: Apple M2 chip",
            price: "₹78,990",
            htmlFile: "ip3.html"
        },
        {
            imgSrc: "ip4.webp",
            altText: "Product 4",
            name: "APPLE iPad (10th Gen) 256 GB ROM 10.9 inch with Wi-Fi Only (Blue)",
            description: "256 GB ROM 27.69 cm (10.9 inch) Full HD Display 12 MP Primary Camera | 12 MP Front iPadOS 16 | Battery: Lithium Polymer Processor: A14 Bionic Chip (64-bit Architecture) with Neural Engine",
            price: "₹57,256",
            htmlFile: "ip4.html"
        },
        {
            imgSrc: "ip5.webp",
            altText: "Product 5",
            name: "APPLE iPad Pro (4th Gen) 128 GB ROM 11.0 inch with Wi-Fi+5G (Space Grey)",
            description: "128 GB ROM 27.94 cm (11.0 inch) Full HD Display  12 MP Primary Camera | 12 MP Front iPadOS 16 | Battery: Lithium Polymer Processor: Apple M2 chip",
            price: "₹90,090",
            htmlFile: "ip5.html"
        },
        {
            imgSrc: "ip6.webp",
            altText: "Product 6",
            name: "APPLE iPad Air (5th gen) 256 GB ROM 10.9 Inch with Wi-Fi+5G (Blue)",
            description: "256 GB ROM 27.69 cm (10.9 Inch) Display 12 MP Primary Camera | 12 MP Front iPadOS 15 | Battery: Lithium Polymer Voice Call (Single Sim) Processor: Apple M1 chip",
            price: "₹81,676",
            htmlFile: "ip6.html"
        },
        {
            imgSrc: "ip7.webp",
            altText: "Product 7",
            name: "APPLE iPad Pro (4th Gen) 128 GB ROM 11.0 inch with Wi-Fi Only (Silver)",
            description: "128 GB ROM 27.94 cm (11.0 inch) Full HD Display 12 MP Primary Camera | 12 MP Front iPadOS 16 | Battery: Lithium Polymer Processor: Apple M2 chi",
            price: "₹78,690",
            htmlFile: "ip7.html"
        },
        {
            imgSrc: "ip8.webp",
            altText: "Product 8",
            name: "APPLE iPad mini (6th Gen) 64 GB ROM 8.3 inch with Wi-Fi Only (Purple)",
            description:"64 GB ROM 21.08 cm (8.3 inch) Display 12 MP Primary Camera | 12 MP Front iOS 15 | Battery: Lithium Polymer Processor: A15 Bionic Chip with 64-bit Architecture",
            price: "₹44,490",
            htmlFile: "ip8.html"
        },
        {
            imgSrc: "ip9.webp",
            altText: "Product 9",
            name: "APPLE iPad Air (5th gen) 256 GB ROM 10.9 Inch with Wi-Fi Only (Space Grey)",
            description: "256 GB ROM 27.69 cm (10.9 Inch) Display  12 MP Primary Camera | 12 MP Front  iPadOS 15 | Battery: Lithium Polymer  Processor: Apple M1 Chip",
            price: "₹66,990",
            htmlFile: "ip9.html"
        },
        
        {
            imgSrc: "ip10.webp",
            altText: "Product 10",
            name: "APPLE iPad (10th Gen) 256 GB ROM 10.9 inch with Wi-Fi Only (Pink)",
            description: " 256 GB ROM 27.69 cm (10.9 inch) Full HD Display 12 MP Primary Camera | 12 MP Front iPadOS 16 | Battery: Lithium Polymer Processor: A14 Bionic Chip (64-bit Architecture) with Neural Engine",
            price: "₹57,900",
            htmlFile: "ip10.html"
        },
        {
            imgSrc: "ip11.webp",
            altText: "Product 11",
            name: "APPLE iPad Pro (6th Gen) 256 GB ROM 12.9 inch with Wi-Fi+5G (Space Grey)",
            description:"256 GB ROM 32.77 cm (12.9 inch) Quad HD Display 12 MP Primary Camera | 12 MP Front iPadOS 16 | Battery: Lithium Polymer Processor: Apple M2 chip",
            price: "₹1,33,690",
            htmlFile: "ip11.html"
        },
        {
            imgSrc: "ip12.webp",
            altText: "Product 12",
            name: "APPLE iPad Pro 2021 (3rd Generation) 16 GB RAM 2 TB ROM 11 inches with Wi-Fi Only (Space Grey)",
            description: "Apple M1 chip for next-level performance Stunning 11-inch Liquid Retina display with ProMotion, True Tone, and P3 wide color TrueDepth camera system featuring Ultra Wide front camera with Center Stage 12MP Wide camera, 10MP Ultra Wide camera, and LiDAR Scanner for immersive AR 5G for superfast downloads and high-quality streaming",
            price: "₹1,60,990",
            htmlFile: "ip12.html"
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
