var result = [];
var list =  [1,2,3,4];

list.forEach(function(item,index){
	console.log(item,index);
	if (item == 1){
		list.splice(index,1)
	}else{
    result.push(item);
  }
});

console.log('result',result);
console.log('list',list);
