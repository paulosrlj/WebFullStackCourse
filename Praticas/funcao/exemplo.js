const pessoa = {
    nome: "Paulo",
    idade: 18,
    Ocupação: "Programador"
};
console.log(pessoa.nome)

function objPessoa (nome, idade) {
    this.nome = nome;
    this.idade = idade;
}

let Paulo = new objPessoa('Paulo', 18)
console.log(Paulo.nome)