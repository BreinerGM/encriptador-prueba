function encriptarText() {
    var textarea = document.getElementById("text");
    var valuetext = textarea.value;
    const reglas = {
      'e': 'enter',
      'i': 'imes',
      'a': 'ai',
      'o': 'ober',
      'u': 'ufat'
    };

    const rules = [
        'A', 'Á', 'B', 'C', 'D', 'E', 'É', 'F', 'G', 'H', 'I', 'Í', 'J', 'K', 'L', 'M', 'N', 'Ñ', 'O', 'Ó', 'P', 'Q', 'R', 'S', 'T', 'U', 'Ú', 'Ü', 'V', 'W', 'X', 'Y', 'Z', 'á', 'é', 'í', 'ó', 'ú', 'ü','!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', '-', '=', '[', ']', '{', '}', ';', ':', ',', '.', '<', '>', '/', '?'
      ];
  
    let resultado = '';
  
    for (let i = 0; i < valuetext.length; i++) {
      const caracter = valuetext[i];

      if(rules.includes(caracter)){
        alert("* NO SE PERMITEN LETRAS MAYUSCULAS, ACENTOS Y CARACTERES ESPECIALES *");
        resultado = '';
        break;
      }else{
        if (reglas.hasOwnProperty(caracter)) {
            resultado += reglas[caracter];
        } else {
            resultado += caracter;
        }
      }
    }

    if(resultado == ''){
        alert("Ingresa un mensaje para que sea encriptado <3");
    }else{
        document.getElementById("img1").style.display = "none";
        document.getElementById("aviso1").style.display = "none";
        document.getElementById("aviso2").style.display = "none";
    
        document.getElementById("textR").style.display = "block";
        document.getElementById("textR").style.marginBottom = "390px";
        document.getElementById("copy").style.display = "block";
        document.getElementById("copy").style.width = "320px";

        var resultadof = document.getElementById("textR");
        resultadof.textContent = resultado;
    }
}
  
function descriptarText(){
  var textarea = document.getElementById("text");
  var valuetext = textarea.value;
    var reglas = [
        { normal: 'enter', reemplazo: 'e' },
        { normal: 'imes', reemplazo: 'i' },
        { normal: 'ai', reemplazo: 'a' },
        { normal: 'ober', reemplazo: 'o' },
        { normal: 'ufat', reemplazo: 'u' }
    ];

    const rules2 = [
      'A', 'Á', 'B', 'C', 'D', 'E', 'É', 'F', 'G', 'H', 'I', 'Í', 'J', 'K', 'L', 'M', 'N', 'Ñ', 'O', 'Ó', 'P', 'Q', 'R', 'S', 'T', 'U', 'Ú', 'Ü', 'V', 'W', 'X', 'Y', 'Z', 'á', 'é', 'í', 'ó', 'ú', 'ü','!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', '-', '=', '[', ']', '{', '}', ';', ':', ',', '.', '<', '>', '/', '?'
    ];

    for (let i = 0; i < valuetext.length; i++) {
        const caracter = valuetext[i];
        if(rules2.includes(caracter)){
           alert("* NO SE PERMITEN LETRAS MAYUSCULAS, ACENTOS Y CARACTERES ESPECIALES *");
           valuetext = '';
          break;
        }
    }
    for (var i = 0; i < reglas.length; i++) {
        var regla = reglas[i];
        valuetext = valuetext.replace(new RegExp(regla.normal, 'g'), regla.reemplazo);
    }

    if(valuetext == ''){
      alert("Ingresa un mensaje para que sea desencriptado <3")
    }else{
      document.getElementById("img1").style.display = "none";
      document.getElementById("aviso1").style.display = "none";
      document.getElementById("aviso2").style.display = "none";

      document.getElementById("textR").style.display = "block";
      document.getElementById("textR").style.marginBottom = "390px";
      document.getElementById("copy").style.display = "block";
      document.getElementById("copy").style.width = "320px";

      var resultadof = document.getElementById("textR");
      resultadof.textContent = valuetext;
    }
  }

  function copyText(){
    var copiar = document.getElementById("textR");
    var tempInput = document.createElement("textarea");
    tempInput.value = copiar.innerText;
    document.body.appendChild(tempInput);
    tempInput.setSelectionRange(0, 99999);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
}
