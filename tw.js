function getParameterByName(name) {
                      name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
                      var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
                          results = regex.exec(location.search);
                      return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
                  }

        var srcLOAD = getParameterByName('src');
                if (srcLOAD == "#") {alert('El canal se encuentra Offline');}
                if (srcLOAD == "") {alert('El canal se encuentra Offline');}

  var options = {
    width: '100%',
    height: '100%',
    channel: srcLOAD,
    autoplay: true,
    muted: false,
    // Only needed if this page is going to be embedded on other websites
    parent: ["127.0.0.1", "slowdsports.000webhostapp.com", "slowdsports.github.io"]
  };
  var player = new Twitch.Player("twitchPlayer", options);
  player.setVolume(0.5);