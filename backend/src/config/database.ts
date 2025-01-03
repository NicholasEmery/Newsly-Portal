import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";

const connectToDatabase = async () => {
  const mongoURI = process.env.MONGO_URI;

  if (!mongoURI) {
    console.error("A variável MONGO_URI não foi definida no arquivo .env");
    process.exit(1);
  }

  try {
    await mongoose.connect(mongoURI);
    console.log("Banco de Dados conectado!");
  } catch (error) {
    console.error("Erro ao conectar ao MongoDB:", error);
    process.exit(1);
  }
};

export default connectToDatabase;