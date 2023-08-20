// frida_script.js
Java.perform(function () {
    var App = Java.use("com.insecureshop.util.Util"); // Substitua pelo nome completo da sua classe

    App.verifyUserNamePassword.implementation = function (username, password) {
        console.log("\nAPRENDI A USAR ESSA PO**A");
        return true;
    };
});
