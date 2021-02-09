
    var count = 0;
  
    function reset(){
      location.replace("./weapons.html");
    }
    
    function search(){
    
      var dir_series = document.getElementById("series").value;
      var dir_rank = document.getElementById("rank").value;
      var dir_type = document.getElementById("type").value;
      
      
      var weaponsInfo = searchWeaponsInfo(dir_series, dir_rank, dir_type);
      
      createLink(weaponsInfo);
      

      document.getElementById("series").setAttribute("disabled", true);
      document.getElementById("rank").setAttribute("disabled", true);
      document.getElementById("type").setAttribute("disabled", true);
    }
 
   function createLink(weaponsInfo){
     var imgObj;
     var weaponsName;
   
     if (weaponsInfo.length == 4){
       imgObj = weaponsInfo[0];
       weaponsName = weaponsInfo[1];
       weaponsRank = weaponsInfo[2];
       weaponsSeries = weaponsInfo[3];
       
       var ul = document.getElementById("picturelink");
       
       var newAnchor = document.createElement("a");
       
       for (var count = 0; count < imgObj.length; count++) {
       
         var newText = weaponsSeries[count] + dirweaponsRank[count] + "_" + weaponsName[count];
         newAnchor.appendChild(newText);
         newAnchor.setAttribute("href", imgObj[count]);
         newAnchor.setAttribute("target", "_blank");
         
         var li = document.createElement('li');
         li.appendChild(newAnchor);
         ul.appendChild(li);
       }
       
     } else {
       alert("error : plese report to administrator.");
     }
   }
 
   function searchWeaponsInfo(dir_series, dir_rank, dir_type){
       var weaponsInfo = new Array();
       var imgObj = new Array();
       var weaponsName = new Array();
       var weaponsRank = new Array();
       var weaponsSeries = new Array();
       
       $.ajaxSetup({async: false});
       $.getJSON("json/weapons.json", function(weapons){
          for (i=0; i<weapons.length; i++) {
            if (dir_series == "ZERO" && dir_rank == "ZERO" && dir_type == "ZERO" && weapons[i].exsist == 1){
                imgObj.push(weapons[i].url);
                weaponsName.push(weapons[i].name);
                weaponsRank.push(weapons[i].rank);
                weaponsSeries.push(weapons[i].series);
            }else if (dir_series == "ZERO" && dir_rank== "ZERO" && weapons[i].exsist == 1){
              if (dir_type == weapons[i].type){
                imgObj.push(weapons[i].url);
                weaponsName.push(weapons[i].name);
                weaponsRank.push(weapons[i].rank);
                weaponsSeries.push(weapons[i].series);
              }
            }else if (dir_series == "ZERO" && dir_type== "ZERO" && weapons[i].exsist == 1){
              if (dir_rank == weapons[i].rank){
                imgObj.push(weapons[i].url);
                weaponsName.push(weapons[i].name);
                weaponsRank.push(weapons[i].rank);
                weaponsSeries.push(weapons[i].series);
              }
            }else if (dir_rank == "ZERO" && dir_type== "ZERO" && weapons[i].exsist == 1){
              if (dir_series == weapons[i].series){
                imgObj.push(weapons[i].url);
                weaponsName.push(weapons[i].name);
                weaponsRank.push(weapons[i].rank);
                weaponsSeries.push(weapons[i].series);
              }
            }else if (dir_series == "ZERO" && weapons[i].exsist == 1){
              if (dir_rank == weapons[i].rank && dir_type == weapons[i].type){
                imgObj.push(weapons[i].url);
                weaponsName.push(weapons[i].name);
                weaponsRank.push(weapons[i].rank);
                weaponsSeries.push(weapons[i].series);
              }
            }else if (dir_rank == "ZERO" && weapons[i].exsist == 1){
              if (dir_series == weapons[i].series && dir_type == weapons[i].type){
                imgObj.push(weapons[i].url);
                weaponsName.push(weapons[i].name);
                weaponsRank.push(weapons[i].rank);
                weaponsSeries.push(weapons[i].series);
              }
            }else if (dir_type == "ZERO" && weapons[i].exsist == 1){
              if (dir_series == weapons[i].series && dir_rank == weapons[i].rank){
                imgObj.push(weapons[i].url);
                weaponsName.push(weapons[i].name);
                weaponsRank.push(weapons[i].rank);
                weaponsSeries.push(weapons[i].series);
              }
            }else{
              if (dir_series == weapons[i].series && dir_rank == weapons[i].rank && dir_type == weapons[i].type){
                imgObj.push(weapons[i].url);
                weaponsName.push(weapons[i].name);
                weaponsRank.push(weapons[i].rank);
                weaponsSeries.push(weapons[i].series);
              }
            }
          }
        });
        $.ajaxSetup({async: true});
        
        weaponsInfo.push(imgObj);
        weaponsInfo.push(weaponsName);
        weaponsInfo.push(weaponsRank);
        weaponsInfo.push(weaponsSeries);
        
        return weaponsInfo;
   }
