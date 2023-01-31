// Add an event listener to the "like" buttons. When clicked, toggle the "liked" class for the button, changing its styling.
const buttons = document.querySelectorAll('.likeBtn');

buttons.forEach(btn => {
  btn.addEventListener("click", function() {
    this.classList.toggle("liked")
  })
})

// function save for later
function save() {
  // Assign the quote text for which the "save for later" button was pressed to quoteText variable
  const quoteText = event.target.parentElement.querySelector("q").textContent;

  // Get the saved items from the session storage
  let savedItems = JSON.parse(sessionStorage.getItem("savedItems")) || [];

  // Add the quote to the array of saved items
  savedItems.push(quoteText);

  // Save the updated array of saved items in the session storage
  sessionStorage.setItem("savedItems", JSON.stringify(savedItems));

  // Alert the user how many items were saved
  alert(`There are ${savedItems.length} items in your “Save for later” folder`);
}

// Check if there is data in sessionStorage
if (sessionStorage.getItem("savedItems")) {
  // Get saved items from sessionStorage
  var savedItems = JSON.parse(sessionStorage.getItem("savedItems"));
  
  // Select div with id "savedList"
  var savedListDiv = document.querySelector("#savedList");
  
  for (var i = 0; i < savedItems.length; i++) {
    // Create new list item for each quote
    var newListItem = document.createElement("li");
    newListItem.innerText = savedItems[i];
    
    // Append new list item to div
    savedListDiv.appendChild(newListItem);
  }
}

