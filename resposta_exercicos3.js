var obj = {};

var pessoa = {
    nome: String,
    sobrenome: String,
    sexo: String,
    idade: Number,
    altura: Number,
    peso: Number,
    andando: Boolean,
    caminhouQuantosMetros: Number
};

pessoa.fazerAniversario = function(){
    pessoa.idade++;
}

pessoa.andar = function(m){
    pessoa.caminhouQuantosMetros += m;
    pessoa.andando = true;
}

pessoa.parar = function(){
    pessoa.andando = false;
}

pessoa.nomeCompleto = function(){
    return "Olá! meu nome é " + pessoa.nome + " " + pessoa.sobrenome + "!";
}

pessoa.mostrarIdade = function(){
    return "Olá, eu tenho " + pessoa.idade + " anos!";
}

pessoa.mostrarPeso = function(){
    return "Eu peso " + pessoa.peso + "Kg.";
}

pessoa.mostrarAltura = function(){
    return "Minha altura é " + pessoa.altura + "m.";
}
pessoa.nome = "Rafael";
pessoa.sobrenome = "Vieira";
pessoa.nomeCompleto(); // Olá, meu nome é Rafael Vieira!

pessoa.idade = 29;
pessoa.mostrarIdade(); // Olá, eu tenho 29 anos!

pessoa.peso = 80;
pessoa.mostrarPeso(); // Eu peso 80Kg.

pessoa.altura = 1.76;
pessoa.mostrarAltura(); // Minhaaltura é 1.76m."


pessoa.fazerAniversario();
pessoa.fazerAniversario();
pessoa.fazerAniversario();

pessoa.idade; // 32

pessoa.andar(30);
pessoa.andar(50);
pessoa.andar(40);

pessoa.andando; // true

pessoa.parar();

pessoa.andando; // false

pessoa.caminhouQuantosMetros; // 120

pessoa.apresentacao = function(){
    if (pessoa.sexo === "feminino") {
    var sexfem = "Olá eu sou a "; 
    return sexfem + pessoa.nomeCompleto + ", tenho " + pessoa.idade + " anos, " + pessoa.altura + ", meu peso é " + pessoa.peso + " e, só hoje, eu já caminhei " + pessoa.camihouQuantosMetros + " metros!";
    } else if (pessoa.idade === 1){
    var anos = "ano";
    return "Olá, eu sou o " + pessoa.nomeCompleto + ", tenho " + pessoa.idade + ano,  + pessoa.altura + ", meu peso é " + pessoa.peso + " e, só hoje, eu já caminhei " + pessoa.camihouQuantosMetros + " metros!";
    } else if (pessoa.caminhouQuantosMetros === 1) {
    var metro = "metro";
    return "Olá, eu sou o " + pessoa.nomeCompleto + ", tenho " + pessoa.idade + ano,  + pessoa.altura + ", meu peso é " + pessoa.peso + " e, só hoje, eu já caminhei " + pessoa.camihouQuantosMetros + metro + "!";
    } else {
    return "Olá eu sou o " + pessoa.nomeCompleto + ", tenho " + pessoa.idade + " anos, " + pessoa.altura + ", meu peso é " + pessoa.peso + " e, só hoje, eu já caminhei " + pessoa.camihouQuantosMetros + " metros!";
}

pessoa.apresentacao();