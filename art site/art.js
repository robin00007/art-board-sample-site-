var x=3;
        document.getElementById("image1").style.display="none";
        document.getElementById("image2").style.display="none";
        document.getElementById("image3").style.display="none";
        document.getElementById("image4").style.display="none";
        document.getElementById("image5").style.display="none";
document.getElementById("upper-button").addEventListener("click",function(){
     
switch (x) {
    
    
   

    case 1:
        document.getElementById("image1").style.display="inline-block";
        document.getElementById("image2").style.display="none";
        document.getElementById("image3").style.display="none";
        document.getElementById("image4").style.display="none";
        document.getElementById("image5").style.display="none";
        x=x+1;
        break;
    
    case 2:
        document.getElementById("image2").style.display="inline-block";
        document.getElementById("image1").style.display="none";
        document.getElementById("image3").style.display="none";
        document.getElementById("image4").style.display="none";
        document.getElementById("image5").style.display="none";
        x=x+1;
        break;

    case 3: 
        document.getElementById("image3").style.display="inline-block";
        document.getElementById("image1").style.display="none";
        document.getElementById("image2").style.display="none";
        document.getElementById("image4").style.display="none";
        document.getElementById("image5").style.display="none";
        x=x+1;
        break;

    case 4: 
        document.getElementById("image4").style.display="inline-block";
        document.getElementById("image1").style.display="none";
        document.getElementById("image2").style.display="none";
        document.getElementById("image3").style.display="none";
        document.getElementById("image5").style.display="none";
        x=x+1;
        break;

    case 5: 
        document.getElementById("image5").style.display="inline-block";
        document.getElementById("image1").style.display="none";
        document.getElementById("image2").style.display="none";
        document.getElementById("image3").style.display="none";
        document.getElementById("image4").style.display="none";
        x=1;
        break;
}
})





document.getElementById("lower-button").addEventListener("click",function(){
     x=x-1;
     if(x==0){x=1;}
switch (x) {
    case 1:
        document.getElementById("image1").style.display="inline-block";
        document.getElementById("image2").style.display="none";
        document.getElementById("image3").style.display="none";
        document.getElementById("image4").style.display="none";
        document.getElementById("image5").style.display="none";
        x=5;
        break;
    
    case 2:
        document.getElementById("image2").style.display="inline-block";
        document.getElementById("image1").style.display="none";
        document.getElementById("image3").style.display="none";
        document.getElementById("image4").style.display="none";
        document.getElementById("image5").style.display="none";
        x=x-1;
        break;

    case 3: 
        document.getElementById("image3").style.display="inline-block";
        document.getElementById("image1").style.display="none";
        document.getElementById("image2").style.display="none";
        document.getElementById("image4").style.display="none";
        document.getElementById("image5").style.display="none";
        x=x-1;
        break;

    case 4: 
        document.getElementById("image4").style.display="inline-block";
        document.getElementById("image1").style.display="none";
        document.getElementById("image2").style.display="none";
        document.getElementById("image3").style.display="none";
        document.getElementById("image5").style.display="none";
        x=x-1;
        break;

    case 5: 
        document.getElementById("image5").style.display="inline-block";
        document.getElementById("image1").style.display="none";
        document.getElementById("image2").style.display="none";
        document.getElementById("image3").style.display="none";
        document.getElementById("image4").style.display="none";
        x=x-1;
        break;
}
})


// ##################################################################################################
var y=1;
        document.getElementById("picture1").style.display="none";
        document.getElementById("picture2").style.display="none";
        document.getElementById("picture3").style.display="none";
        document.getElementById("picture4").style.display="none";
        document.getElementById("picture5").style.display="none";
document.getElementById("upper-button2").addEventListener("click",function(){
     switch (y) {
    
    
   

    case 1:
        document.getElementById("picture1").style.display="inline-block";
        document.getElementById("picture2").style.display="none";
        document.getElementById("picture3").style.display="none";
        document.getElementById("picture4").style.display="none";
        document.getElementById("picture5").style.display="none";
        y=y+1;
        break;
    
    case 2:
        document.getElementById("picture2").style.display="inline-block";
        document.getElementById("picture1").style.display="none";
        document.getElementById("picture3").style.display="none";
        document.getElementById("picture4").style.display="none";
        document.getElementById("picture5").style.display="none";
        y=y+1;
        break;

    case 3: 
        document.getElementById("picture3").style.display="inline-block";
        document.getElementById("picture1").style.display="none";
        document.getElementById("picture2").style.display="none";
        document.getElementById("picture4").style.display="none";
        document.getElementById("picture5").style.display="none";

        y=y+1;
        break;

    case 4: 
        document.getElementById("picture4").style.display="inline-block";
        document.getElementById("picture1").style.display="none";
        document.getElementById("picture2").style.display="none";
        document.getElementById("picture3").style.display="none";
        document.getElementById("picture5").style.display="none";
        y=y+1;
        break;

    case 5: 
        document.getElementById("picture5").style.display="inline-block";
        document.getElementById("picture1").style.display="none";
        document.getElementById("picture2").style.display="none";
        document.getElementById("picture3").style.display="none";
        document.getElementById("picture4").style.display="none";
        y=1;
        break;}
})
 
document.getElementById("lower-button2").addEventListener("click",function(){
     y=y-1;
     if(y==0){y=1;}
switch (y) {
    case 1:
        document.getElementById("picture1").style.display="inline-block";
        document.getElementById("picture2").style.display="none";
        document.getElementById("picture3").style.display="none";
        document.getElementById("picture4").style.display="none";
        document.getElementById("picture5").style.display="none";
        y=5;
        break;
    
    case 2:
        document.getElementById("picture2").style.display="inline-block";
        document.getElementById("picture1").style.display="none";
        document.getElementById("picture3").style.display="none";
        document.getElementById("picture4").style.display="none";
        document.getElementById("picture5").style.display="none";
        y=y-1;
        break;

    case 3: 
        document.getElementById("picture3").style.display="inline-block";
        document.getElementById("picture1").style.display="none";
        document.getElementById("picture2").style.display="none";
        document.getElementById("picture4").style.display="none";
        document.getElementById("picture5").style.display="none";
        y=y-1;
        
        break;

    case 4: 
        document.getElementById("picture4").style.display="inline-block";
        document.getElementById("picture1").style.display="none";
        document.getElementById("picture2").style.display="none";
        document.getElementById("picture3").style.display="none";
        document.getElementById("picture5").style.display="none";
        y=y-1;
        break;

    case 5: 
        document.getElementById("picture5").style.display="inline-block";
        document.getElementById("picture1").style.display="none";
        document.getElementById("picture2").style.display="none";
        document.getElementById("picture3").style.display="none";
        document.getElementById("picture4").style.display="none";
        y=y-1;
        break;
}
})

document.getElementById("check").addEventListener("click",function(){
    if(x===y){
        document.getElementById("check").innerText="Right";
        document.getElementById("check").style.backgroundColor="green";

    }
    else{document.getElementById("check").innerText="Wrong";
    document.getElementById("check").style.backgroundColor="red";
}
    setInterval(function(){document.getElementById("check").innerText="Match";document.getElementById("check").style.backgroundColor="rgb(29, 15, 153) ";},3000)
})

 

// #################################drawing hover effects###########################################################
// #################################drawing hover effects###########################################################
// #################################drawing hover effects###########################################################
// #################################drawing hover effects###########################################################
// #################################drawing hover effects###########################################################
// #################################drawing hover effects###########################################################
// #################################drawing hover effects###########################################################
// #################################drawing hover effects###########################################################

document.getElementById("d_card8").addEventListener("mouseover", function() {
    document.getElementById("v_card").style.display='inline-block';
      var elem = document.createElement("img");
      elem.src='./images/Art_work/logo edited.png';
      elem.setAttribute("alt", "Flower");
      elem.setAttribute("height", "100%");
      elem.setAttribute("id", "img8");
      document.getElementById("v_card").appendChild(elem);
      
 
});
document.getElementById("d_card8").addEventListener("mouseout", function() {
    document.getElementById("v_card").style.display='none';
     document.getElementById("img8").remove();
  });
 

document.getElementById("d_card7").addEventListener("mouseover", function() {
    document.getElementById("v_card").style.display='inline-block';
    var elem = document.createElement("img");
    elem.src='./images/Art_work/loved_it.jpeg';
    elem.setAttribute("alt", "Flower");
    elem.setAttribute("id", "img7");
    // elem.style.paddingTop="0px";
    document.getElementById("v_card").appendChild(elem);
  });
document.getElementById("d_card7").addEventListener("mouseout", function() {
    document.getElementById("v_card").style.display='none';
    document.getElementById("img7").remove();
  });

document.getElementById("d_card6").addEventListener("mouseover", function() {
    document.getElementById("v_card").style.display='inline-block';
    var elem = document.createElement("img");
    elem.src='./images/Art_work/anshul.jpeg';
    elem.setAttribute("alt", "Flower");
    elem.setAttribute("id", "img6");
    document.getElementById("v_card").appendChild(elem);
  });
document.getElementById("d_card6").addEventListener("mouseout", function() {
    document.getElementById("v_card").style.display='none';
    document.getElementById("img6").remove();
  });

document.getElementById("d_card5").addEventListener("mouseover", function() {
    document.getElementById("v_card").style.display='inline-block';
    var elem = document.createElement("img");
    elem.src='./images/Art_work/first_portrait.jpeg';
    elem.setAttribute("alt", "Flower");
    elem.setAttribute("id", "img5");
    document.getElementById("v_card").appendChild(elem);
    
  });
document.getElementById("d_card5").addEventListener("mouseout", function() {
    document.getElementById("v_card").style.display='none';
    document.getElementById("img5").remove();
  });

document.getElementById("d_card4").addEventListener("mouseover", function() {
    document.getElementById("v_card").style.display='inline-block';
    var elem = document.createElement("img");
    elem.src='./images/Art_work/logo 5.png';
    elem.setAttribute("alt", "Flower");
    elem.setAttribute("id", "img4");
    document.getElementById("v_card").appendChild(elem)
  });
document.getElementById("d_card4").addEventListener("mouseout", function() {
    document.getElementById("v_card").style.display='none';
    document.getElementById("img4").remove();
  });

document.getElementById("d_card3").addEventListener("mouseover", function() {
    document.getElementById("v_card").style.display='inline-block';
    var elem = document.createElement("img");
    elem.src='./images/Art_work/portrait_ai.jpeg';
    elem.setAttribute("alt", "Flower");
    elem.setAttribute("id", "img3");
    document.getElementById("v_card").appendChild(elem)
  });
document.getElementById("d_card3").addEventListener("mouseout", function() {
    document.getElementById("v_card").style.display='none';
    document.getElementById("img3").remove();
  });

document.getElementById("d_card2").addEventListener("mouseover", function() {
    document.getElementById("v_card").style.display='inline-block';
    var elem = document.createElement("img");
    elem.src='./images/Art_work/profile_photo_logo.png';
    elem.setAttribute("alt", "Flower");
    elem.setAttribute("id", "img2");
    document.getElementById("v_card").appendChild(elem)
  });
document.getElementById("d_card2").addEventListener("mouseout", function() {
    document.getElementById("v_card").style.display='none';
    document.getElementById("img2").remove();
  });
 
document.getElementById("d_card1").addEventListener("mouseover", function() {
    document.getElementById("v_card").style.display='inline-block';
    var elem = document.createElement("img");
    elem.src='./images/Art_work/COMP a LOGO.png';
    elem.setAttribute("alt", "Flower");
    elem.setAttribute("id", "img1");
    document.getElementById("v_card").appendChild(elem)
  });
document.getElementById("d_card1").addEventListener("mouseout", function() {
    document.getElementById("v_card").style.display='none';
    document.getElementById("img1").remove();
  });



//   ##############################################################################################
//   ##############################################################################################
//   ##############################################################################################
//   ##############################################################################################
 setInterval(function(){document.getElementById("theme_dis2").style.display="inline-block"},7000);