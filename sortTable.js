function sortTable(columnIndex) {
    var table = document.getElementById("songTable");
    var rowsArray = Array.from(table.rows).slice(1); // Exclude header row

    var direction = table.getAttribute('data-sort-dir') === 'asc' ? 'desc' : 'asc';
    table.setAttribute('data-sort-dir', direction);

    rowsArray.sort(function (rowA, rowB) {
        var cellA = rowA.cells[columnIndex].textContent.toLowerCase();
        var cellB = rowB.cells[columnIndex].textContent.toLowerCase();

        if (direction === 'asc') {
            return cellA < cellB ? -1 : cellA > cellB ? 1 : 0;
        } else {
            return cellA > cellB ? -1 : cellA < cellB ? 1 : 0;
        }
    });

    // Clear existing table body
    while (table.tBodies[0].firstChild) {
        table.tBodies[0].removeChild(table.tBodies[0].firstChild);
    }

    // Append sorted rows
    rowsArray.forEach(function (row) {
        table.tBodies[0].appendChild(row);
    });
}