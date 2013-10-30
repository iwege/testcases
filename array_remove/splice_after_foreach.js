var result = [];
var removed = [];
var list =  [1,2,3,4,5,6,7];

list.forEach(function(item,index){
  if (item == 1 || item == 5){
    removed.push(index);
  }else if(item < 5){
    result.push(item);
  }
});

removed.forEach(function(item,index){
  list.splice(item-index,1);
});

console.log('objList',objList);
console.log('objResult',objResult);
