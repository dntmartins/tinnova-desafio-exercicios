var Urna = {
    totalEleitores: 1000,
    votosValidos : 800,
    votosBrancos : 150,
    votosNulos : 50,

    calculaPercentual : function(value) {
      return `${value / this.totalEleitores * 100}%`;
    },

    getPercentualVotosValidos : function() {
      return 'Votos válidos = '.concat(this.calculaPercentual(this.votosValidos));
    },

    getPercentualVotosBrancos : function() {
      return 'Votos brancos = '.concat(this.calculaPercentual(this.votosBrancos));
    },

    getPercentualVotosNulos : function() {
      return 'Votos nulos = '.concat(this.calculaPercentual(this.votosNulos));
    },
  };

  console.log(Urna.getPercentualVotosValidos());
  console.log(Urna.getPercentualVotosBrancos());
  console.log(Urna.getPercentualVotosNulos());