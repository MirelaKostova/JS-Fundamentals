function fromJSONToHTMLTable(json) {
  const parsed = JSON.parse(json);

  let result = "<table>\n";

  let colNames = Object.keys(parsed[0]);
  result += `   <tr>${colNames
    .map((key) => "<th>" + escapeHtml(key) + "</th>")
    .join("")}</tr>\n`;

  for (let data of parsed) {
    result += `   <tr>${Object.values(data)
      .map((value) => "<td>" + escapeHtml(value) + "</td>")
      .join("")}</tr>\n`;
  }

  result += "</table>";

  console.log(result);

  function escapeHtml(value) {
    return value
      .toString()
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }
}

fromJSONToHTMLTable(`[{"Name":"Stamat",

"Score":5.5},

{"Name":"Rumen",

"Score":6}]`);

/* <table> 
    <tr><th>Name</th><th>Score</th></tr> 
    <tr><td>Stamat</td><td>5.5</td></tr> 
    <tr><td>Rumen</td><td>6</td></tr> 
</table> */
console.log("-------------");
fromJSONToHTMLTable(`[{"Name":"Pesho",

"Score>":4,

"Grade":8},

{"Name":"Gosho",

"Score":5,

"Grade":8},

{"Name":"Angel",

"Score":5.50,

"Grade":10}]`);

/* <table> 
    <tr><th>Name</th><th>Score</th><th>Grade</th></tr> 
    <tr><td>Pesho</td><td>4</td><td>8</td></tr> 
    <tr><td>Gosho</td><td>5</td><td>8</td></tr> 
    <tr><td>Angel</td><td>5.5</td><td>10</td></tr> 
</table> 
*/
