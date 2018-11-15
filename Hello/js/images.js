var backgroundImage = new Array(); 
backgroundImage[0] = "js/images/download_1.jpg";
backgroundImage[1] = "js/images/wallpaper-image.jpeg";
backgroundImage[2] = "js/images/images.jpg";
backgroundImage[3] = "js/images/nature-tree-green-pine.jpg";
backgroundImage[4] = "js/images/relaxation-water-waves-55813.jpg";
backgroundImage[5] = "js/images/green-wallpaper-8.jpg";
backgroundImage[6] = "js/images/amazing-animal-beautiful-beautifull.jpg";

setInterval(function () { displayImages(); }, 5000);
      
var x = 0;
function displayImages() {
    document.getElementById("ad").src = backgroundImage[x];
     
    if (x<6) {
        x+=1;
    }
        else {
        x=0;
    }
  }
      
     
     
  

