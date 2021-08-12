var GAnalytics = document.createElement('script');
GAnalytics.onload = function() {
  console.log("Script loaded and ready");
};
GAnalytics.src = "https://www.googletagmanager.com/gtag/js?id=UA-174658361-1";
document.getElementsByTagName('head')[0].appendChild(GAnalytics);

window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'UA-174658361-1');