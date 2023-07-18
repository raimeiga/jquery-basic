$(function() {
    // id属性がaddの要素がクリックされたら
    $('#add').on('click', function(){
      // id属性がtargetの要素にclass属性'sample'を追加
      $('#target').addClass('sample');
    });

    // id属性がremoveの要素がクリックされたら
    $('#remove').on('click', function(){
      // id属性がtargetの要素からclass属性'sample'を削除
      $('#target').removeClass('sample');
    });
  });