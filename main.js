$('li').hide().each(function(index) { // Ховає пункти списку
  $(this ).delay(450 * index).fadeIn(1600); // Плавно виводить списки 
  });

// Видаляє елементи li в списку, без ефекту
$(document).ready(function() {
  $(document).on('click', '.deleteRowButton', function () {
      $(this).closest('li').remove();
  })
})

// Змінює колір li
$(document).ready(function(){
  $("#button").click(function(){
      $("li").addClass("cool");    
  });
});

// Добавляє в список елементи li
$(document).ready(function() {
  $('span').click(function() {
     var new_task = $('#myInput').val();
   $('ul').append('<li contenteditable="true"> '+new_task+' <button class="deleteRowButton" type="button">Видалити</button></li>');
   return false;
  });
 });

// Виводить повідомлення, якщо не введений текс
 $('span').click(function(){
  if($('#myInput').val() == ''){
     alert('Небхідно ввести нову справу!!!');
     return false
  }
});

// Добавляє до тексту елементу, додаткий надпис на початку
  var $listItems = $('li');
  $listItems.each(function() {
    var $this = $(this);
    if ($this.is('.need')) {
    $this.prepend('Необхідно!!! ');
    }
    });
    // в кінці
    $('li:contains("вдома")').append(' (Зроблено)');

    // Редагування списку li по кліку мишки   
var contents = $('li').html();
$('li').blur(function() {
    if (contents!=$(this).html()){
        contents = $(this).html();
    }
})

      
    
    