// MOBILE MENU

function toggleMenu() {

    const navMenu = document.getElementById("navMenu");

    navMenu.classList.toggle("active");

}


// PRODUCT FILTER

function filterProducts(category) {

    const products = document.querySelectorAll(".product-card");
    const buttons = document.querySelectorAll(".filter-btn");

    buttons.forEach(button => {

        button.classList.remove("active");

        if (
            button.textContent
                .toLowerCase()
                .includes(category)
        ) {
            button.classList.add("active");
        }

    });


    products.forEach(product => {

        if (
            category === "all" ||
            product.dataset.category === category
        ) {

            product.style.display = "block";

        } else {

            product.style.display = "none";

        }

    });

}