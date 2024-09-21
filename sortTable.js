function sortTable(columnIndex) {
    var table = document.getElementById("songTable");
    var rows = table.rows;
    var switching = true;
    var shouldSwitch;
    var direction = "asc"; // Set the sorting direction to ascending
    var switchCount = 0;

    alert(columnIndex);
    while (switching) {
        switching = false;
        var rowsArray = Array.from(rows).slice(1); // Exclude the header row
        for (var i = 0; i < rowsArray.length - 1; i++) {
            shouldSwitch = false;
            var x = rowsArray[i].getElementsByTagName("TD")[columnIndex];
            var y = rowsArray[i + 1].getElementsByTagName("TD")[columnIndex];
            // Compare the two rows
            if (direction == "asc") {
                if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                    shouldSwitch = true;
                    break;
                }
            } else if (direction == "desc") {
                if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
                    shouldSwitch = true;
                    break;
                }
            }
        }
        if (shouldSwitch) {
            rowsArray[i].parentNode.insertBefore(rowsArray[i + 1], rowsArray[i]);
            switching = true;
            switchCount++;
        } else {
            if (switchCount == 0 && direction == "asc") {
                direction = "desc";
                switching = true;
            }
        }
    }
}