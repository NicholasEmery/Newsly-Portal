import dotenv from "dotenv";  // Carrega variáveis de ambiente
import express from "express";
import connectToDatabase from "./config/database";
import userRoutes from "./modules/user/user.routes";

// Carrega as variáveis de ambiente do arquivo .env
dotenv.config();

const app = express();

// Middleware para parse de JSON
app.use(express.json());

// Conectar ao banco de dados
connectToDatabase();

// Configuração da rota raiz
app.get("/", (req, res) => {
  res.status(200).json({ message: "API está funcionando!" });
});

// Rota de usuários
app.use("/users", userRoutes);

// Iniciar o servidor
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Servidor rodando com sucesso`);
});