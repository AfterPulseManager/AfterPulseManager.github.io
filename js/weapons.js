
    var count = 0;
  
    function reset(){
      location.replace("./weapons.html");
    }
    
    function search(){
    
      var dir_series = document.getElementById("series").value;
      var dir_rank = document.getElementById("rank").value;
      var dir_type = document.getElementById("type").value;
      
      
      var weaponsUrl = checkUrl(dir_series, dir_rank, dir_type);
        
      if(Object.keys(weaponsUrl).length == 0) {
        document.getElementById("image").style.visibility = "visible";
        document.getElementById("next").disabled = "true";
        document.getElementById("back").disabled = "true";
        document.getElementById("button").disabled = "true";
        document.getElementById("image").src = "./images/weapons/noImage"+extension;
        document.getElementById("bigImage").href = "./images/weapons/noImage"+extension;
    
      }else if(Object.keys(weaponsUrl).length == 1){
        document.getElementById("image").style.visibility = "visible";
        document.getElementById("next").disabled = "true";
        document.getElementById("back").disabled = "true";
        document.getElementById("button").disabled = "true";
        document.getElementById("image").src = weaponsUrl[0];
        document.getElementById("bigImage").href = weaponsUrl[0];
          
      }else{
        document.getElementById("image").style.visibility = "visible";
        document.getElementById("next").disabled = "";
        document.getElementById("back").disabled = "true";
        document.getElementById("button").disabled = "true";
        document.getElementById("image").src = weaponsUrl[0];
        document.getElementById("bigImage").href = weaponsUrl[0];
      }
        
      document.getElementById("series").setAttribute("disabled", true);
      document.getElementById("rank").setAttribute("disabled", true);
      document.getElementById("type").setAttribute("disabled", true);
    }
    
    function imageChanger(num) {
    
      var dir_series = document.getElementById("series").value;
      var dir_rank = document.getElementById("rank").value;
      var dir_type = document.getElementById("type").value;
  
      var weaponsUrl = checkUrl(dir_series, dir_rank, dir_type);
      
      count += num;
      
      document.getElementById("image").src = weaponsUrl[count];
      document.getElementById("bigImage").href = weaponsUrl[count];
      document.getElementById("button").disabled = "true";
      
      if(count == weaponsUrl.length - 1){
        document.getElementById("next").disabled = "true";
        document.getElementById("back").disabled = "";

      }else if(0 < count && count < weaponsUrl.length - 1){
        document.getElementById("next").disabled = "";
        document.getElementById("back").disabled = "";

      }else if(count <= 0){

        document.getElementById("next").disabled = "";
        document.getElementById("back").disabled = "true";
      }
    }
    
   function checkUrl(dir_series, dir_rank, dir_type){
       var imgObj = new Array();
       
       $.ajaxSetup({async: false});
       $.getJSON("json/weapons.json", function(weapons){
          for (i=0; i<weapons.length; i++) {
            if(dir_series == dir_rank == dir_type == "ZERO" && weapons[i].exsist == 1){
                imgObj.push(weapons[i].url);
            }else if (dir_series == dir_rank== "ZERO" && weapons[i].exsist == 1){
              if(dir_type == weapons[i].type){
                imgObj.push(weapons[i].url);
              }
            }else if(dir_series == dir_type== "ZERO" && weapons[i].exsist == 1){
              if(dir_rank == weapons[i].rank){
                imgObj.push(weapons[i].url);
              }
            }else if(dir_rank == dir_type== "ZERO" && weapons[i].exsist == 1){
              if(dir_series == weapons[i].series){
                imgObj.push(weapons[i].url);
              }
            }else if(dir_series == "ZERO" && weapons[i].exsist == 1){
              if(dir_rank == weapons[i].rank && dir_type == weapons[i].type){
                imgObj.push(weapons[i].url);
              }
            }else if(dir_rank == "ZERO" && weapons[i].exsist == 1){
              if(dir_series == weapons[i].series && dir_type == weapons[i].type){
                imgObj.push(weapons[i].url);
              }
            }else if(dir_type == "ZERO" && weapons[i].exsist == 1){
              if(dir_series == weapons[i].series && dir_rank == weapons[i].rank){
                imgObj.push(weapons[i].url);
              }
            }else{
              if(dir_series == weapons[i].series && dir_rank == weapons[i].rank && dir_type == weapons[i].type){
                imgObj.push(weapons[i].url);
              }
            }
          }
        });
        $.ajaxSetup({async: true});
        
        return imgObj;
   }
   
