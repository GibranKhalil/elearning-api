import { Injectable } from '@nestjs/common';
import { CreateLearningPathDto } from '../dto/create-learning-path.dto';
import { UpdateLearningPathDto } from '../dto/update-learning-path.dto';
import { MongoClientConfig } from 'src/config/mongoClient.config';
import { LearningPathEntity } from '../entities/learning-path.entity';
import { ObjectId } from 'mongodb';

@Injectable()
export class LearningPathService {
  private readonly dbName: string = 'e-learning';
  private readonly collectionName: string = 'learning-path';

  constructor(private readonly mongoClientConfig: MongoClientConfig) {}

  async create(createLearningPathDto: CreateLearningPathDto) {
    const client = this.mongoClientConfig.getClient();
    try {
      const db = client.db(this.dbName);
      const collection = db.collection<LearningPathEntity>(this.collectionName);
      await collection.insertOne(createLearningPathDto);
      return {
        sucess: true,
        message: `Formação ${createLearningPathDto.name} criada com sucesso`,
      };
    } catch (error) {
      throw new Error(`Erro ao criar a formação ${createLearningPathDto.name}`);
    }
  }

  async findAll() {
    const client = this.mongoClientConfig.getClient();
    try {
      const db = client.db(this.dbName);
      const collection = db.collection<LearningPathEntity>(this.collectionName);
      const response = await collection.find({}).toArray();
      return response;
    } catch (error) {
      throw error;
    }
  }

  async findOne(id: string) {
    const client = this.mongoClientConfig.getClient();
    try {
      const db = client.db(this.dbName);
      const collection = db.collection<LearningPathEntity>(this.collectionName);
      const response = await collection.findOne({
        _id: new ObjectId(id),
      });
      return response;
    } catch (error) {
      throw error;
    }
  }

  async update(id: string, updateLearningPathDto: UpdateLearningPathDto) {
    const client = this.mongoClientConfig.getClient();
    try {
      const db = client.db(this.dbName);
      const collection = db.collection<LearningPathEntity>(this.collectionName);
      await collection.updateOne(
        {
          _id: new ObjectId(id),
        },
        { $set: updateLearningPathDto },
      );
      return {
        sucess: true,
        message: `Formação ${updateLearningPathDto.name} atualizada com sucesso`,
        data: updateLearningPathDto,
      };
    } catch (error) {
      throw error;
    }
  }

  async remove(id: string) {
    const client = this.mongoClientConfig.getClient();
    try {
      const db = client.db(this.dbName);
      const collection = db.collection<LearningPathEntity>(this.collectionName);
      await collection.deleteOne({
        _id: new ObjectId(id),
      });
      return {
        sucess: true,
        message: `Formação deletada com sucesso`,
      };
    } catch (error) {
      throw error;
    }
  }
}
