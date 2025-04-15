let contador = 0;

    function atualizarContador() {
      document.getElementById("contador").innerText = contador;
    }

    function adicionar() {
      contador++;
      atualizarContador();
    }

    function adicionarDobro() {
      if (contador > 0) {
        contador--;
        atualizarContador();
      }
    }

    function valorfixo() {
      contador = 0;
      atualizarContador();
    }