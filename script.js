$(window).on('load', function() {
    $('.preloader').delay(7000).slideUp('slow');
    /*$('.preloader .avc').delay().slideUp('slow');*/
    $('.preloader>.left').delay(2500).slideUp('slow');
    $('.preloader>.right').delay(2500).slideUp('slow');
});
//pre Loader Js Ends 
/*
setTimeout(function(){

    var test=
    document.getElementById("all");
    console.log(test.style.visibility="visible");
    
  },5000);

  /*setTimeout(function(){

    var all=
    document.getElementById("all");
    console.log(all.style.top="0.1px");

    
  },5000);*/


  setTimeout(function(){
  
  document.getElementById("all").classList.remove("all_visible");
},7500);


/*partis bienvenue  */
setTimeout(function(){
$(function(){
  $(".write").typed({
      strings: ["Cr&eacute;ons de belles choses ensemble !"],
      typeSpeed: 2,
      showCursor:false,
  });
});
},7500);


/*
  setTimeout(function(){

    var img=
    document.getElementById("image");
    console.log(img.style.visibility="hidden");
    
  },5000);*/
