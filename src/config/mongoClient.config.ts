import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { MongoClient, ServerApiVersion } from 'mongodb';

@Injectable()
export class MongoClientConfig implements OnModuleInit, OnModuleDestroy {
  private client: MongoClient;

  constructor(private configService: ConfigService) {}

  async onModuleInit() {
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
    await this.client.connect();
  }

  async onModuleDestroy() {
    await this.client.close();
  }

  getClient(): MongoClient {
    return this.client;
  }
}
