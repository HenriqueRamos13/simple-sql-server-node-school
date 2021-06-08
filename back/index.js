// IMPORTANDO DEPENDENCIAS
const app = require("express")();
const cors = require("cors");
const sql = require("mssql");

let db = null;

// PARA RODAR O SERVIDOR
// INSTALAR NPM E NODE NO COMPUTADOR
// ENTRAR NA PASTA DO BACK END PELO CONSOLE DO COMPUTADOR
// RODE O BANCO DE DADOS PRIMEIRAMENTE
// EM SEGUIDA DIGITAR OS SEGUINTES COMANDOS:
// npm install
// npm run dev
// VERIFIQUE O CONSOLE PARA VER SE DEU ALGUM ERRO OU SE O SERVIDOR ESTA RODANDO

// FUNCAO DE CONECTAR NO BANCO DE DADOS
const connect = () => {
  // ALTERAR DADOS DE CONEXAO COM O BANCO
  sql
    .connect({
      user: "root",
      password: "",
      server: "localhost",
      database: "ABD_TRAB",
    })
    .then((conn) => {
      console.log("conectou");
      db = conn;
    })
    .catch((err) => console.log("nao conectou\n", err));
};
connect();

// CRIANDO SERVIDOR
app.use(require("express").json());
app.use(cors());

// DADOS FALSOS
const fakeDataEncs = [
  {
    EncID: 1,
    ClienteID: 1,
    Nome: "Joao",
    Morada: "Rua xxxx",
  },
  {
    EncID: 2,
    ClienteID: 2,
    Nome: "Joao",
    Morada: "Rua xxxx",
  },
  {
    EncID: 3,
    ClienteID: 3,
    Nome: "Joao",
    Morada: "Rua xxxx",
  },
  {
    EncID: 4,
    ClienteID: 4,
    Nome: "Joao",
    Morada: "Rua xxxx",
  },
  {
    EncID: 5,
    ClienteID: 5,
    Nome: "Joao",
    Morada: "Rua xxxx",
  },
  {
    EncID: 6,
    ClienteID: 6,
    Nome: "Joao",
    Morada: "Rua xxxx",
  },
];

// DADOS FALSOS
const fakeDataLines = [
  {
    EncID: 1,
    ProdutoID: 1,
    Designacao: "EXEMPLO",
    Preco: Math.floor(Math.random() * 200),
    Qtd: Math.floor(Math.random() * 5),
  },
  {
    EncID: 2,
    ProdutoID: 2,
    Designacao: "EXEMPLO",
    Preco: Math.floor(Math.random() * 200),
    Qtd: Math.floor(Math.random() * 5),
  },
  {
    EncID: 3,
    ProdutoID: 3,
    Designacao: "EXEMPLO",
    Preco: Math.floor(Math.random() * 200),
    Qtd: Math.floor(Math.random() * 5),
  },
  {
    EncID: 4,
    ProdutoID: 4,
    Designacao: "EXEMPLO",
    Preco: Math.floor(Math.random() * 200),
    Qtd: Math.floor(Math.random() * 5),
  },
  {
    EncID: 5,
    ProdutoID: 5,
    Designacao: "EXEMPLO",
    Preco: Math.floor(Math.random() * 200),
    Qtd: Math.floor(Math.random() * 5),
  },
  {
    EncID: 6,
    ProdutoID: 6,
    Designacao: "EXEMPLO",
    Preco: Math.floor(Math.random() * 200),
    Qtd: Math.floor(Math.random() * 5),
  },
];

// ROTA DE API PARA PEGAR OS DADOS
app.use("/alldata", async (_, res) => {
  // DESCOMENTAR BLOCO A BAIXO
  //   db.request()
  //     //QUERY PARA BUSCAR DADOS NA TABELA ENCOMENDA
  //     .query("SELECT * FROM Encomenda")
  //     .then((res1) => {
  //       // VERIFICAR NO CONSOLE SE OS DADOS RETORNADOS ESTAO NA VARIAVEL res1 OU res1.recordset
  //       console.log(res1, res1.recordset);
  //       db.request()
  //         //QUERY PARA BUSCAR DADOS NA TABELA ENCLINHA
  //         .query("SELECT * FROM EncLinha")
  //         .then((res2) => {
  //           // VERIFICAR NO CONSOLE SE OS DADOS RETORNADOS ESTAO NA VARIAVEL res2 OU res2.recordset
  //           console.log(res2, res2.recordset);
  //           // RETORNA PARA O FRONT END OS DADOS
  //           res.status(200).json({ encs: res1.recordset, lines: res2.recordset });
  //         })
  //         .catch((err) => console.log("erro ao executar query 1", err));
  //     })
  //     .catch((err) => console.log("erro ao executar query 2", err));

  //COMENTAR LINHA A BAIXO
  res.status(200).json({ encs: fakeDataEncs, lines: fakeDataLines });
});

app.listen(process.env.PORT || 3001, () =>
  console.log("Servidor rodando na porta 3001")
);
