import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { MongoClient, ServerApiVersion } from 'mongodb';

@Injectable()
export class MongoClientConfig {
  private client: MongoClient;

  constructor(private configService: ConfigService) {
    this.client = new MongoClient(
      this.configService.get<string>('MONGO_URLSTRING'),
      {
        serverApi: {
          version: ServerApiVersion.v1,
          strict: true,
          deprecationErrors: true,
        },
      },
    );
  }

  async connect() {
    try {
      await this.client.connect();
      console.log('Conectado ao MongoDB com sucesso');
      return this.client;
    } catch (error) {
      console.error('Erro ao conectar ao MongoDB:', error);
      throw error;
    }
  }

  async close() {
    try {
      await this.client.close();
      console.log('Conexão com MongoDB fechada');
    } catch (error) {
      console.error('Erro ao fechar a conexão com MongoDB:', error);
      throw error;
    }
  }
}
