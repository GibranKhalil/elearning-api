import { Injectable } from '@nestjs/common';
import { CreateAlternativeDto } from '../dto/create-alternative.dto';
import { UpdateAlternativeDto } from '../dto/update-alternative.dto';
import { MongoClientConfig } from 'src/config/mongoClient.config';
import { AlternativeEntity } from '../entities/alternative.entity';
import { ObjectId } from 'mongodb';

@Injectable()
export class AlternativeService {
  private readonly dbName: string = 'e-learning';
  private readonly collectionName: string = 'alternative';

  constructor(private readonly mongoClientConfig: MongoClientConfig) {}

  async create(createAlternativeDto: CreateAlternativeDto) {
    const client = await this.mongoClientConfig.connect();
    try {
      const db = client.db(this.dbName);
      const collection = db.collection<AlternativeEntity>(this.collectionName);
      await collection.insertOne(createAlternativeDto);
      return {
        sucess: true,
        message: `Alternativa criada com sucesso`,
      };
    } catch (error) {
      throw new Error(`Erro ao criar a alternativa`);
    } finally {
      await this.mongoClientConfig.close();
    }
  }

  async findAll() {
    const client = await this.mongoClientConfig.connect();
    try {
      const db = client.db(this.dbName);
      const collection = db.collection<AlternativeEntity>(this.collectionName);
      const response = await collection.find({}).toArray();
      return response;
    } catch (error) {
      throw error;
    } finally {
      await this.mongoClientConfig.close();
    }
  }

  async findOne(id: string) {
    const client = await this.mongoClientConfig.connect();
    try {
      const db = client.db(this.dbName);
      const collection = db.collection<AlternativeEntity>(this.collectionName);
      const response = await collection.findOne({
        _id: new ObjectId(id),
      });
      return response;
    } catch (error) {
      throw error;
    } finally {
      await this.mongoClientConfig.close();
    }
  }

  async update(id: string, updateAlternativeDto: UpdateAlternativeDto) {
    const client = await this.mongoClientConfig.connect();
    try {
      const db = client.db(this.dbName);
      const collection = db.collection<AlternativeEntity>(this.collectionName);
      await collection.updateOne(
        {
          _id: new ObjectId(id),
        },
        { $set: updateAlternativeDto },
      );
      return {
        sucess: true,
        message: `Alternativa atualizada com sucesso`,
        data: updateAlternativeDto,
      };
    } catch (error) {
      throw error;
    } finally {
      await this.mongoClientConfig.close();
    }
  }

  async remove(id: string) {
    const client = await this.mongoClientConfig.connect();
    try {
      const db = client.db(this.dbName);
      const collection = db.collection<AlternativeEntity>(this.collectionName);
      await collection.deleteOne({
        _id: new ObjectId(id),
      });
      return {
        sucess: true,
        message: `Alternativa deletada com sucesso`,
      };
    } catch (error) {
      throw error;
    } finally {
      await this.mongoClientConfig.close();
    }
  }
}
