const express = require("express"); // pacotes a serem utilizados
const router = express.Router();
const cors = require("cors");
router.use(cors());

const dbKnex = require("../data/db_config"); // dados de conexão com o banco de dados

// método get é usado para consulta
router.get("/", async (req, res) => {
    try {
        // para obter as produtos pode-se utilizar .select().orderBy() ou apenas .orderBy()
        const produtos = await dbKnex("produtos").orderBy("nome", "asc");
        res.status(200).json(produtos); // retorna statusCode ok e os dados
    } catch (error) {
        res.status(400).json({ msg: error.message }); // retorna status de erro e msg
    }
});

// Método post é usado para inclusão
router.post("/", async (req, res) => {
    // faz a desestruturação dos dados recebidos no corpo da requisição
    const { nome, descricao, preco, validade} = req.body;

    // se algum dos campos não foi passado, irá enviar uma mensagem de erro e retornar
    if (!nome || !email ) {
        res.status(400).json({ msg: "Enviar nome e email da pessoa" });
        return;
    }

    // caso ocorra algum erro na inclusão, o programa irá capturar (catch) o erro
    try {
        // insert, faz a inserção na tabela produtos (e retorna o id do registro inserido)
        const novo = await dbKnex("produtos").insert({ nome, descricao, preco, validade});
        res.status(201).json({ id: novo[0] }); // statusCode indica Create
    } catch (error) {
        res.status(400).json({ msg: error.message }); // retorna status de erro e msg
    }
});

router.get("/produto/:id", async (req, res) => {
    const id = req.params.id; // palavra do título ou autor a pesquisar
    try {
        // para filtrar registros, utiliza-se .where(), com suas variantes
        const produtos = await dbKnex("produtos")
            .where("id", id);
        res.status(200).json(produtos); // retorna statusCode ok e os dados
    } catch (error) {
        res.status(400).json({ msg: error.message }); // retorna status de erro e msg
    }
});

// Método put é usado para alteração. id indica o registro a ser alterado
router.put("/:id", async (req, res) => {
    const id = req.params.id; // ou const { id } = req.params
    const { nome, descricao, preco, validade } = req.body; // campo a ser alterado
    try {
        // altera o campo preco, no registro cujo id coincidir com o parâmetro passado
        await dbKnex("produtos").update({ nome, descricao, preco, validade}).where("id", id); // ou .where({ id })
        res.status(200).json(); // statusCode indica Ok
    } catch (error) {
        res.status(400).json({ msg: error.message }); // retorna status de erro e msg
    }
});

// Método delete é usado para exclusão
router.delete("/:id", async (req, res) => {
    const { id } = req.params; // id do registro a ser excluído
    try {
        await dbKnex("produtos").del().where({ id });
        res.status(200).json(); // statusCode indica Ok
    } catch (error) {
        res.status(400).json({ msg: error.message }); // retorna status de erro e msg
    }
});

module.exports = router;