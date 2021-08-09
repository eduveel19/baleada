let ml0 = "http://g.givemenbastreams.com/hls/";
let ml1 = "/playlist.m3u8";
//let CHathletics = ml0+"athletics"+ml1;
//let CHtwins = ml0+"twins"+ml1;
//let CHrays = ml0+"rays"+ml1;
//let CHyankees = ml0+"yankees"+ml1;
//let CHwhitesox = ml0+"whitesox"+ml1;
let CHindians = ml0+"indians"+ml1;
//let CHastros = ml0+"astros"+ml1;
//let CHbluejays = ml0+"bluejays"+ml1;
//let CHorioles = ml0+"orioles"+ml1;
//let CHtigers = ml0+"tigers"+ml1;
//let CHroyals = ml0+"royals"+ml1;
//let CHmariners = ml0+"mariners"+ml1;
//let CHrangers = ml0+"rangers"+ml1;
//let CHredsox = ml0+"redsox"+ml1;
//let CHangels = ml0+"angels"+ml1;
//let CHdodgers = ml0+"dodgers"+ml1;
//let CHcubs = ml0+"cubs"+ml1;
//let CHpadres = ml0+"padres"+ml1;
//let CHbraves = ml0+"braves"+ml1;
//let CHmarlins = ml0+"marlins"+ml1;
//let CHcardinals = ml0+"cardinals"+ml1;
//let CHrockies = ml0+"rockies"+ml1;
//let CHgiants = ml0+"giants"+ml1;
//let CHbrewers = ml0+"brewers"+ml1;
//let CHphillies = ml0+"phillies"+ml1;
//let CHmets = ml0+"mets"+ml1;
//let CHdiamondbacks = ml0+"diamondbacks"+ml1;
//let CHnationals = ml0+"nationals"+ml1;
let CHreds = ml0+"reds"+ml1;
//let CHpirates = ml0+"pirates"+ml1;

function getParameterByName(name) {
                      name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
                      var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
                          results = regex.exec(location.search);
                      return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
                  }

                var srcLOAD = getParameterByName('src');
                if (srcLOAD == "#") {alert('El canal se encuentra Offline');}
                if (srcLOAD == "") {alert('El canal se encuentra Offline');}

//                if (srcLOAD == "athletics") {srcLOAD = CHathletics;}
//                if (srcLOAD == "twins") {srcLOAD = CHtwins;}
//                if (srcLOAD == "rays") {srcLOAD = CHrays;}
//                if (srcLOAD == "yankees") {srcLOAD = CHyankees;}
//                if (srcLOAD == "whitesox") {srcLOAD = CHwhitesox;}
                if (srcLOAD == "chindians") {srcLOAD = CHindians;}
//                if (srcLOAD == "astros") {srcLOAD = CHastros;}
//                if (srcLOAD == "bluejays") {srcLOAD = CHbluejays;}
//                if (srcLOAD == "orioles") {srcLOAD = CHorioles;}
//                if (srcLOAD == "tigers") {srcLOAD = CHtigers;}
//                if (srcLOAD == "royals") {srcLOAD = CHroyals;}
//                if (srcLOAD == "mariners") {srcLOAD = CHmariners;}
//                if (srcLOAD == "rangers") {srcLOAD = CHrangers;}
//                if (srcLOAD == "redsox") {srcLOAD = CHredsox;}
//                if (srcLOAD == "angels") {srcLOAD = CHangels;}
//                if (srcLOAD == "dodgers") {srcLOAD = CHdodgers;}
//                if (srcLOAD == "cubs") {srcLOAD = CHcubs;}
//                if (srcLOAD == "padres") {srcLOAD = CHpadres;}
//                if (srcLOAD == "braves") {srcLOAD = CHbraves;}
//                if (srcLOAD == "marlins") {srcLOAD = CHmarlins;}
//                if (srcLOAD == "cardinals") {srcLOAD = CHcardinals;}
//                if (srcLOAD == "rockies") {srcLOAD = CHrockies;}
//                if (srcLOAD == "giants") {srcLOAD = CHgiants;}
//                if (srcLOAD == "brewers") {srcLOAD = CHbrewers;}
//                if (srcLOAD == "phillies") {srcLOAD = CHphillies;}
//                if (srcLOAD == "mets") {srcLOAD = CHmets;}
//                if (srcLOAD == "diamondbacks") {srcLOAD = CHdiamondbacks;}
//                if (srcLOAD == "nationals") {srcLOAD = CHnationals;}
                if (srcLOAD == "chreds") {srcLOAD = CHreds;}
//                if (srcLOAD == "pirates") {srcLOAD = CHpirates;}