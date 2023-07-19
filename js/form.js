$(function () {
    // id属性がcheckの要素がクリックされたら
    $('#check').on('click', function () {
      // 名前(テキストボックス)を取得する 　何故name="username"に［ ］をつける？
      console.log('名前:' + $('[name="username"]').val());
  
      // 性別(ラジオボタン)を取得する
      console.log('性別:' + $('[name="gender"]:checked').val());
  
      // 血液型(セレクトボックス)を取得する
      console.log('血液型:' + $('[name="blood"]').val());
  
      // 趣味(チェックボックス)を取得する
      $('[name="hobby"]:checked').each(function() {
        //$(this)は1つずつの選択された要素を意味する
        console.log('趣味:' + $(this).val());
      });
    });

    // 名前が入力されたら
   $('[name="username"]').on("input", function () {
     let input = $(this).val();
 
     // 入力文字があればボタンを押せる、なければボタンを押せなくする
     if (input) {
       $("#check").prop('disabled', false);
     } else {
       $("#check").prop('disabled', true);
     }
   });
  });