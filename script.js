$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').trigger('focus')
})

function updateCountdown() {

    // 50 is the max message length
    var remaining = 50 - jQuery('.message').val().length;
    jQuery('.countdown').text(remaining + ' char. left');
}
$( document ).ready(function() {
    updateCountdown();
    $('.message').change(updateCountdown);
    $('.message').keyup(updateCountdown);
});

function updateText(value, id) {
  console.log("value: " + value + "\nid: " + id);
  let string1 = "#" + id;
  /*
  id="changer"
  string1 = "#" + "changer"
  string1 = "#changer"
  */
  console.log($(string1));
  $(string1).text(value);
}
