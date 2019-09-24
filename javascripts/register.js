function register() {
    var _inputName = $('#inputName').val();
    var _inputEmail = $('#inputEmail').val();
    var _inputPassword = $('#inputPassword').val();

    if (!_inputEmail || !__inputPassword || !__inputName) {
        $('#errormsg').text('請輸入未填欄位!');
    } else {
        $.post("/member/register", {
            'inputName': _inputName,
            'inputEmail': _inputEmail,
            'inputPassword': _inputPassword
        }, function (res) {
            if (res.status == 0) {
                location.href = '/public/login.html';
                alert('註冊成功!');
            }
        });
    }
}