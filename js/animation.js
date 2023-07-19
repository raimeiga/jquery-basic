$(function () {
  // id属性がfadeToggleの要素がクリックされたら
   $('#fadeToggle').on('click', function() {
     // フェードイン or フェードアウトする
     $('.box').fadeToggle();
   });

});

 