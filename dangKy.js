window.onload = function() {
    if(!window.location.hash) {
        window.location = window.location + '#loaded';
        window.location.reload();
    }
  }
// Lấy giá trị của một input
function getValue(id){
    return document.getElementById(id).value.trim();
}
 
// Hiển thị lỗi
function showError(key, mess){
    document.getElementById(key + '_error').innerHTML = mess;
}
function signUp(){
    var flag = false;

    //username
    var username = getValue('usrname')
    if (username == '' || username.length < 5 || !/^[a-zA-Z0-9]+$/.test(username)){
        flag = true;
        showError('username', 'Vui lòng kiểm tra lại Username');
    }
    
    //phone
    var phone = getValue('phone')
    if(phone == '' ||  !/^[0-9]{10}$/.test(phone)){
        flag = true;
        showError('phone', 'Vui lòng kiểm tra lại số');
    }
   
    //password
    var password = getValue('psw');
    var repassword = getValue('cfpsw');
    if (password == '' || password.length < 8 || password != repassword){
        flag = true;
        showError('password', 'Vui lòng kiểm tra lại Password');
    }
   
    console.log(flag);
    if(flag==false){
        location.href = 'modal2.html';
    }
    var name = document.forms["F1"]["usrname"].value;
    sessionStorage.setItem('name', name);
    var password = document.forms["F1"]["cfpsw"].value;
    sessionStorage.setItem('psw', password);
    
    return flag;
}

 $(document).ready(function(){
    
    $("#myModal").modal();
    
    $('#myModal').on('hidden.bs.modal', function () {
        // do something...
        location.href = 'main.html';
      })
     
    
 });


