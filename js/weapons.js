  
    var count = 0;
  
    function reset(){
      location.replace("./weapons.html");
    }
    
    function search(){
    
      var dir_series = document.getElementById("series").value;
      var dir_rank = document.getElementById("rank").value;
      var dir_type = document.getElementById("type").value;
      var dir_base = "./images/weapons/"+dir_type+"/"+dir_series+"/";
      var extension = ".jpg";
      
      if(dir_type == "ZERO"){
        alert("武器種類を選択してください。");
      }else{
      
        var imgFile = checkFile(dir_series, dir_type);
        
        if(Object.keys(imgFile).length == 0) {
          document.getElementById("image").style.visibility = "visible";
          document.getElementById("next").disabled = "true";
          document.getElementById("back").disabled = "true";
          document.getElementById("image").src = "./images/weapons/noImage/"+extension;
          document.getElementById("bigImage").href = "./images/weapons/noImage/"+extension;
    
        }else if(Object.keys(imgFile).length == 1){
          document.getElementById("image").style.visibility = "visible";
          document.getElementById("next").disabled = "true";
          document.getElementById("back").disabled = "true";
          document.getElementById("image").src = dir_base+imgFile[0]+dir_rank+extension;
          document.getElementById("bigImage").href = dir_base+imgFile[0]+dir_rank+extension;
          
        }else{
          document.getElementById("image").style.visibility = "visible";
          document.getElementById("next").disabled = "";
          document.getElementById("back").disabled = "true";
          document.getElementById("image").src = dir_base+imgFile[0]+dir_rank+extension;
          document.getElementById("bigImage").href = dir_base+imgFile[0]+dir_rank+extension;
        }
        
        document.getElementById("series").setAttribute("disabled", true);
        document.getElementById("type").setAttribute("disabled", true);
      }
    }
    
    function imageChanger(num) {
    
      var dir_series = document.getElementById("series").value;
      var dir_rank = document.getElementById("rank").value;
      var dir_type = document.getElementById("type").value;
      
      var dir_base = "./images/weapons/"+dir_type+"/"+dir_series+"/";
      
      var extension = ".jpg";
      
      var imgFile = checkFile(dir_series, dir_type);
      
      count += num;
      
      document.getElementById("image").src = dir_base+imgFile[count]+dir_rank+extension;
      document.getElementById("bigImage").href = dir_base+imgFile[count]+dir_rank+extension;
      
      if(count == imgFile.length - 1){
        document.getElementById("next").disabled = "true";
        document.getElementById("back").disabled = "";

      }else if(0 < count && count < imgFile.length - 1){
        document.getElementById("next").disabled = "";
        document.getElementById("back").disabled = "";

      }else if(count <= 0){

        document.getElementById("next").disabled = "";
        document.getElementById("back").disabled = "true";
      }
    }
    
   function checkFile(dir_series, dir_type){
       var imgObj = new Array();
       
       $.ajaxSetup({async: false});
       $.getJSON("json/weapons.json", function(weapons){
          for (var type in weapons) {
            if (type ==  dir_type){
              for (var series in weapons[type]){
                if (series == dir_series){
                  for (i=0; i < weapons[type][series].name.length; i++){
                    imgObj.push(weapons[type][series].name[i]);
                  }
                }                  
              }              
            }
          }
        });
        $.ajaxSetup({async: true});
        
        return imgObj;
   }
    