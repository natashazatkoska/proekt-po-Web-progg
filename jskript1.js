
function Like(br){
  var vkupno=document.getElementById("like"+br).innerHTML;
  vkupno++;
  document.getElementById("like"+br).innerHTML=vkupno;
}

function myFunction(br) {
  var dots = document.getElementById("dots"+br);

  var moreText = document.getElementById("more"+br);
  var btnText = document.getElementById("myBtn"+br);

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}

  function OtvoriRecept(){
    var Text = document.getElementById("tags").value;
    if (Text==="Salmon and rice"){
      document.getElementById("samon").scrollIntoView();
    
    }
    
     

    

    
    

  }