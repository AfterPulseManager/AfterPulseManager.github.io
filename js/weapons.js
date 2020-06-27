
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
      
      if(dir_type == "ZERO" || dir_rank == "ZERO"){
        alert("武器種類及びランクを選択してください。");
      }else{
      
        var seriesArray = checkSeries(dir_series, dir_type);
        seriesArray =  checkRank(seriesArray, dir_series, dir_rank);
        
        if(Object.keys(seriesArray).length == 0) {
          document.getElementById("image").style.visibility = "visible";
          document.getElementById("next").disabled = "true";
          document.getElementById("back").disabled = "true";button
          document.getElementById("button").disabled = "true";
          document.getElementById("image").src = "./images/weapons/noImage"+extension;
          document.getElementById("bigImage").href = "./images/weapons/noImage"+extension;
    
        }else if(Object.keys(seriesArray).length == 1){
          document.getElementById("image").style.visibility = "visible";
          document.getElementById("next").disabled = "true";
          document.getElementById("back").disabled = "true";
          document.getElementById("button").disabled = "true";
          document.getElementById("image").src = dir_base+seriesArray[0]+dir_rank+extension;
          document.getElementById("bigImage").href = dir_base+seriesArray[0]+dir_rank+extension;
          
        }else{
          document.getElementById("image").style.visibility = "visible";
          document.getElementById("next").disabled = "";
          document.getElementById("back").disabled = "true";
          document.getElementById("button").disabled = "true";
          document.getElementById("image").src = dir_base+seriesArray[0]+dir_rank+extension;
          document.getElementById("bigImage").href = dir_base+seriesArray[0]+dir_rank+extension;
        }
        
        document.getElementById("series").setAttribute("disabled", true);
        document.getElementById("rank").setAttribute("disabled", true);
        document.getElementById("type").setAttribute("disabled", true);
      }
    }
    
    function imageChanger(num) {
    
      var dir_series = document.getElementById("series").value;
      var dir_rank = document.getElementById("rank").value;
      var dir_type = document.getElementById("type").value;
      
      var dir_base = "./images/weapons/"+dir_type+"/"+dir_series+"/";
      
      var extension = ".jpg";
      
      var seriesArray = checkSeries(dir_series, dir_type);
      
      count += num;
      
      document.getElementById("image").src = dir_base+seriesArray[count]+dir_rank+extension;
      document.getElementById("bigImage").href = dir_base+seriesArray[count]+dir_rank+extension;
      document.getElementById("button").disabled = "true";
      
      if(count == seriesArray.length - 1){
        document.getElementById("next").disabled = "true";
        document.getElementById("back").disabled = "";

      }else if(0 < count && count < seriesArray.length - 1){
        document.getElementById("next").disabled = "";
        document.getElementById("back").disabled = "";

      }else if(count <= 0){

        document.getElementById("next").disabled = "";
        document.getElementById("back").disabled = "true";
      }
    }
    
   function checkSeries(dir_series, dir_type){
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
   
    function checkRank(seriesArray, dir_series, dir_rank){
        var imgObj = new Array();

        $.ajaxSetup({async: false});
        $.getJSON("json/rank.json", function(series){
          for(i=0; i < seriesArray.length; i++){
            for (var seriesName in series) {
              if (seriesName == dir_series){
                for (var rankVal in series[seriesName]){
                  if(rankVal == seriesArray[i]) {
                      imgObj.push(seriesArray[i]);
                  }
                }
              }
            }
          }
        });
        $.ajaxSetup({async: true});
        
        return imgObj;
   }
