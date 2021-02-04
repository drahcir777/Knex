const database = require('./database');

var dados = [{
  nome: 'GTA V SAN ANDREAS',
  preco: 10.99
}, {
  nome: 'GOD OF WAR',
  preco: 56.09
}, {
  nome: 'EFOOTBAL PES 2021',
  preco: 340.0
},
{
  nome: 'CS GO',
  preco: 12.30
},
{
  nome: 'MOSTER HUNTER',
  preco: 89.30
},
{
  nome: 'FREE FIRE',
  preco: 1.99
}
]
async function inserir(dados) {

  try {
    const data = await database.insert(dados).into("games")
    console.log(data)
  } catch (error) {
    console.log("Error: ", error)
  }

}

async function selecionar() {
  try {
    const data = await database.select(["id", 'preco']).table("games");
    console.log(data)
  } catch (error) {
    console.log("Error", error)
  }
}

async function selecionarWhere() {
  try {
    const data = await database
      .where({ nome: "GTA V" })
      .whereRaw("preco > 200")
      .table("games")
    console.log(data)
  } catch (error) {
    console.log("Error", error)
  }
}

async function Deletar() {
  try {
    const data = await database
      .where({ id: 2 })
      .delete()
      .table("games")
    console.log(data)
  } catch (error) {
    console.log("Error", error)
  }
}

async function Atualizar() {
  try {
    const data = await database
      .where({ id: 3 })
      .update({ preco: 1.0 })
      .table("games")
    console.log(data)
  } catch (error) {
    console.log("Error", error)
  }
}

async function Ordenando() {
  try {
    const data = await database
      .select()
      .table("games")
      .orderBy("nome", "asc")
    console.log(data)
  } catch (error) {
    console.log("Error", error)
  }
}

async function Inserindo1N1() {
  try {
    const data = await database
      .insert({ nome: "Garena", game_id: 10 })
      .table("estudios")
    console.log(data)
  } catch (error) {
    console.log("Error", error)
  }
}

async function Buscando1N1() {
  try {
    const data = await database
      .select(["games.nome AS Game", "estudios.nome as Estudio"]).table("games").innerJoin("estudios", "estudios.game_id", "games.id")
    console.log(data);
  } catch (error) {
    console.log("Error", error)
  }
}
//inserir(dados);
//selecionar();
//selecionarWhere();
//Deletar();
//Atualizar();
//Ordenando();
//Inserindo1N1();
Buscando1N1();
