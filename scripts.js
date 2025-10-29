class Parquimetro {
    constructor() {
        this.tabela = [
            {valor: 3.00, tempo: 120},
            {valor: 1.75, tempo: 60},
            {valor: 1.00, tempo: 30}
        ];
    }

    calcula() {
        let tempo = 0;
        let valorInserido = parseFloat(document.getElementById('valor').value);
        let troco = valorInserido;
        this.tabela.sort((a, b) => b.valor - a.valor);
        
        // Verifica se o valor inserido é menor que o menor valor aceito
        const menorValor = this.tabela[this.tabela.length - 1].valor;
        if (valorInserido < menorValor) {
            alert(`O valor mínimo aceito é R$ ${menorValor.toFixed(2)}`);
            return;
        }

        for(let item of this.tabela) {
            while(troco >= item.valor) {
                troco -= item.valor;
                tempo += item.tempo;
            }
        }
        
        document.getElementById('tempo').textContent = `O tempo é de ${tempo} minutos.`;
        document.getElementById('troco').textContent = `O troco é de R$${troco.toFixed(2)}`;
    }
}

// Criar instância do parquímetro
const parquimetro = new Parquimetro();

// Função global para ser chamada pelo onClick
function calcula() {
    parquimetro.calcula();
}
