var objResult = [];
var removed = [];
var objList = [{name:1},{name:2},{name:3},{name:4},{name:5},{name:6},{name:7}];



objList.forEach(function(item,index){
  if (item.name == 1 || item.name == 5) {
    removed.push(index);
  }else if(item.name < 5){
    objResult.push(item);
  }
});

removed.forEach(function(item,index){
  objList.splice(item-index,1);
});

objResult.forEach(function(item,index){
  if (item.name == 4) {
    item.name = 'changed name';
  }
});

console.log('objList',objList);
console.log('objResult',objResult);
