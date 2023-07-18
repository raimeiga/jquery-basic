$(function() {
    //変数の初期化
   let num = 0;
 
   // id属性がappendの要素がクリックされたら要素を追加
   $('#append').on('click', function(){
     // numを1ずつ増やす
     num++;
     $('ul').append('<li>appendで追加' + num + '</li>');
   });

   // id属性がremoveの要素がクリックされたら末尾要素を削除
   $('#remove').on('click', function(){
     num--;
     $('li:last').remove();
 
     // 要素がなくなったら変数を0にする
     if(num < 0){
       num = 0;
     }
   });
  });