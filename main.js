

var names =[
  "Grandfather", "Grandmother", "Father","Mother","brother and me"
  
  ];
  var images=[
    "grandfather.jpg","grandmother.jpg","father.jpg","mother.jpg","brother and me.jpg"
    
  
  
  ];
  var i=0;
  function nextslide(){
    document.getElementById("family_member_name").innerHTML=names[i];
     document.getElementById("img1").src=images[i];
    i++;
    if(i>4){
      i=0;
    }
  }