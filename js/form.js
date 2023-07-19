$(function () {
  // 1. 趣味のチェックボックスが変更されたら
  $('[name="hobby"]').on('change', function () {
    // 2.、3. チェックの数が3より大きかったら
    if ($('[name="hobby"]:checked').length > 3) {
      // 4. チェックを付けようとしたものだけチェックを外す
      $(this).prop('checked', false);

      // 5. 注意を促すメッセージを表示する
      alert('3つまでしか選択できません');
    }
  }); 
  });