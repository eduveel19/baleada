let ml0 = "http://g.givemenbastreams.com/hls/";
let ml1 = "/playlist.m3u8";
let athletics = ml0+"athletics"+ml1;
let twins = ml0+"twins"+ml1;
let rays = ml0+"rays"+ml1;
let yankees = ml0+"yankees"+ml1;
let whitesox = ml0+"whitesox"+ml1;
let indians = ml0+"indians"+ml1;
let astros = ml0+"astros"+ml1;
let bluejays = ml0+"bluejays"+ml1;
let orioles = ml0+"orioles"+ml1;
let tigers = ml0+"tigers"+ml1;
let royals = ml0+"royals"+ml1;
let mariners = ml0+"mariners"+ml1;
let rangers = ml0+"rangers"+ml1;
let redsox = ml0+"redsox"+ml1;
let angels = ml0+"angels"+ml1;
let dodgers = ml0+"dodgers"+ml1;
let cubs = ml0+"cubs"+ml1;
let padres = ml0+"padres"+ml1;
let braves = ml0+"braves"+ml1;
let marlins = ml0+"marlins"+ml1;
let cardinals = ml0+"cardinals"+ml1;
let rockies = ml0+"rockies"+ml1;
let giants = ml0+"giants"+ml1;
let brewers = ml0+"brewers"+ml1;
let phillies = ml0+"phillies"+ml1;
let mets = ml0+"mets"+ml1;
let diamondbacks = ml0+"diamondbacks"+ml1;
let nationals = ml0+"nationals"+ml1;
let reds = ml0+"reds"+ml1;
let pirates = ml0+"pirates"+ml1;

function getParameterByName(name) {
                      name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
                      var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
                          results = regex.exec(location.search);
                      return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
                  }

        var srcLOAD = getParameterByName('src');
                if (srcLOAD == "#") {alert('El canal se encuentra Offline');}
                if (srcLOAD == "") {alert('El canal se encuentra Offline');}

                if (srcLOAD == "athletics") {srcLOAD = athletics;}
                if (srcLOAD == "twins") {srcLOAD = twins;}
                if (srcLOAD == "rays") {srcLOAD = rays;}
                if (srcLOAD == "yankees") {srcLOAD = yankees;}
                if (srcLOAD == "whitesox") {srcLOAD = whitesox;}
                if (srcLOAD == "indians") {srcLOAD = indians;}
                if (srcLOAD == "astros") {srcLOAD = astros;}
                if (srcLOAD == "bluejays") {srcLOAD = bluejays;}
                if (srcLOAD == "orioles") {srcLOAD = orioles;}
                if (srcLOAD == "tigers") {srcLOAD = tigers;}
                if (srcLOAD == "royals") {srcLOAD = royals;}
                if (srcLOAD == "mariners") {srcLOAD = mariners;}
                if (srcLOAD == "rangers") {srcLOAD = rangers;}
                if (srcLOAD == "redsox") {srcLOAD = redsox;}
                if (srcLOAD == "angels") {srcLOAD = angels;}
                if (srcLOAD == "dodgers") {srcLOAD = dodgers;}
                if (srcLOAD == "cubs") {srcLOAD = cubs;}
                if (srcLOAD == "padres") {srcLOAD = padres;}
                if (srcLOAD == "braves") {srcLOAD = braves;}
                if (srcLOAD == "marlins") {srcLOAD = marlins;}
                if (srcLOAD == "cardinals") {srcLOAD = cardinals;}
                if (srcLOAD == "rockies") {srcLOAD = rockies;}
                if (srcLOAD == "giants") {srcLOAD = giants;}
                if (srcLOAD == "brewers") {srcLOAD = brewers;}
                if (srcLOAD == "phillies") {srcLOAD = phillies;}
                if (srcLOAD == "mets") {srcLOAD = mets;}
                if (srcLOAD == "diamondbacks") {srcLOAD = diamondbacks;}
                if (srcLOAD == "nationals") {srcLOAD = nationals
                if (srcLOAD == "reds") {srcLOAD = reds;}
                if (srcLOAD == "pirates") {srcLOAD = pirates;}