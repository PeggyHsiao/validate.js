# validate.js
使用JQuery Validate驗證表單資料。

## 安裝
### CDN
引入`validate.js`外，也需要嵌入`jquery.js`檔案才可正常使用。
```
<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"</script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-validate/1.19.1/jquery.validate.min.js"></script>
```
首先在HTML中寫入畫面要呈現的表單欄位，這裡的CSS套用bootstrap4。
```
// index.html

<div class="container">
    <form id="form-content">
        <h2>validate.js範例表單</h2>
        <hr>
            
        <div class="row">
            <div class="col-md-6">
                <label for="username" class="form-group">使用者代號</label>
                <input type="text" class="form-control" id="username" name="username" placeholder="Username">
            </div>
            <div class="col-md-6">
                <label for="email" class="form-group">電子信箱</label>
                <input type="text" class="form-control" id="email" name="email" placeholder="Email">
            </div>
        </div>
            
        <div class="row">
            <div class="col-md-6">
                <label for="password" class="form-group">密碼</label>
                <input type="password" class="form-control" id="password" name="password" placeholder="Password">
            </div>
            <div class="col-md-6">
                <label for="password-again" class="form-group">確認密碼</label>
                <input type="password" class="form-control" id="password-again" name="password-again"
                        placeholder="Confirm password">
            </div>
        </div>

        <div class="row justify-content-center">
            <button type="submit" class="btn btn-primary">Sumbit</button>
        </div>
    </form>
</div>
```
`label`的`for`值要對應`input`的`id值`，而`input`的`name`則是要和.js檔的名稱相同，反正大家都取一樣的也無所謂。

現在開啟畫面畫長成這樣，簡單的四個欄位分別是使用者代號、電子信箱、密碼、確認密碼。  
![](https://github.com/PeggyHsiao/vliadate.js/blob/master/images/view.JPG)  
再來就是在js檔案中設定欄位的驗證資料了。
```
// main.js

$(function () {
  $('#form-content').validate({
    rules: {
        ...
    },
    messages: {
        ...
    }
  })
});
```
寫法為`$('form的id/class名稱').validate({...})`，其中rules和messages為固定的名稱，用途如下：
- rules：用來存放驗證規則，每個`input`為一個物件
- messages：用來放如果驗證失敗要顯示的文字，每個`input`為一個物件  
`rules`的屬性有很多，可以到[菜鳥教程](https://www.runoob.com/jquery/jquery-plugin-validate.html)看。  

Username在這裡設定為必填欄位。如果沒輸入就按下submit則會跳出提示訊息。
```
rules: {
    'username': {
        required: true,
    },
},
messages: {
    'username': { required: '此欄位為必填' },
}
```
如果要驗證Email的時候，可以在`roules`裡面加上`email:true`就會自動檢查是否符合電子信箱的格式。  
```
rules: {
    'email': {
        email: true,
    },
},
messages: {
    'email': { email: '請輸入正確的E-mail格式' },
}
```
`number:true`代表只能輸入數值；`digits:true`代表只能輸入正整數；另外利用`rangelength`可以限制輸入的字數長度，使用陣列存放。
```
rules: {
    'password': {
        required: true,
        number: true,
        digits: true,
        rangelength: [6, 12]
    },
},
messages: {
    'password': { required: '此欄位為必填', number: '請輸入數字', digits: '請輸入數字', rangelength: '請輸入長度為{0}-{1}位數的密碼' },
}
```
其中感覺比較好用的是確認密碼功能，可以利用`equalTo:'#password'`來驗證輸入的資料是否和`id='password'`一樣。
```
rules: {
    'password-again': {
        required: true,
        equalTo: '#password'
    },
},
messages: {
    'password-again': { required: '此欄位為必填', equalTo: "輸入值必須和密碼相同" }
}
```
把以上的`rules`和`messages`結合在`main.js`，並嵌入至`index.html`，就可以製作簡單的資料驗證了。