document.addEventListener("DOMContentLoaded", function () {
  // Add event listeners to all buttons with the class "custom-button-add"
  let addButtonElements = document.querySelectorAll(".custom-button-add");

  addButtonElements.forEach(function (addButton) {
    addButton.addEventListener("click", function () {
      // Get the data from the current book display
      let bookContainer = addButton.closest(".book_display");
      let bookImageElement = bookContainer.querySelector(".book-image img");
      let BookTitleElement = bookContainer.querySelector(".book-info h3");

      // Get the table body
      let tableBody = document.getElementById("student-table-body");

      // Create a new row
      let newRow = tableBody.insertRow();

      // Insert cells with book data
      let imageCell = newRow.insertCell(0);
      imageCell.innerHTML = `<img src="${bookImageElement.src}" alt="Book Image" width="50px" height="50px">`;

      let titleCell = newRow.insertCell(1);
      titleCell.textContent = BookTitleElement.textContent;
    });
  });
});
