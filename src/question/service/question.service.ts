import { Injectable } from '@nestjs/common';
import { CreateQuestionDto } from '../dto/create-question.dto';
import { UpdateQuestionDto } from '../dto/update-question.dto';
import { MongoClientConfig } from 'src/config/mongoClient.config';
import { QuestionEntity } from '../entities/question.entity';
import { ObjectId } from 'mongodb';
import { CreateAlternativeDto } from '../dto/create-alternative.dto';

@Injectable()
export class QuestionService {
  private readonly dbName: string = 'e-learning';
  private readonly collectionName: string = 'question';

  constructor(private readonly mongoClientConfig: MongoClientConfig) {}

  checkAlternatives(alternatives: CreateAlternativeDto[]): boolean {
    const correctAlternatives = alternatives.filter(
      (alternative) => alternative.isCorrect,
    );

    return correctAlternatives.length > 1;
  }

  checkUniqueAlternativesID(alternatives: CreateAlternativeDto[]): boolean {
    const ids = alternatives.map((alternative) => alternative.id);
    const uniqueIds = new Set(ids);

    return ids.length === uniqueIds.size;
  }

  async create(createQuestionDto: CreateQuestionDto) {
    const client = this.mongoClientConfig.getClient();
    try {
      const db = client.db(this.dbName);
      const collection = db.collection<QuestionEntity>(this.collectionName);
      if (!this.checkAlternatives(createQuestionDto.alternatives)) {
        if (this.checkUniqueAlternativesID(createQuestionDto.alternatives)) {
          await collection.insertOne(createQuestionDto);
          return {
            sucess: true,
            message: `Questão criada com sucesso`,
          };
        }
        return {
          sucess: false,
          message: `Não pode haver mais de uma alternativa com o mesmo id`,
        };
      }
      return {
        sucess: false,
        message: `Só pode haver uma alternativa correta`,
      };
    } catch (error) {
      throw new Error(`Erro ao criar a questão`);
    }
  }

  async findAll() {
    const client = this.mongoClientConfig.getClient();
    try {
      const db = client.db(this.dbName);
      const collection = db.collection<QuestionEntity>(this.collectionName);
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
      const collection = db.collection<QuestionEntity>(this.collectionName);
      const response = await collection.findOne({
        _id: new ObjectId(id),
      });
      return response;
    } catch (error) {
      throw error;
    }
  }

  async update(id: string, updateQuestionDto: UpdateQuestionDto) {
    const client = this.mongoClientConfig.getClient();
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
    }
  }

  async remove(id: string) {
    const client = this.mongoClientConfig.getClient();
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
    }
  }
}
