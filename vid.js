// E P L
let p1 = "http://161.35.123.8/live/ovochannel2/playlist.m3u8";
let p2 = "https://sportsgrid-klowdtv.amagi.tv/playlist.m3u8";
let p3 = "https://sportsgrid-klowdtv.amagi.tv/playlist.m3u8";
let p4 = "https://sportsgrid-klowdtv.amagi.tv/playlist.m3u8";
let p5 = "https://sportsgrid-klowdtv.amagi.tv/playlist.m3u8";
let p6 = "https://sportsgrid-klowdtv.amagi.tv/playlist.m3u8";
let p7 = "https://sportsgrid-klowdtv.amagi.tv/playlist.m3u8";
let p8 = "https://sportsgrid-klowdtv.amagi.tv/playlist.m3u8";
let p9 = "https://sportsgrid-klowdtv.amagi.tv/playlist.m3u8";
let p10 = "https://sportsgrid-klowdtv.amagi.tv/playlist.m3u8";
// L L S
let c1 = "https://sportsgrid-klowdtv.amagi.tv/playlist.m3u8";
let c2 = "https://bcovlive-a.akamaihd.net/825f39eaa17d4794a3898945026556e0/us-west-2/6056665196001/playlist.m3u8";
let c3 = "https://sportsgrid-klowdtv.amagi.tv/playlist.m3u8";
let c4 = "https://sportsgrid-klowdtv.amagi.tv/playlist.m3u8";
let c5 = "https://sportsgrid-klowdtv.amagi.tv/playlist.m3u8";
let c6 = "https://sportsgrid-klowdtv.amagi.tv/playlist.m3u8";
let c7 = "https://sportsgrid-klowdtv.amagi.tv/playlist.m3u8";
let c8 = "https://sportsgrid-klowdtv.amagi.tv/playlist.m3u8";
let c9 = "https://sportsgrid-klowdtv.amagi.tv/playlist.m3u8";
let c10 = "https://sportsgrid-klowdtv.amagi.tv/playlist.m3u8";
// S A T
let s1 = "https://sportsgrid-klowdtv.amagi.tv/playlist.m3u8";
let s2 = "https://sportsgrid-klowdtv.amagi.tv/playlist.m3u8";
let s3 = "https://sportsgrid-klowdtv.amagi.tv/playlist.m3u8";
let s4 = "https://sportsgrid-klowdtv.amagi.tv/playlist.m3u8";
let s5 = "https://sportsgrid-klowdtv.amagi.tv/playlist.m3u8";
let s6 = "https://sportsgrid-klowdtv.amagi.tv/playlist.m3u8";
let s7 = "https://sportsgrid-klowdtv.amagi.tv/playlist.m3u8";
let s8 = "https://sportsgrid-klowdtv.amagi.tv/playlist.m3u8";
let s9 = "https://sportsgrid-klowdtv.amagi.tv/playlist.m3u8";
let s10 = "https://sportsgrid-klowdtv.amagi.tv/playlist.m3u8";
// B D L
let b1 = "https://sportsgrid-klowdtv.amagi.tv/playlist.m3u8";
let b2 = "https://sportsgrid-klowdtv.amagi.tv/playlist.m3u8";
let b3 = "https://sportsgrid-klowdtv.amagi.tv/playlist.m3u8";
let b4 = "https://sportsgrid-klowdtv.amagi.tv/playlist.m3u8";
let b5 = "https://sportsgrid-klowdtv.amagi.tv/playlist.m3u8";
let b6 = "https://sportsgrid-klowdtv.amagi.tv/playlist.m3u8";
let b7 = "https://sportsgrid-klowdtv.amagi.tv/playlist.m3u8";
let b8 = "https://sportsgrid-klowdtv.amagi.tv/playlist.m3u8";
let b9 = "https://sportsgrid-klowdtv.amagi.tv/playlist.m3u8";
let b10 = "https://sportsgrid-klowdtv.amagi.tv/playlist.m3u8";
// L G 1
let l1 = "https://sportsgrid-klowdtv.amagi.tv/playlist.m3u8";
let l2 = "https://sportsgrid-klowdtv.amagi.tv/playlist.m3u8";
let l3 = "https://sportsgrid-klowdtv.amagi.tv/playlist.m3u8";
let l4 = "https://sportsgrid-klowdtv.amagi.tv/playlist.m3u8";
let l5 = "https://sportsgrid-klowdtv.amagi.tv/playlist.m3u8";
let l6 = "https://sportsgrid-klowdtv.amagi.tv/playlist.m3u8";
let l7 = "https://sportsgrid-klowdtv.amagi.tv/playlist.m3u8";
let l8 = "https://sportsgrid-klowdtv.amagi.tv/playlist.m3u8";
let l9 = "https://sportsgrid-klowdtv.amagi.tv/playlist.m3u8";
let l10 = "https://sportsgrid-klowdtv.amagi.tv/playlist.m3u8";
// O T S
let tigohn = "https://d20tezjrkz1zmc.cloudfront.net/out/v1/70c5e7b2534245f69d923065ffefd6d2/index.m3u8";
let tigohn = "https://contvanime-tcl.amagi.tv/playlist.m3u8";

function getParameterByName(name) {
                      name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
                      var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
                          results = regex.exec(location.search);
                      return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
                  }

        var srcLOAD = getParameterByName('src');
                if (srcLOAD == "#") {alert('El canal se encuentra Offline');}
                if (srcLOAD == "") {alert('El canal se encuentra Offline');}
                // E P L
                if (srcLOAD == "p1") {srcLOAD = p1;}
                if (srcLOAD == "p2") {srcLOAD = p2;}
                if (srcLOAD == "p3") {srcLOAD = p3;}
                if (srcLOAD == "p4") {srcLOAD = p4;}
                if (srcLOAD == "p5") {srcLOAD = p5;}
                if (srcLOAD == "p6") {srcLOAD = p6;}
                if (srcLOAD == "p7") {srcLOAD = p7;}
                if (srcLOAD == "p8") {srcLOAD = p8;}
                if (srcLOAD == "p9") {srcLOAD = p9;}
                if (srcLOAD == "p10") {srcLOAD = p10;}
                // L L S
                if (srcLOAD == "c1") {srcLOAD = c1;}
                if (srcLOAD == "c2") {srcLOAD = c2;}
                if (srcLOAD == "c3") {srcLOAD = c3;}
                if (srcLOAD == "c4") {srcLOAD = c4;}
                if (srcLOAD == "c5") {srcLOAD = c5;}
                if (srcLOAD == "c6") {srcLOAD = c6;}
                if (srcLOAD == "c7") {srcLOAD = c7;}
                if (srcLOAD == "c8") {srcLOAD = c8;}
                if (srcLOAD == "c9") {srcLOAD = c9;}
                if (srcLOAD == "c10") {srcLOAD = c10;}
                // S A T
                if (srcLOAD == "s1") {srcLOAD = s1;}
                if (srcLOAD == "s2") {srcLOAD = s2;}
                if (srcLOAD == "s3") {srcLOAD = s3;}
                if (srcLOAD == "s4") {srcLOAD = s4;}
                if (srcLOAD == "s5") {srcLOAD = s5;}
                if (srcLOAD == "s6") {srcLOAD = s6;}
                if (srcLOAD == "s7") {srcLOAD = s7;}
                if (srcLOAD == "s8") {srcLOAD = s8;}
                if (srcLOAD == "s9") {srcLOAD = s9;}
                if (srcLOAD == "s10") {srcLOAD = s10;}
                // B D L
                if (srcLOAD == "b1") {srcLOAD = b1;}
                if (srcLOAD == "b2") {srcLOAD = b2;}
                if (srcLOAD == "b3") {srcLOAD = b3;}
                if (srcLOAD == "b4") {srcLOAD = b4;}
                if (srcLOAD == "b5") {srcLOAD = b5;}
                if (srcLOAD == "b6") {srcLOAD = b6;}
                if (srcLOAD == "b7") {srcLOAD = b7;}
                if (srcLOAD == "b8") {srcLOAD = b8;}
                if (srcLOAD == "b9") {srcLOAD = b9;}
                if (srcLOAD == "b10") {srcLOAD = b10;}
                // L G 1
                if (srcLOAD == "l1") {srcLOAD = l1;}
                if (srcLOAD == "l2") {srcLOAD = l2;}
                if (srcLOAD == "l3") {srcLOAD = l3;}
                if (srcLOAD == "l4") {srcLOAD = l4;}
                if (srcLOAD == "l5") {srcLOAD = l5;}
                if (srcLOAD == "l6") {srcLOAD = l6;}
                if (srcLOAD == "l7") {srcLOAD = l7;}
                if (srcLOAD == "l8") {srcLOAD = l8;}
                if (srcLOAD == "l9") {srcLOAD = l9;}
                if (srcLOAD == "l10") {srcLOAD = l10;}
                // O T S
                if (srcLOAD == "tigohn") {srcLOAD = tigohn;}
