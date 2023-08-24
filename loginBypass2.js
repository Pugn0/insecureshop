Java.perform(function() {
    var Util = Java.use('com.insecureshop.util.Util'); // Substitua 'seu.pacote.Util' pelo caminho completo da classe Util

    Util.getUserCreds.implementation = function() {
        var userCreds = this.getUserCreds.call(this); // Chamando a implementação original

        // Modificando o usuário e senha
        userCreds.put("pugno", "pugno");

        return userCreds;
    };
});