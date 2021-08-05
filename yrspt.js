// ALERT
let alertyrspt =
`
<section class="container">
<section style="background-color: #000;color: #fff;position: fixed;width: 50%" class="alert alert-2 alert-info" role="alert">
<i class="fa fa-info-circle"></i> Gracias por utilizar iRaffle Sports!
</section>
</section>
`;
for (const ele of document.getElementsByClassName("alertyrspt")){ele.innerHTML=(alertyrspt)}

let yrspta = "http://"+"your"+"spor"+"ts."+"stre"+"am/" + "ing/";
let espnnl = yrspta +  "tvx2?ch=fs1nl";
let espn2nl = yrspta +  "tvx2?ch=fs2nl";
let espn3nl = yrspta +  "tvx2?ch=fs3nl";
let espn4nl = yrspta +  "tvx2?ch=fs4nl";
let espn5nl = yrspta +  "tvx2?ch=fs5nl";
let espn = yrspta +  "espn";
let espn2 = yrspta +  "espn2";
let fs1 = yrspta +  "fs1";
let fs2 = yrspta +  "fs2";
let fsdeportes = yrspta +  "fsdeportes";
let espndep = yrspta +  "espndep";
let espnsur = yrspta +  "espnsur";
let espn2sur = yrspta +  "espn2sur";
let espn3sur = yrspta +  "espn3sur";
let espnjm = yrspta +  "espnjm";
let espn2jm = yrspta +  "espn2jm";
let lnh = yrspta +  "lnh";
let mlbn = yrspta +  "mlbn";
let tvpublica = "//i.futbollibre.net/g/tvpkey.html";

function getParameterByName(name) {
              name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
              var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
                  results = regex.exec(location.search);
              return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
          }
              var getURL = getParameterByName('get');
              var getAlert = "Haz docle clic para entrar a fullscreen";  
        if (getURL == "#") {alert('El canal se encuentra Offline');}
        if (getURL == "") {alert('El canal se encuentra Offline');}
        if (getURL == "espnnl") {getURL = espnnl;}
        if (getURL == "espn2nl") {getURL = espn2nl;}
        if (getURL == "espn3nl") {getURL = espn3nl;}
        if (getURL == "espn4nl") {getURL = espn4nl;}
        if (getURL == "espn5nl") {getURL = espn5nl;}
        if (getURL == "espn") {getURL = espn;}
        if (getURL == "espn2") {getURL = espn2;}
        if (getURL == "fs1") {getURL = fs1;}
        if (getURL == "fs2") {getURL = fs2;}
        if (getURL == "fsdeportes") {getURL = fsdeportes;}
        if (getURL == "espndep") {getURL = espndep;}
        if (getURL == "espnsur") {getURL = espnsur;}
        if (getURL == "espn2sur") {getURL = espn2sur;}
        if (getURL == "espn3sur") {getURL = espn3sur;}
        if (getURL == "espnjm") {getURL = espnjm;}
        if (getURL == "espn2jm") {getURL = espn2jm;}
        if (getURL == "lnh") {getURL = lnh;}
        if (getURL == "mlbn") {getURL = mlbn;}
        if (getURL == "tvpublica") {getURL = tvpublica;}

document.write(" <iframe  class='yrspt' frameborder='0' height=100% width=100% src='" + getURL + "' allowfullscreen='yes' scrolling='no' allowtransparency></iframe>");
        