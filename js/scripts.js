var result = 0
var unCheckedValue = []
$(document).ready(function(){
  $("#mainForm").submit(function(event){
    event.preventDefault();
    $("#suggestions").show();
    $("input:checkbox[name=user-symptom]:checked").each(function(){
        result ++
    });
    $("input:checkbox[name=user-signs]:checked").each(function(){
        result ++
    });
    $("input:checkbox[name=user-coping]:checked").each(function(){
        result -= 1
    });
    $("input:checkbox[name=user-coping]").not(':checked').each(function(){
      unCheckedValue.push($(this).val());
    });
    if (result >= 1) {
      $("p").append("Things you should consider doing: <br>" + unCheckedValue.join("<br>") + ".");
    } else {
          $("p").append("Keep up the good work");
    }
  });
});
