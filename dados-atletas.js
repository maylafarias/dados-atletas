class Atleta {
    constructor(nome, idade, peso, altura, notas) {
      this.nome = nome;
      this.idade = idade;
      this.peso = peso;
      this.altura = altura;
      this.notas = notas; 
    }
    obtemNome() {
        return "Nome: " + this.nome
    };
    obtemIdade(){
        return "Idade: " + this.idade
    };
    obtemPeso() {
        return "Peso: " + this.peso
    };
    obtemAltura() {
        return "Altura: " + this.altura
    };
    obtemNotas() {
        return "Notas: " + this.notas
    };
    obtemCategoria() {
       if (this.idade >=16 && this.idade <=30) {
        return 'Categoria: Adulto';
    } else if (this.idade >= 14 && this.idade <=15) {
        return 'Categoria: Intermediário';
    } else if (this.idade >= 12 && this.idade <= 13) {
        return 'Categoria: Juvenil';
    } else if (this.idade >= 9 && this.idade <= 11) {
        return 'Categoria: Infantil';
        } else return 'Categoria: Sem categoria';
};
 obtemIMC() {
     return 'IMC: ' + this.peso / (this.altura * this.altura)
 };


 obtemMediaValida() {
   this.notas.sort(function(a, b) {
            return a - b;
        })
        return "Média Válida: " + this.notas.slice(1,4).reduce((a, b) => a + b, 0) / 3
 }

 };

const atleta = new Atleta("César Abascal", 30, 80, 1.70, [10, 9.34, 8.42, 10, 7.88]);

console.log(atleta.obtemNome())
console.log(atleta.obtemIdade())
console.log(atleta.obtemPeso())
console.log(atleta.obtemAltura())
console.log(atleta.obtemNotas())
console.log(atleta.obtemCategoria())
console.log(atleta.obtemIMC())
console.log(atleta.obtemMediaValida())