
window.onload = function() {
  if(!window.location.hash) {
      window.location = window.location + '#loaded';
      window.location.reload();
  }
}
//xử lý xuất hiện login
$(document).ready(function(){
  $("#myModal").modal();
  $('#myModal').on('hidden.bs.modal', function () {
    // do something...
    location.href = 'main.html';
  })
});

//hiện và ẩn mật khẩu
$(document).ready(function(){
  $('#cancel').click(function(){
     location.href='main.html';
   });
   $('#cancel1').click(function(){
    location.href='main.html';
  });
});

function getValue(id){
  return document.getElementById(id).value.trim();
}

// Hiển thị lỗi
function showError(key, mess){
  document.getElementById(key + '_error').innerHTML = mess;
}

function dangnhap(){
  var flag = true;
  var username = getValue('usrname')
    if (username == '' || username.length < 5 || !/^[a-zA-Z0-9]+$/.test(username)){
        flag = true;
        showError('username', 'Vui lòng kiểm tra lại Username');
    }
    
    var repassword = getValue('psw1');
    if (repassword == '' || repassword.length < 8){
        flag = true;
        showError('password', 'Vui lòng kiểm tra lại Password');
    }
  var name = sessionStorage.getItem('name');
  var name1 = document.getElementById('usrname').value;
  var psw = sessionStorage.getItem('psw');
  var psw1 = document.getElementById('psw1').value;
  if(name == name1 && psw == psw1){
    flag=false;
  }
  else{
    showError('username', 'Vui lòng kiểm tra lại Username');
  }
  if(flag==false){
    location.href = 'main1.html';
  }
  
  console.log(flag);
  return flag;
}
