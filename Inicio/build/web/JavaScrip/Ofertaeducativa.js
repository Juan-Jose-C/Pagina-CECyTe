var pdf=document.getElementById("PDF1");
var pdf2=document.getElementById("PDF2");
var oferta_Educativa="Oferta_educativa";
var linkOferta_educativa=[30];
linkOferta_educativa[0]="/Aguascalientes.pdf";

linkOferta_educativa[1]="/Baja California.pdf";
linkOferta_educativa[2]="/Baja California Sur.pdf";
linkOferta_educativa[3]="/Campeche.pdf";
linkOferta_educativa[4]="/Chiapas.pdf";
linkOferta_educativa[5]="/Chihuahua.pdf";
linkOferta_educativa[6]="/Coahuila.pdf";
linkOferta_educativa[7]="/Durango.pdf";
linkOferta_educativa[8]="/Estado de Mexico.pdf";
linkOferta_educativa[9]="/Guanajuato.pdf";
linkOferta_educativa[11]="/Guerrero.pdf";
linkOferta_educativa[10]="/Hidalgo.pdf";
linkOferta_educativa[12]="/Jalisco.pdf";
linkOferta_educativa[13]="/Michoacan.pdf";
linkOferta_educativa[14]="/Morelos.pdf";
linkOferta_educativa[15]="/Nayarit.pdf";
linkOferta_educativa[16]="/Nuevo Leon.pdf";
linkOferta_educativa[17]="/Oaxaca.pdf";
linkOferta_educativa[18]="/Puebla.pdf";
linkOferta_educativa[19]="/Queretaro.pdf";
linkOferta_educativa[20]="/Quintana Roo.pdf";
linkOferta_educativa[21]="/San Luis Potosi.pdf";
linkOferta_educativa[22]="/Sonora.pdf";
linkOferta_educativa[23]="/Tabasco.pdf";
linkOferta_educativa[24]="/Tamaulipas.pdf";
linkOferta_educativa[25]="/Tlaxcala.pdf";
linkOferta_educativa[26]="/Veracruz.pdf";
linkOferta_educativa[27]="/Yucatan.pdf";
linkOferta_educativa[28]="/Zacatecas.pdf";
function cambioPdf(numero){
  pdf.src=oferta_Educativa+linkOferta_educativa[numero.id];
    };
    function cambioPdf2(numero){
      pdf2.src=oferta_Educativa+linkOferta_educativa[(numero.id-29)];
        };