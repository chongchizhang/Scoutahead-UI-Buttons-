//===========================================
// Thx Valentin's Pen for reference
// http://codepen.io/asstor_/pen/MYMZZK
//http://tympanus.net/Tutorials/CircularProgressButton/

$(function() {
  $("#confirmed").click(function() {
    $("#confirmed").addClass("onclic", 250, validate);
  });

  function validate() {
    setTimeout(function() {
      $("#confirmed").removeClass("onclic");
      $("#confirmed").addClass("validate", 450, callback);
    }, 2250);
  }

  function callback() {
    setTimeout(function() {
      $("#confirmed").removeClass("validate");
    }, 2450);
  }
});

//Thx Mason Fox's Pen for reference
//http://codepen.io/masonfox/pen/OymYMa?editors=1010

$('.view-all').click(function(){
  $('.education-content').slideToggle('fast');
  $('.reply').toggle();
  $('.text').text(function(i, v){
               return v == ' View All 5 Connections' ? ' View Less' : ' View All 5 Connections'
  });
});