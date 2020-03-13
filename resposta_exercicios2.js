function soma(x, y) {
    return x + y;
  }

  var soma = function soma(x, y) {
    return x + y;
  }
  var varSoma = soma(1, 1) + 5;

  // Qual o valor atualizado dessa variável? R: 7

  var varQualquer;

  function retornaString() {
    varQualquer = 10;
    return varQualquer = "O valor da variável agora é " + varQualquer;
  }

  retornaString();

  // Qual o retorno da função? (Use comentários de bloco) R: O valor da variável agora é 10

  function recebearg(a, b, c) {
    if (a && b && c == undefined) {
      return "Preencha todos os valores corretamente!";
    }
    return ((a * b) * c) + 2;
  }

  recebearg(5, 8);

  // Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado) R: retorna a string "Preencha todos os valores corretamente!"

  recebearg(1, 2, 3);

  // Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado) R: Passei os valores 1, 2, 3, e o resultado é 8

  function tresOpcoes(a, b, c) {
    if (a == undefined) {
      return false;
    }else if(b == undefined) {
      return a;
    }else if(c == undefined) {
      return a + b;
    }else if() {
      return (a + b) / c;
    }else
      return null;
  }
  tresOpcoes();

  
