// Get the boxes, total, free shipping, and add to cart elements
const boxes = document.querySelectorAll(".box");
const totalElement = document.getElementById("total");
const freeShippingElement = document.getElementById("free-shipping");
const addToCartButton = document.getElementById("add-to-cart");

// Initial total (just a placeholder for now, can be adjusted based on selections)
let total = 199.99; // You can set this to your base total

// Handle box click to toggle options
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        const options = box.querySelector(".options");

        // Close all other boxes
        boxes.forEach((otherBox) => {
            if (otherBox !== box) {
                otherBox.classList.remove("expanded");
                otherBox.querySelector(".options").classList.add("hidden");
            }
        });

        // Toggle the current box
        box.classList.toggle("expanded");
        options.classList.toggle("hidden");
    });

    // Stop event propagation for dropdowns inside the box
    const dropdowns = box.querySelectorAll("select");
    dropdowns.forEach((dropdown) => {
        dropdown.addEventListener("click", (event) => {
            event.stopPropagation();
        });
    });
});

// Example function to update the total (can be based on selections, quantity, etc.)
function updateTotal(newTotal) {
    total = newTotal; // Update the total value
    totalElement.textContent = `Total: $${total.toFixed(2)}`; // Display the total with the text "Total:"
}

// Example event listener for when a selection changes (you can add more logic here)
document.querySelectorAll("select").forEach((select) => {
    select.addEventListener("change", () => {
        // You can update the total based on user selections
        let updatedTotal = 199.99; // Set the base price

        // For example, update the price based on the selection
        if (select.selectedIndex > 0) {
            updatedTotal += 10; // Add extra cost based on selection (just an example)
        }

        updateTotal(updatedTotal);
    });
});

// You can also add event listeners for the Add to Cart button (e.g., alert the total when clicked)
addToCartButton.addEventListener("click", () => {
    alert(`You added items to your cart!`);
});
