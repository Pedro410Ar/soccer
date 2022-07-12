function calcular()
{
  var seleccion= document.getElementById("categoria");
  var seleccionValue=parseInt(seleccion.options[seleccion.selectedIndex].value);

  var cantidad= document.getElementById("cantidad").value;
  var total= 0;


switch (seleccionValue)
{
  case 1:
    total= (150*cantidad)-((150*cantidad)*15)/100
    break;

  case 2:
    total= (150*cantidad)-((150*cantidad)*10)/100
    break;

}

document.getElementById("total").value=total
}

function limpiar()
{
document.getElementById("id_formulario").reset();
}