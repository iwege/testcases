var http = require('http');
var fs = require('fs');
var AdmZip = require('adm-zip');

var download = function(url, dest, cb) {
  var file = fs.createWriteStream(dest);
  var request = http.get(url, function(response) {
    response.pipe(file);
    file.on('finish', function() {
      file.close();
      cb();
    });
  });
}

$("#button").click(function(){
  download($("#url").val(),'test.zip',function(){
    var zip = new AdmZip("test.zip");
    var zipEntries = zip.getEntries(); // an array of ZipEntry records
    var $ul  = "<ul>";
    zipEntries.forEach(function(item){
      $ul += "<li><input type='checkbox' name='files' value="+item.entryName+">"+item.entryName+"</li>";
    });
    $ul += "</ul>";
    $("#fileList").html($ul);
  });
});

$("button").click(function(){
  var fileList = [];
  $("input[name='files']:checked").each(function(index,item){
    fileList.push($(item).val());
  });
   var zip = new AdmZip("test.zip");
  var zipEntries = zip.getEntries(); // an array of ZipEntry records
  var newzip = new AdmZip();
  var entryList = [];
  zipEntries.forEach(function(item){
    if (fileList.indexOf(item.entryName) > -1 && !item.isDirectory) {
      entryList.push(item);
    }
  });
  entryList.forEach(function(item){
    newzip.addFile(item.name,item.getData());
  });
  newzip.writeZip("download.zip");
  window.location.href="./download.zip";
})