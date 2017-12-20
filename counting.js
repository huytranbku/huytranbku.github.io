Date.prototype.yyyymmdd = function() {
  var mm = this.getMonth() + 1; // getMonth() is zero-based
  var dd = this.getDate();

  return [this.getFullYear(),
          (mm>9 ? '' : '0') + mm,
          (dd>9 ? '' : '0') + dd
         ].join('');
};
document.addEventListener("DOMContentLoaded", function(event) {
  if (window.location.hostname == "localhost" || window.location.hostname=="127.0.0.1") return;
  var config = {
    apiKey: "AIzaSyBOKZlstMKI1-i50rtxlQJmx87WEMBMWZ4",
    authDomain: "myblog-f89d9.firebaseapp.com",
    databaseURL: "https://myblog-f89d9.firebaseio.com",
    projectId: "myblog-f89d9",
    storageBucket: "myblog-f89d9.appspot.com",
    messagingSenderId: "584819075341"
  };
  firebase.initializeApp(config);

  var d = new Date();
  var temp = d.yyyymmdd() + "_" + d.toTimeString().substring(0,8) + "_" + d.getTime();
  var n = temp.replace(/[^a-z0-9\_]/gi,'');

  var source = window.location.hostname + window.location.pathname.replace("/","_");
  var hostname = source.replace(/[^a-z0-9\_]/gi,'');

  firebase.database().ref('counting/' + hostname + "/" + n  ).set({
    time: d.toLocaleString()
  });
});
