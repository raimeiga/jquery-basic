$(function() {  
    $(document).on('click keydown', (e) => {
        // クリックされた場合
        if(e.type === 'click'){
          $('div').text('クリックされました！');
        }
        // キーが押された場合
        if(e.type === 'keydown'){
          $('div').text('キーが押されました！');
        }
      });
  });