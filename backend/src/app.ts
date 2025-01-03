import express, { Request, Response, NextFunction } from "express";
import userRoutes from "./modules/user/user.routes";

// Criação da aplicação Express
const app = express();

// Middleware para parse de JSON
app.use(express.json());

// Adiciona as rotas de usuário
app.use("/users", userRoutes);

// Rota de teste para verificar se a API está funcionando
app.get("/", (req: Request, res: Response) => {
  res.status(200).json({ message: "API está funcionando!" });
});

// Middleware de tratamento de erros
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).json({ message: "Algo deu errado no servidor." });
});

export default app;