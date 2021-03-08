$( document ).ready(function() {

  var res = new Respuestas (0);

  

  $('#q2').hide();
  $('#q3').hide();
  $('#contenedorRes').hide();


  $("#enviar").click(function(){
    
    res.pa = res.pa +1
    var resaux = res.pa+1
    var radioSelected = 'question' + res.pa
    var ultima = $("#q"+res.pa ).data("ultima")
    var xd = "";

    var opcion = $("input[name='"+radioSelected+"']:checked").val();
   res.lado = res.lado + parseInt(opcion)

    $('#q'+res.pa).fadeOut(function () {
      if (ultima=="yes"){
        $("#enviar").fadeOut();

      valorMaximo = res.pa + res.pa
      valorSith = (valorMaximo/3).toFixed();
      valorJedi = (valorMaximo/1.4).toFixed();
    if (res.lado>=valorJedi){
      xd = "jedi";
    } else if (res.lado <= valorSith) {
      xd = "sith";
    } else {xd = "pelotudo";}
    $('#contenedorRes').text('Eres un ' + xd);
    $('#contenedorRes').fadeIn();

      } else {
        $('#q'+resaux).fadeIn();
      }
      

    });

  });
  
});


function Respuestas (pa) { //pa= pregunta actual
  this.pa = 0;
  this.lado = 0;
}