import { Injectable } from '@nestjs/common';
import { CreateQuestionDto } from '../dto/create-question.dto';
import { UpdateQuestionDto } from '../dto/update-question.dto';
import { MongoClientConfig } from 'src/config/mongoClient.config';
import { QuestionEntity } from '../entities/question.entity';
import { ObjectId } from 'mongodb';

@Injectable()
export class QuestionService {
  private readonly dbName: string = 'e-learning';
  private readonly collectionName: string = 'question';

  constructor(private readonly mongoClientConfig: MongoClientConfig) {}

  async create(createQuestionDto: CreateQuestionDto) {
    const client = await this.mongoClientConfig.connect();
    try {
      const db = client.db(this.dbName);
      const collection = db.collection<QuestionEntity>(this.collectionName);
      await collection.insertOne(createQuestionDto);
      return {
        sucess: true,
        message: `Questão} criada com sucesso`,
      };
    } catch (error) {
      throw new Error(`Erro ao criar a questão`);
    } finally {
      await this.mongoClientConfig.close();
    }
  }

  async findAll() {
    const client = await this.mongoClientConfig.connect();
    try {
      const db = client.db(this.dbName);
      const collection = db.collection<QuestionEntity>(this.collectionName);
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
      const collection = db.collection<QuestionEntity>(this.collectionName);
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

  async update(id: string, updateQuestionDto: UpdateQuestionDto) {
    const client = await this.mongoClientConfig.connect();
    try {
      const db = client.db(this.dbName);
      const collection = db.collection<QuestionEntity>(this.collectionName);
      await collection.updateOne(
        {
          _id: new ObjectId(id),
        },
        { $set: updateQuestionDto },
      );
      return {
        sucess: true,
        message: `Questão atualizada com sucesso`,
        data: updateQuestionDto,
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
      const collection = db.collection<QuestionEntity>(this.collectionName);
      await collection.deleteOne({
        _id: new ObjectId(id),
      });
      return {
        sucess: true,
        message: `Questão deletada com sucesso`,
      };
    } catch (error) {
      throw error;
    } finally {
      await this.mongoClientConfig.close();
    }
  }
}
