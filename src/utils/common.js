
var functions = {
    getUTCTime: function () {
        return new Date(new Date().toUTCString());
    },
   
    

    IsLocalhost : function () {
        let isLocalhost = Boolean(
            window.location.hostname === 'localhost' ||
            // [::1] is the IPv6 localhost address.
            window.location.hostname === '[::1]' ||
            // 127.0.0.1/8 is considered localhost for IPv4.
            window.location.hostname.match(
                /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
            )
        );
    
        return isLocalhost;
    },

    
    firebaseConfig : function(){
        return  {
            apiKey: "AIzaSyB1KBSoc22JbuzK1QG6dPi9pwja3HT5j6k",
            authDomain: "airbus-caec9.firebaseapp.com",
            databaseURL: "https://airbus-caec9.firebaseio.com",
            projectId: "airbus-caec9",
            storageBucket: "airbus-caec9.appspot.com",
            messagingSenderId: "989386969928",
            appId: "1:989386969928:web:137e3d03159856fcae597d",
            measurementId: "G-B5YN1HK0N6"
          }
    }

};
 




module.exports = functions;
