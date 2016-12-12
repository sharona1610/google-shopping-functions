var data = require('../products.json');

/*
 * example function called getItemsCount
 * input: accepts full item data
 * output: returns the length of the items array
 */
function getItems(itemData){
  return itemData.items
}

function getItemsByBrand(items, brand){
  var items=items.items
  var myArray=[]
  for(var i in items){
    var calcBrand = items[i].product.brand;
    if(brand==calcBrand){
      myArray.push(items[i])
      //console.log(items[i]);
    }
  }
  return myArray
}

function getItemsByAuthor(items, author){
  var items=items.items
  var myArray=[]
  for(var i in items){
    var authorCalc = items[i].product.author.name;
    if(author==authorCalc){
      myArray.push(items[i])
      //console.log(items[i]);
    }
  }
  return myArray
}

function getAvailableProducts(items){
  var items=items.items
  var myArray=[]
  for(var i in items){
    var avail = items[i].product.inventories[0].availability;
    if(avail==="inStock"){
      myArray.push(items[i])
      //console.log(items[i]);
    }
  }
  return myArray
}
// output item count using the getItemsCount function

var brand = getItemsByBrand(data, "Sony")
console.log(brand);
var avail = getAvailableProducts(data)
var myArray=[]
for (var i=0;i<avail.length;i++){
  for(var j=0;j<brand.length;j++){
    if(avail[i]===brand[j]){
      myArray.push(avail[i])
    }
  }
}
console.log(myArray);

console.log(getItemsByAuthor(data, "Adorama Camera"))
var auth = getItemsByAuthor(data, "eBay")
var brand2 = getItemsByBrand(data, "Nikon")
var myArray2=[]
for (var i=0;i<auth.length;i++){
  for(var j=0;j<brand2.length;j++){
    if(auth[i]===brand2[j]){
      myArray2.push(auth[i])
    }
  }
}
console.log(myArray2);
