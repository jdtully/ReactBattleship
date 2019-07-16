function buildGrid(grid1) {
  let numCols = 10;
  let numRows = 10;
  //get the body
  var tableContainer = document.getElementById(grid1);
  //create table
  var table = document.createElement("table");
  //create a table body
  var tblB = document.createElement("tbody");
  //append table body to the table
  table.appendChild(tblB);
  //nested loops  to create columns and  rows
  for (var i = 0; i < numRows; i++) {
    //create rows
    var tr = document.createElement("tr");
    //append rows  to body
    tblB.appendChild(tr);
    //loop for cols
    for (var j = 0; j < numCols; j++) {
      // create cols
      var td = document.createElement("td");

      // put  test text in cells
      let cellid = i + ":" + j;
      td.innerText = cellid;
      td.id = grid1 + ":" + cellid;
      //add cols to rows
      tr.appendChild(td);
    }
  }
  //append the table to the body
  tableContainer.appendChild(table);
}
export default buildGrid;
