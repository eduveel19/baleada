window.onload = function() {
             var player = new Clappr.Player({
                 source: srcLOAD,
                 parentId: '#player',
                 mimeType: 'audio/mpeg',
                 watermark: "https://i.ibb.co/kqmptsD/iRTVW.png", 
                 position: 'top-left',
                 plugins: [LevelSelector, ChromecastPlugin, ClapprPip.PipButton, ClapprPip.PipPlugin, DashShakaPlayback, Clappr.MediaControl, PlaybackRatePlugin],
                 events: {onReady: function() {var plugin = this.getPlugin('click_to_pause'); plugin && plugin.disable();},},
                 height: '100%',
                 width: '100%',
                 autoPlay: true,
                 mute: true,
                 shakaConfiguration: {
                 manifest: {retryParameters: {maxAttempts: Infinity}},
                 streaming: {retryParameters: {maxAttempts: Infinity}},
                 drm: {retryParameters: {maxAttempts: Infinity}},
                 },
                 playbackRateConfig: {
                 defaultValue: '1.00x',
                 options: [
                 {value: '0.10', label: '0.10x'},
                 {value: '0.25', label: '0.25x'},
                 {value: '0.50', label: '0.50x'},
                 {value: '0.75', label: '0.75x'},
                 {value: '1.00', label: '1.00x'},
                 {value: '1.25', label: '1.25x'},
                 {value: '1.50', label: '1.50x'},
                 {value: '1.75', label: '1.75x'},
                 {value: '2.00', label: '2.00x'},
                 ]
                 },
             });
         };
// PREMIER
let p1 = "https://sportsgrid-klowdtv.amagi.tv/playlist.m3u8";
let p2 = "https://sportsgrid-klowdtv.amagi.tv/playlist.m3u8";
let p3 = "https://sportsgrid-klowdtv.amagi.tv/playlist.m3u8";
let p4 = "https://sportsgrid-klowdtv.amagi.tv/playlist.m3u8";
let p5 = "https://sportsgrid-klowdtv.amagi.tv/playlist.m3u8";
let p6 = "https://sportsgrid-klowdtv.amagi.tv/playlist.m3u8";
let p7 = "https://sportsgrid-klowdtv.amagi.tv/playlist.m3u8";
let p8 = "https://sportsgrid-klowdtv.amagi.tv/playlist.m3u8";
let p9 = "https://sportsgrid-klowdtv.amagi.tv/playlist.m3u8";
let p10 = "https://sportsgrid-klowdtv.amagi.tv/playlist.m3u8";
// LALIGA
let c1 = "https://sportsgrid-klowdtv.amagi.tv/playlist.m3u8";
let c2 = "https://sportsgrid-klowdtv.amagi.tv/playlist.m3u8";
let c3 = "https://sportsgrid-klowdtv.amagi.tv/playlist.m3u8";
let c4 = "https://sportsgrid-klowdtv.amagi.tv/playlist.m3u8";
let c5 = "https://sportsgrid-klowdtv.amagi.tv/playlist.m3u8";
let c6 = "https://sportsgrid-klowdtv.amagi.tv/playlist.m3u8";
let c7 = "https://sportsgrid-klowdtv.amagi.tv/playlist.m3u8";
let c8 = "https://sportsgrid-klowdtv.amagi.tv/playlist.m3u8";
let c9 = "https://sportsgrid-klowdtv.amagi.tv/playlist.m3u8";
let c10 = "https://sportsgrid-klowdtv.amagi.tv/playlist.m3u8";
// SERIE A
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
// BUNDESLIGA
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
// LIGUE 1
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
function getParameterByName(name) {
                      name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
                      var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
                          results = regex.exec(location.search);
                      return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
                  }

        var srcLOAD = getParameterByName('src');
                if (srcLOAD == "#") {alert('El canal se encuentra Offline');}
                if (srcLOAD == "") {alert('El canal se encuentra Offline');}
                // F O X F C H A N N I F
                if (srcLOAD == "p1") {srcLOAD = p1;}