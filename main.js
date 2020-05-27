$(function () {
  $('#form-content').validate({
    submitHandler: function () {
      alert("D");
    },
    rules: {
      'email': { required: true },
      'password': { required: true, number: true, digits: true, rangelength: [6, 12] },
      'password-again': { required: true, equalTo: '#password' }
    },
    messages: {
      'email': { required: '此欄位為必填' },
      'password': { required: '此欄位為必填', number: '請輸入數字', digits: '請輸入數字', rangelength: '請輸入長度為6-12位數的密碼' },
      'password-again': { required: '此欄位為必填', equalTo: "輸入值必須和密碼相同" }
    }
  })
});

