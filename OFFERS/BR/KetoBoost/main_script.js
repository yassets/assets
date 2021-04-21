  //slider
  $('.slider').slick({
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 2,
      slidesToScroll: 2,
      responsive: [{
              breakpoint: 1024,
              settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2,
                  infinite: true
              }
          },
          {
              breakpoint: 600,
              settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2
              }
          },
          {
              breakpoint: 480,
              settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
              }
          },
          {
              breakpoint: 359,
              settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  arrows: false
              }
          }
      ]
  });


  $('.slider22').slick({
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1,
      responsive: [{
              breakpoint: 1024,
              settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  infinite: true
              }
          },
          {
              breakpoint: 600,
              settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
              }
          },
          {
              breakpoint: 480,
              settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
              }
          },
          {
              breakpoint: 359,
              settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  arrows: false
              }
          }
      ]
  });







  $('.slider-bene').slick({
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 2,
      slidesToScroll: 2,
      responsive: [{
              breakpoint: 1024,
              settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
              }
          },
          {
              breakpoint: 359,
              settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  arrows: false
              }
          }
      ]
  });



  $('.slider-bene2').slick({
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1,
      responsive: [{
              breakpoint: 1024,
              settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
              }
          },
          {
              breakpoint: 359,
              settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  arrows: false
              }
          }
      ]
  });

  $('#myModal').on('shown.bs.modal', function () {
      $('#myInput').trigger('focus');
      keyboard: false;
  })
  var src = location.search;
  var day = 0,
      hour = 0,
      minute = 39,
      seconds = 59;

  //countdown
  var countdown =
      '<div class="wcct_round_wrap liDay" style="display:none;"><div class="wcct_table"><div class="wcct_table_cell"><span class="counterDay">X</span> <div class="sDay">Dias</div></div></div></div>' +
      '<div class="wcct_round_wrap liHour" style="display:none;"><div class="wcct_table"><div class="wcct_table_cell"><span class="counterHour">X</span> <div class="sHour">Horas</div></div></div></div>' +
      '<div class="wcct_round_wrap liMinute"><div class="wcct_table"><div class="wcct_table_cell"><span class="counterMinute">X</span> <div class="sMinute">Minutos</div></div></div></div>' +
      '<div class="wcct_round_wrap"><div class="wcct_table"><div class="wcct_table_cell"><span class="counterSecond">X</span> <div class="sSecond">Segundos</div></div></div></div>';

  $('.wcct_timer_wrap').append(countdown);

  var search = "C24K=";
  if (document.cookie.length > 0) {
      var offset = document.cookie.indexOf(search);

      if (offset != -1) {
          offset += search.length;
          var end = document.cookie.indexOf(";", offset);

          if (end == -1)
              end = document.cookie.length;

          var value = unescape(document.cookie.substring(offset, end));
          data = value.split('-');
          day = !isNaN(data[0]) ? parseInt(data[0]) : day;
          hour = !isNaN(data[1]) ? parseInt(data[1]) : hour;
          minute = !isNaN(data[2]) ? parseInt(data[2]) : minute;
          seconds = !isNaN(data[3]) ? parseInt(data[3]) : seconds;
      }
  }

  var fildDay = $('.counterDay'),
      fildHour = $('.counterHour'),
      fildMinute = $('.counterMinute'),
      fildSeconds = $('.counterSecond');
  var sDay = $('.sDay'),
      sHour = $('.sHour'),
      sMinute = $('.sMinute'),
      sSeconds = $('.sSecond');
  var liDay = $('.liDay'),
      liHour = $('.liHour'),
      liMinute = $('.liMinute');
  var stringDay = '';
  var stringHour = '';
  var stringMinute = '';
  var stringSeconds = '';

  if (day == 0) {
      liDay.css("display", "none")
  }
  if (day == 0 && hour == 0) {
      liHour.css("display", "none")
  }
  if (day == 0 && hour == 0 && minute == 0) {
      liMinute.css("display", "none")
  }

  var inter = setInterval(function () {
      stringDay = day;
      stringHour = hour;
      stringMinute = minute;
      stringSeconds = seconds;
      fildDay.html(stringDay);
      fildHour.html(stringHour);
      fildMinute.html(stringMinute);
      fildSeconds.html(stringSeconds);
      if (seconds == 1) {
          sSeconds.html('Segundo')
      } else {
          sSeconds.html('Segundos');
          if (minute == 1) {
              sMinute.html('Minuto')
          } else {
              sMinute.html('Minutos');
              if (hour == 1) {
                  sHour.html('Hora')
              } else {
                  sHour.html('Horas');
                  if (day == 1) {
                      sDay.html('Dia')
                  } else {
                      sDay.html('Dias')
                  }
              }
          }
      }
      if (day == 0) {
          liDay.css("display", "none")
      }
      if (day == 0 && hour == 0) {
          liHour.css("display", "none")
      }
      if (day == 0 && hour == 0 && minute == 0) {
          liMinute.css("display", "none")
      }
      seconds--;

      if (seconds < 0) {
          minute--;
          seconds = 59;
          if (minute < 0) {
              hour--;
              minute = 59;
              if (hour < 0) {
                  day--;
                  hour = 23;
                  if (day < 0) {
                      day = 0;
                      hour = 0;
                      minute = 0;
                      seconds = 0;
                      clearInterval(inter);
                      if (usarMsgContador == '1') {
                          $('.countdown').css('display', 'none');
                          $('.expired').css('display', 'block');
                      }
                  }
              }
          }
      }
  }, 1000);

  var d = new Date();
  var today = d.getDate();
  var month = d.getMonth() + 1;
  var year = d.getFullYear();

  $("#date-today").html("<b>" + today.toString().padStart(2, '0') + "/" + month.toString().padStart(2, '0') +
      "/" + year + "</b>");