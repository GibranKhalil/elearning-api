import { Injectable } from '@nestjs/common';
import { CreateLessonDto } from '../dto/create-lesson.dto';
import { UpdateLessonDto } from '../dto/update-lesson.dto';
import { MongoClientConfig } from 'src/config/mongoClient.config';
import { LessonEntity } from '../entities/lesson.entity';
import { ObjectId } from 'mongodb';

@Injectable()
export class LessonService {
  private readonly dbName: string = 'e-learning';
  private readonly collectionName: string = 'lesson';

  constructor(private readonly mongoClientConfig: MongoClientConfig) {}

  async create(createLessonDto: CreateLessonDto) {
    const client = await this.mongoClientConfig.connect();
    try {
      const db = client.db(this.dbName);
      const collection = db.collection<LessonEntity>(this.collectionName);
      await collection.insertOne(createLessonDto);
      return {
        sucess: true,
        message: `Lição ${createLessonDto.name} criada com sucesso`,
      };
    } catch (error) {
      throw new Error(`Erro ao criar a lição ${createLessonDto.name}`);
    } finally {
      await this.mongoClientConfig.close();
    }
  }

  async findAll() {
    const client = await this.mongoClientConfig.connect();
    try {
      const db = client.db(this.dbName);
      const collection = db.collection<LessonEntity>(this.collectionName);
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
      const collection = db.collection<LessonEntity>(this.collectionName);
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

  async update(id: string, updateLessonDto: UpdateLessonDto) {
    const client = await this.mongoClientConfig.connect();
    try {
      const db = client.db(this.dbName);
      const collection = db.collection<LessonEntity>(this.collectionName);
      await collection.updateOne(
        {
          _id: new ObjectId(id),
        },
        { $set: updateLessonDto },
      );
      return {
        sucess: true,
        message: `Lição ${updateLessonDto.name} atualizada com sucesso`,
        data: updateLessonDto,
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
      const collection = db.collection<LessonEntity>(this.collectionName);
      await collection.deleteOne({
        _id: new ObjectId(id),
      });
      return {
        sucess: true,
        message: `Lição deletada com sucesso`,
      };
    } catch (error) {
      throw error;
    } finally {
      await this.mongoClientConfig.close();
    }
  }
}
