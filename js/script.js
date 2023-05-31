window.onload = function(){

  var passwordVerified = sessionStorage.getItem("passwordVerified");
  if (passwordVerified === "true") {
      document.getElementsByClassName('psmask')[0].style.display = 'none';
  }

  document.getElementById('inputElement').addEventListener('keypress', function(event){
    if(event.key == 'Enter'){
      document.getElementsByClassName('loading')[0].style.opacity = 1;
      setTimeout(function(){
        window.location.href = 'result.html';
      }, 7000);
    }
  })

  document.getElementsByClassName('bi-send')[0].addEventListener('click', function(){
    document.getElementsByClassName('loading')[0].style.opacity = 1;
    setTimeout(function(){
      window.location.href = 'result.html';
    }, 7000);
  })

}

if(window.innerWidth <= 428){
  $('.playing').children().eq(11).nextAll().css('display', 'none');
}