$(function () {
  $('#form-content').validate({
    rules: {
      'username': {
        required: true,
      },
      'email': {
        email: true
      },
      'password': {
        required: true,
        number: true,
        digits: true,
        rangelength: [6, 12]
      },
      'password-again': {
        required: true,
        equalTo: '#password'
      },
    },
    messages: {
      'username': { required: '此欄位為必填' },
      'email': { emali: '請輸入正確的E-mail格式' },
      'password': { required: '此欄位為必填', number: '請輸入數字', digits: '請輸入數字', rangelength: '請輸入長度為{0}-{1}位數的密碼' },
      'password-again': { required: '此欄位為必填', equalTo: "輸入值必須和密碼相同" }
    }
  })
});

