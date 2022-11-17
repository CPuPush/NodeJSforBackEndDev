function convertItems(items) {
  let result = [];    
  
  for (let i = 0; i < items.length; i++){
      let item = items[i].split("|");
      result.push(item);
  }
  return result; // TODO: replace this
}

function filterItems(items) {
  const item = convertItems(items);
  let result = [];
  for(let i= 0; i < item.length;i++){
    if(item[i].length < 3){
      continue;
    }
    let container = [];
      let toNumber = parseInt(item[i][1]);
      container.push(item[i][0], toNumber, item[i][2])
    result.push(container);
  }
  return result; // TODO: replace this
}

// function generateSpareParts(items) {
//     return []; // TODO: replace this
// }

// function itemsStatistics(items) {
//     return {}; // TODO: replace this
// }

function generateItemsData(items) {
  return convertItems(items); // TODO: repce this
}

const items = [
  "Spakbor Gordon|150000|variation",
  "Head Lamp",
  "USD KX150|8500000|bodyParts",
  "Handle Expedition|275000|variation",
  "Karet Body",
  "Body set KTM|1899950|bodyParts",
  "Jok Gordon|250000|variation",
  "Behel Bodyset Gordon",
  "CDI BRT KLX|625000|electricity",
  "Cover jok KLX|185000|variation",
]

// console.log(generateItemsData(items));
console.log(filterItems(items));


module.exports = {
  convertItems,
  filterItems,
  // generateSpareParts,
  // itemsStatistics,
  // generateItemsData
}