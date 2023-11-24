import { config } from "../config/Constants";
import mongoose from "mongoose";

export class MongoConnection {
  public async connect(): Promise<void> {
    try {
      await mongoose.connect(config.MONGO_CONNECTION, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log("Database connected");
    } catch (err) {
      if (err instanceof Error) {
        console.error(`Erro ao conectar ao banco de dados: ${err.message}`);
      } else {
        console.error(
          `Erro desconhecido ao conectar ao banco de dados: ${err}`
        );
      }
      process.exit(1);
    }
  }
}
