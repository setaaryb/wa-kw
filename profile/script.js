document.getElementById('whatsappBtn').addEventListener('click', function() {
    var phoneNumber = '6289514564265';
    var message = 'Assalamualikum, Halo bang setaa save gw yaa.';
  
    var whatsappUrl = 'https://api.whatsapp.com/send?phone=' + phoneNumber + '&text=' + encodeURIComponent(message);
    window.open(whatsappUrl, '_blank');
  });

  document.getElementById('backBtn').addEventListener('click', function() {
    window.location.href = "../index.html";
  });  