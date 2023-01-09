function copiarAlPortapapeles(id_elemento) {
    var aux = document.createElement("input");
    aux.setAttribute("value", document.getElementById(id_elemento).innerHTML);
    document.body.appendChild(aux);
    aux.select();
    document.execCommand("copy");
    document.body.removeChild(aux);
  }

  
  function mostrarclaveDominio () {
    var pass = document.getElementById('clave')

    if(pass = 'fcom2022') {
         window.alert('Usuario: despliegue0301\n' +
                    'Password:Adaptador#de#LAN$');
    } else {
        window.alert('Clave incorrecta');
    }
  }