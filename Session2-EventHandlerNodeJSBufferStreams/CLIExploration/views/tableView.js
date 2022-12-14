const Table = require('cli-table');
/**
 * function generateView sill generate cli table ui
 * @param {object} tableConstructor {head:[], colWidth: []}
 * @param {object} tableContent {[], []}
 * @param {string} tableTitle title
 */

const generateView = (tableConstructor, tableContent, tableTitle) => {
  const mainTable = new Table(tableConstructor);
  tableContent.forEach((item) => {
    mainTable.push(item);
  }); 
  console.log('');
  console.log(' ' + tableTitle);
  console.log(mainTable.toString());
}
module.exports = {generateView}