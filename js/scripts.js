$(document).ready(function(){

  $("#form1").submit(function(event) {
    var output = [];
    var input1 = parseInt($("input#input1").val());
    var input2 = parseInt($("input#input2").val());


for(var num = 0; num <= input1; num += input2) {

output.push(num);
}

$("p").after("<p>"+output+"</p>");
event.preventDefaut();

  });
});
