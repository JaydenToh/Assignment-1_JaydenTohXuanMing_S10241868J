document.addEventListener("DOMContentLoaded", function () {
  // Add event listener to the "Favourite" button
  let addButton = document.getElementById("press");
  addButton.addEventListener("click", function () {
    // Get the data from the current book display
    let bookImageElement = document.getElementById("book-image").querySelector("img");
    let BookTitleElement = document.getElementById("BookTitle");

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