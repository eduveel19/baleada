let emba = "http://www.televisiongratishd.com/embed/"; let embb = ".html";
let espnsur = emba + "espn" + embb;
let espn2sur = emba + "espn2" + embb;
let espn3sur = emba + "espn3" + embb;

let espnnorte = emba + "espnmexico" + embb;
let espn2norte = emba + "espn2mexico" + embb;
let espn3norte = emba + "espn3mexico" + embb;

let directv1 = emba + "directvsports" + embb;
let directv2 = emba + "directvsports2" + embb;
let directvp = emba + "directvsportsplus" + embb;

let winsports = emba + "winsports" + embb;

function getParameterByName(name) {
              name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
              var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
                  results = regex.exec(location.search);
              return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
          }
              var getURL = getParameterByName('get');
        if (getURL == "#") {alert('El canal se encuentra Offline');}
        if (getURL == "") {alert('El canal se encuentra Offline');}
        if (getURL == "espnsur") {getURL = espnsur;}
        if (getURL == "espn2sur") {getURL = espn2sur;}
        if (getURL == "espn3sur") {getURL = espn3sur;}

        if (getURL == "espnnorte") {getURL = espnsnorte;}
        if (getURL == "espn2norte") {getURL = espn2norte;}
        if (getURL == "espn3norte") {getURL = espn3norte;}

        if (getURL == "directv1") {getURL = directv1;}
        if (getURL == "directv2") {getURL = directv2;}
        if (getURL == "directvp") {getURL = directvp;}

        if (getURL == "winsports") {getURL = winsports;}

document.write(" <iframe class='dark' frameborder='0' sandbox='allow-scripts allow-same-origin' height=100% width=100% src='" + getURL + "' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen='yes' scrolling='no' allowtransparency></iframe>");