$(function () {
   $('.study').click(function () {
      $('.wind-for-stydy-img').fadeIn()
      $('.wind-for-gallery-img').hide()
   })
   $('.gallery').click(function () {
      $('.wind-for-gallery-img').fadeIn()
      $('.wind-for-stydy-img').hide()
   })
   $(".wind-for-gallery-img,.wind-for-stydy-img").click(function () {
      $(".wind-for-gallery-img,.wind-for-stydy-img").fadeOut()
   })
   $(document).mouseup(function (e) { // событие клика по веб-документу
      var div = $(".wind-for-gallery-img,.wind-for-stydy-img"); // тут указываем ID элемента
      if (!div.is(e.target) // если клик был не по нашему блоку
         && div.has(e.target).length === 0) { // и не по его дочерним элементам
         div.fadeOut(); // скрываем его
      }
   });
});
//////gallery
$(function () {
   $('.gallery-wind div').on('click', function () {
      var href = $(this).attr('href');
      window.open(href, '_blank').focus();
   });
})
//////////order
const token = '6295230944:AAF--mQECyoTnFiL9qVkh_5jjrV-nkHmExw';
const chat_id = '-1001577265807';
const uri_api = `https://api.telegram.org/bot${token}/sendMessage`;
const uri_api_doc = `https://api.telegram.org/bot${token}/sendDocument`;

document.getElementById('form-text-ua').addEventListener('submit', function (e) {
   e.preventDefault();
   if ($('.input-name-ua').val() == '') {
      $('.input-name-ua').css('border', '1px solid red')
   } else if ($('.input-tel-ua').val() == '') {
      $('.input-tel-ua').css('border', '1px solid red')
   } else if ($('.textarea-ua').val() == '') {
      $('.textarea-ua').css('border', '1px solid red')
   } else {
      const formData = new FormData();
      formData.append('chat_id', chat_id);
      formData.append('document', this.file.files[0]);

      let mesage = '<b></b>';
      mesage += `<b>Заказчик</b>: ${this.name.value}\n`;
      mesage += `<b>Телефон</b>: ${this.tel.value}\n`;
      mesage += `<b>Коментарии</b>:\n ${this.textarea.value}\n`;
      mesage += `<b>Фото</b>:\n ${this.file.value}\n`;

      axios.post(uri_api, {
         chat_id: chat_id,
         parse_mode: 'html',
         text: mesage
      })
      axios.post(uri_api_doc, formData, {
         headers: {
            'Content-Type': 'multipart/form-data'
         }
      })
      this.name.value = '';
      this.tel.value = '';
      this.textarea.value = '';
      this.file.value = '';
      $('.input-name-ua,.input-tel-ua,.textarea-ua').css('border', '1px solid orange')
      if ($('.final-img-p').hide()) {$('.final-img-p').fadeIn(1000)}
      if ($('.final-img-p').show()) {$(".final-img-p").delay(5000).fadeOut(3000)}
   }
})
document.getElementById('form-text-en').addEventListener('submit', function (e) {
   e.preventDefault();
   if ($('.input-name-en').val() == '') {
      $('.input-name-en').css('border', '1px solid red')
   } else if ($('.input-tel-en').val() == '') {
      $('.input-tel-en').css('border', '1px solid red')
   } else if ($('.textarea-en').val() == '') {
      $('.textarea-en').css('border', '1px solid red')
   } else {
      const formData = new FormData();
      formData.append('chat_id', chat_id);
      formData.append('document', this.file.files[0]);

      let mesage = '<b></b>';
      mesage += `<b>Заказчик</b>: ${this.name.value}\n`;
      mesage += `<b>Телефон</b>: ${this.tel.value}\n`;
      mesage += `<b>Коментарии</b>:\n ${this.textarea.value}\n`;
      mesage += `<b>Фото</b>:\n ${this.file.value}\n`;

      axios.post(uri_api, {
         chat_id: chat_id,
         parse_mode: 'html',
         text: mesage
      })
      axios.post(uri_api_doc, formData, {
         headers: {
            'Content-Type': 'multipart/form-data'
         }
      })
      this.name.value = '';
      this.tel.value = '';
      this.textarea.value = '';
      this.file.value = '';
      $('.input-name-en,.input-tel-en,.textarea-en').css('border', '1px solid orange')
      if ($('.final-img-p').hide()) {$('.final-img-p').fadeIn(1000)}
      if ($('.final-img-p').show()) {$(".final-img-p").delay(5000).fadeOut(3000)}

   }
})
document.getElementById('form-text-es').addEventListener('submit', function (e) {
   e.preventDefault();
   if ($('.input-name-es').val() == '') {
      $('.input-name-es').css('border', '1px solid red')
   } else if ($('.input-tel-es').val() == '') {
      $('.input-tel-es').css('border', '1px solid red')
   } else if ($('.textarea-es').val() == '') {
      $('.textarea-es').css('border', '1px solid red')
   } else {
      const formData = new FormData();
      formData.append('chat_id', chat_id);
      formData.append('document', this.file.files[0]);

      let mesage = '<b></b>';
      mesage += `<b>Заказчик</b>: ${this.name.value}\n`;
      mesage += `<b>Телефон</b>: ${this.tel.value}\n`;
      mesage += `<b>Коментарии</b>:\n ${this.textarea.value}\n`;
      mesage += `<b>Фото</b>:\n ${this.file.value}\n`;

      axios.post(uri_api, {
         chat_id: chat_id,
         parse_mode: 'html',
         text: mesage
      })
      axios.post(uri_api_doc, formData, {
         headers: {
            'Content-Type': 'multipart/form-data'
         }
      })
      this.name.value = '';
      this.tel.value = '';
      this.textarea.value = '';
      this.file.value = '';
      $('.input-name-es,.input-tel-es,.textarea-es').css('border', '1px solid orange')
      if ($('.final-img-p').hide()) {$('.final-img-p').fadeIn(1000)}
      if ($('.final-img-p').show()) {$(".final-img-p").delay(5000).fadeOut(3000)}
   }
})
document.getElementById('form-text').addEventListener('submit', function (e) {
   e.preventDefault();
   if ($('.input-name-ru').val() == '') {
      $('.input-name-ru').css('border', '1px solid red')
   } else if ($('.input-tel-ru').val() == '') {
      $('.input-tel-ru').css('border', '1px solid red')
   } else if ($('.textarea-ru').val() == '') {
      $('.textarea-ru').css('border', '1px solid red')
   } else {
      const formData = new FormData();
      formData.append('chat_id', chat_id);
      formData.append('document', this.file.files[0]);

      let mesage = '<b></b>';
      mesage += `<b>Заказчик</b>: ${this.name.value}\n`;
      mesage += `<b>Телефон</b>: ${this.tel.value}\n`;
      mesage += `<b>Коментарии</b>:\n ${this.textarea.value}\n`;
      mesage += `<b>Фото</b>:\n ${this.file.value}\n`;

      axios.post(uri_api, {
         chat_id: chat_id,
         parse_mode: 'html',
         text: mesage
      })
      axios.post(uri_api_doc, formData, {
         headers: {
            'Content-Type': 'multipart/form-data'
         }
      })
      this.name.value = '';
      this.tel.value = '';
      this.textarea.value = '';
      this.file.value = '';
      $('.input-name-ru,.input-tel-ru,.textarea-ru').css('border', '1px solid orange')
      if ($('.final-img-p').hide()) {$('.final-img-p').fadeIn(1000)}
      if ($('.final-img-p').show()) {$(".final-img-p").delay(5000).fadeOut(3000)}

   }
})

////////
$(function () {
   $('.nav-lang-ua').click(function () {
      $('.ua-lang').show()
      $('.en-lang,.ru-lang,.es-lang').hide()
   })
   $('.nav-lang-ru').click(function () {
      $('.ru-lang').show()
      $('.en-lang,.ua-lang,.es-lang').hide()
   })
   $('.nav-lang-en').click(function () {
      $('.en-lang').show()
      $('.ua-lang,.ru-lang,.es-lang').hide()
   })
   $('.nav-lang-es').click(function () {
      $('.es-lang').show()
      $('.ua-lang,.ru-lang,.en-lang').hide()
   })
})
/////////
$(function () {
   const screenWidth = window.screen.width
   if (screenWidth < 800) {
      $('.iframe').css(`width`, `${screenWidth}px`).css('height',`${screenWidth}px`/2).css('padding','0px 10px');
      $('form').css(`width`, `${screenWidth}px`);
   }
})
