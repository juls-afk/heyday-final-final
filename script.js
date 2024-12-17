const form = document.querySelector("form");

let namePattern = /^[A-Z][a-zA-Z]*(?:\s[A-Z][a-zA-Z]*)*$/;
let subjPattern = /^[A-Za-z0-9]+(?:\s[A-Za-z0-9]+)*$/;
let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
let msgPattern = /^(?!\s*$)[a-zA-Z0-9][a-zA-Z0-9\s.,?!'"]{0,999}$/;

const response = document.getElementById("text-response");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let Name = namePattern.test(form.name.value);
  let Subj = subjPattern.test(form.subject.value);
  let Email = emailPattern.test(form.email.value);
  let Msgs = msgPattern.test(form.msg.value);

  if (Name && Subj && Email && Msgs) {
    response.setAttribute("class", "success");
    response.innerHTML = "Message sent successfully";
  } else {
    response.setAttribute("class", "error");
    response.innerHTML = "Kindly recheck your inputs.";
  }
});

const name = document.getElementById("name");
const subject = document.getElementById("subject");
const email = document.getElementById("email");
const msg = document.getElementById("msg");

name.addEventListener("keyup", (event) => {
  let Name = namePattern.test(event.target.value);

  if (Name) {
    event.target.classList.add("accepted");
    event.target.classList.remove("rejected");
  } else {
    event.target.classList.add("rejected");
    event.target.classList.remove("accepted");
  }

  console.log(event.target.value);
});

subject.addEventListener("keyup", (event) => {
  let Subj = subjPattern.test(event.target.value);

  if (Subj) {
    event.target.classList.add("accepted");
    event.target.classList.remove("rejected");
  } else {
    event.target.classList.add("rejected");
    event.target.classList.remove("accepted");
  }

  console.log(event.target.value);
});

email.addEventListener("keyup", (event) => {
  let Email = emailPattern.test(event.target.value);

  if (Email) {
    event.target.classList.add("accepted");
    event.target.classList.remove("rejected");
  } else {
    event.target.classList.add("rejected");
    event.target.classList.remove("accepted");
  }

  console.log(event.target.value);
});

msg.addEventListener("keyup", (event) => {
  let Msg = msgPattern.test(event.target.value);

  if (Msg) {
    event.target.classList.add("accepted");
    event.target.classList.remove("rejected");
  } else {
    event.target.classList.add("rejected");
    event.target.classList.remove("accepted");
  }

  console.log(event.target.value);
});

//Hamburger Icon
const navbarToggle = document.getElementById("navbar-toggle");
const navLinks = document.querySelector(".nav-links");
const body = document.querySelector("body");

navbarToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

body.addEventListener("click", (event) => {
  if (
    !navLinks.contains(event.target) &&
    !navbarToggle.contains(event.target)
  ) {
    navLinks.classList.remove("active");
  }
});

// Menu Section
// Function to show the selected section and hide others
function showSection(sectionId) {
  document.querySelectorAll(".menu-section").forEach((section) => {
    section.style.display = "none";
  });

  const selectedSection = document.getElementById(sectionId);
  if (selectedSection) {
    selectedSection.style.display = "block";
  }
}

// Array to store selected items
let checkoutItems = [];

// Function to update the Check Out section with selected items
function updateCheckout() {
  const itemList = document.getElementById("item-list");
  const noItemsMessage = document.getElementById("no-items");

  // Clear the previous list
  itemList.innerHTML = "";

  if (checkoutItems.length === 0) {
    noItemsMessage.style.display = "block";
  } else {
    noItemsMessage.style.display = "none";

    // Create and append list items dynamically
    checkoutItems.forEach((item, index) => {
      const listItem = document.createElement("li");
      listItem.className =
        "list-group-item d-flex justify-content-between align-items-center";
      listItem.innerHTML = `
        ${item}
        <button class="btn btn-sm btn-danger" onclick="removeItem(${index})">Remove</button>
      `;
      itemList.appendChild(listItem);
    });
  }
}

// Function to add an item to the checkout
function addToCheckout(itemName) {
  // Retrieve the item price from the modal (assuming each product has a price)
  const itemPrice = document.getElementById("modalCalories").textContent; // Replace this with the actual price source if needed

  // Create a new list item
  const itemList = document.getElementById("item-list");
  const item = document.createElement("li");
  item.classList.add("list-group-item");
  item.textContent = `${itemName} - ${itemPrice}`; // Display item name and price

  // Append the item to the list
  itemList.appendChild(item);

  // Update "no items" message
  const noItemsMessage = document.getElementById("no-items");
  if (noItemsMessage) {
    noItemsMessage.style.display = "none";
  }
}

// Function to clear all items from the checkout
document
  .getElementById("clear-checkout")
  .addEventListener("click", function () {
    const itemList = document.getElementById("item-list");
    itemList.innerHTML = ""; // Clear all items
    document.getElementById("no-items").style.display = "block"; // Show "no items" message
  });

// Initialize the Check Out section on page load
updateCheckout();

function showProductModal(name, description, calories, imagePath) {
  document
    .getElementById("clear-checkout")
    .addEventListener("click", function () {
      // Display the "Order Submitted" message
      const orderStatus = document.getElementById("order-status");
      orderStatus.style.display = "block";
    });
  document.getElementById("productModalLabel").innerText = name;
  document.getElementById("modalDescription").innerText = description;
  document.getElementById("modalCalories").innerText = calories;
  document.getElementById("modalProductImage").src = imagePath;
  var modal = new bootstrap.Modal(document.getElementById("productModal"));
  modal.show();
}

// Initially show only the Signature Drinks section
document.addEventListener("DOMContentLoaded", () => {
  showSection("Signature-Drinks");
});
