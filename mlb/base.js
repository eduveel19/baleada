let ml0 = "http://g.givemenbastreams.com/hls/";
let ml1 = "/playlist.m3u8";
let rays = ml0+ "rays" + ml1;
let orioles = ml0+ "orioles" + ml1;
let mets = ml0+ "mets" + ml1;
let phillies = ml0+ "phillies" + ml1;

function getParameterByName(name) {
                      name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
                      var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
                          results = regex.exec(location.search);
                      return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
                  }

        var srcLOAD = getParameterByName('src');
                if (srcLOAD == "#") {alert('El canal se encuentra Offline');}
                if (srcLOAD == "") {alert('El canal se encuentra Offline');}

                if (srcLOAD == "rays") {srcLOAD = rays;}
                if (srcLOAD == "orioles") {srcLOAD = orioles;}
                if (srcLOAD == "mets") {srcLOAD = mets;}
                if (srcLOAD == "phillies") {srcLOAD = phillies;}