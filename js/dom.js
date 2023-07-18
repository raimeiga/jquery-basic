$(function() {
     // id属性がshowの要素がクリックされたら要素を表示
   $('#show').on('click', function(){
    $('ul').show();
  });

  // id属性がhideの要素がクリックされたら要素を非表示
  $('#hide').on('click', function(){
    $('ul').hide();
  });
  });