var rows = Number(process.argv[2]);
var cols = Number(process.argv[3]);
var fill = process.argv[4];


function createTable(row, col, content){
  var resultHtml = "<table>";

  for(let i=0; i<row; i++){
    resultHtml+="\n  <tr>  ";

    for(let j=0; j<col; j++){
      resultHtml+="\n    <td>"+content+"</td>  ";
    }

    resultHtml+="\n  </tr>  ";
  }
  resultHtml +="\n</table>";
  return resultHtml;
}

console.log(createTable(rows, cols, fill));