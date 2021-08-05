window.onload = function() {
             var player = new Clappr.Player({
                 source: window.atob(srcLOAD),
                 parentId: '#player',
                 mimeType: 'audio/mpeg',
                 watermark: "https://i.ibb.co/kqmptsD/iRTVW.png", 
                 position: 'top-left',
                 plugins: [LevelSelector, ChromecastPlugin, ClapprPip.PipButton, ClapprPip.PipPlugin, DashShakaPlayback, Clappr.MediaControl, PlaybackRatePlugin],
                 events: {onReady: function() {var plugin = this.getPlugin('click_to_pause'); plugin && plugin.disable();},},
                 height: '100%',
                 width: '100%',
                 autoPlay: false,
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
let p1 = "aHR0cHM6Ly9zcG9ydHNncmlkLWtsb3dkdHYuYW1hZ2kudHYvcGxheWxpc3QubTN1OA==";
let p2 = "aHR0cHM6Ly9zcG9ydHNncmlkLWtsb3dkdHYuYW1hZ2kudHYvcGxheWxpc3QubTN1OA==";
let p3 = "aHR0cHM6Ly9zcG9ydHNncmlkLWtsb3dkdHYuYW1hZ2kudHYvcGxheWxpc3QubTN1OA==";
let p4 = "aHR0cHM6Ly9zcG9ydHNncmlkLWtsb3dkdHYuYW1hZ2kudHYvcGxheWxpc3QubTN1OA==";
let p5 = "aHR0cHM6Ly9zcG9ydHNncmlkLWtsb3dkdHYuYW1hZ2kudHYvcGxheWxpc3QubTN1OA==";
let p6 = "aHR0cHM6Ly9zcG9ydHNncmlkLWtsb3dkdHYuYW1hZ2kudHYvcGxheWxpc3QubTN1OA==";
let p7 = "aHR0cHM6Ly9zcG9ydHNncmlkLWtsb3dkdHYuYW1hZ2kudHYvcGxheWxpc3QubTN1OA==";
let p8 = "aHR0cHM6Ly9zcG9ydHNncmlkLWtsb3dkdHYuYW1hZ2kudHYvcGxheWxpc3QubTN1OA==";
let p9 = "aHR0cHM6Ly9zcG9ydHNncmlkLWtsb3dkdHYuYW1hZ2kudHYvcGxheWxpc3QubTN1OA==";
let p10 = "aHR0cHM6Ly9zcG9ydHNncmlkLWtsb3dkdHYuYW1hZ2kudHYvcGxheWxpc3QubTN1OA==";
// LALIGA
let c1 = "aHR0cHM6Ly9zcG9ydHNncmlkLWtsb3dkdHYuYW1hZ2kudHYvcGxheWxpc3QubTN1OA==";
let c2 = "aHR0cHM6Ly9zcG9ydHNncmlkLWtsb3dkdHYuYW1hZ2kudHYvcGxheWxpc3QubTN1OA==";
let c3 = "aHR0cHM6Ly9zcG9ydHNncmlkLWtsb3dkdHYuYW1hZ2kudHYvcGxheWxpc3QubTN1OA==";
let c4 = "aHR0cHM6Ly9zcG9ydHNncmlkLWtsb3dkdHYuYW1hZ2kudHYvcGxheWxpc3QubTN1OA==";
let c5 = "aHR0cHM6Ly9zcG9ydHNncmlkLWtsb3dkdHYuYW1hZ2kudHYvcGxheWxpc3QubTN1OA==";
let c6 = "aHR0cHM6Ly9zcG9ydHNncmlkLWtsb3dkdHYuYW1hZ2kudHYvcGxheWxpc3QubTN1OA==";
let c7 = "aHR0cHM6Ly9zcG9ydHNncmlkLWtsb3dkdHYuYW1hZ2kudHYvcGxheWxpc3QubTN1OA==";
let c8 = "aHR0cHM6Ly9zcG9ydHNncmlkLWtsb3dkdHYuYW1hZ2kudHYvcGxheWxpc3QubTN1OA==";
let c9 = "aHR0cHM6Ly9zcG9ydHNncmlkLWtsb3dkdHYuYW1hZ2kudHYvcGxheWxpc3QubTN1OA==";
let c10 = "aHR0cHM6Ly9zcG9ydHNncmlkLWtsb3dkdHYuYW1hZ2kudHYvcGxheWxpc3QubTN1OA==";
// SERIE A
let s1 = "aHR0cHM6Ly9zcG9ydHNncmlkLWtsb3dkdHYuYW1hZ2kudHYvcGxheWxpc3QubTN1OA==";
let s2 = "aHR0cHM6Ly9zcG9ydHNncmlkLWtsb3dkdHYuYW1hZ2kudHYvcGxheWxpc3QubTN1OA==";
let s3 = "aHR0cHM6Ly9zcG9ydHNncmlkLWtsb3dkdHYuYW1hZ2kudHYvcGxheWxpc3QubTN1OA==";
let s4 = "aHR0cHM6Ly9zcG9ydHNncmlkLWtsb3dkdHYuYW1hZ2kudHYvcGxheWxpc3QubTN1OA==";
let s5 = "aHR0cHM6Ly9zcG9ydHNncmlkLWtsb3dkdHYuYW1hZ2kudHYvcGxheWxpc3QubTN1OA==";
let s6 = "aHR0cHM6Ly9zcG9ydHNncmlkLWtsb3dkdHYuYW1hZ2kudHYvcGxheWxpc3QubTN1OA==";
let s7 = "aHR0cHM6Ly9zcG9ydHNncmlkLWtsb3dkdHYuYW1hZ2kudHYvcGxheWxpc3QubTN1OA==";
let s8 = "aHR0cHM6Ly9zcG9ydHNncmlkLWtsb3dkdHYuYW1hZ2kudHYvcGxheWxpc3QubTN1OA==";
let s9 = "aHR0cHM6Ly9zcG9ydHNncmlkLWtsb3dkdHYuYW1hZ2kudHYvcGxheWxpc3QubTN1OA==";
let s10 = "aHR0cHM6Ly9zcG9ydHNncmlkLWtsb3dkdHYuYW1hZ2kudHYvcGxheWxpc3QubTN1OA==";
// BUNDESLIGA
let b1 = "aHR0cHM6Ly9zcG9ydHNncmlkLWtsb3dkdHYuYW1hZ2kudHYvcGxheWxpc3QubTN1OA==";
let b2 = "aHR0cHM6Ly9zcG9ydHNncmlkLWtsb3dkdHYuYW1hZ2kudHYvcGxheWxpc3QubTN1OA==";
let b3 = "aHR0cHM6Ly9zcG9ydHNncmlkLWtsb3dkdHYuYW1hZ2kudHYvcGxheWxpc3QubTN1OA==";
let b4 = "aHR0cHM6Ly9zcG9ydHNncmlkLWtsb3dkdHYuYW1hZ2kudHYvcGxheWxpc3QubTN1OA==";
let b5 = "aHR0cHM6Ly9zcG9ydHNncmlkLWtsb3dkdHYuYW1hZ2kudHYvcGxheWxpc3QubTN1OA==";
let b6 = "aHR0cHM6Ly9zcG9ydHNncmlkLWtsb3dkdHYuYW1hZ2kudHYvcGxheWxpc3QubTN1OA==";
let b7 = "aHR0cHM6Ly9zcG9ydHNncmlkLWtsb3dkdHYuYW1hZ2kudHYvcGxheWxpc3QubTN1OA==";
let b8 = "aHR0cHM6Ly9zcG9ydHNncmlkLWtsb3dkdHYuYW1hZ2kudHYvcGxheWxpc3QubTN1OA==";
let b9 = "aHR0cHM6Ly9zcG9ydHNncmlkLWtsb3dkdHYuYW1hZ2kudHYvcGxheWxpc3QubTN1OA==";
let b10 = "aHR0cHM6Ly9zcG9ydHNncmlkLWtsb3dkdHYuYW1hZ2kudHYvcGxheWxpc3QubTN1OA==";
// LIGUE 1
let l1 = "aHR0cHM6Ly9zcG9ydHNncmlkLWtsb3dkdHYuYW1hZ2kudHYvcGxheWxpc3QubTN1OA==";
let l2 = "aHR0cHM6Ly9zcG9ydHNncmlkLWtsb3dkdHYuYW1hZ2kudHYvcGxheWxpc3QubTN1OA==";
let l3 = "aHR0cHM6Ly9zcG9ydHNncmlkLWtsb3dkdHYuYW1hZ2kudHYvcGxheWxpc3QubTN1OA==";
let l4 = "aHR0cHM6Ly9zcG9ydHNncmlkLWtsb3dkdHYuYW1hZ2kudHYvcGxheWxpc3QubTN1OA==";
let l5 = "aHR0cHM6Ly9zcG9ydHNncmlkLWtsb3dkdHYuYW1hZ2kudHYvcGxheWxpc3QubTN1OA==";
let l6 = "aHR0cHM6Ly9zcG9ydHNncmlkLWtsb3dkdHYuYW1hZ2kudHYvcGxheWxpc3QubTN1OA==";
let l7 = "aHR0cHM6Ly9zcG9ydHNncmlkLWtsb3dkdHYuYW1hZ2kudHYvcGxheWxpc3QubTN1OA==";
let l8 = "aHR0cHM6Ly9zcG9ydHNncmlkLWtsb3dkdHYuYW1hZ2kudHYvcGxheWxpc3QubTN1OA==";
let l9 = "aHR0cHM6Ly9zcG9ydHNncmlkLWtsb3dkdHYuYW1hZ2kudHYvcGxheWxpc3QubTN1OA==";
let l10 = "aHR0cHM6Ly9zcG9ydHNncmlkLWtsb3dkdHYuYW1hZ2kudHYvcGxheWxpc3QubTN1OA==";
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