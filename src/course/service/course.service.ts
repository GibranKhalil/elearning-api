import { Injectable } from '@nestjs/common';
import { CreateCourseDto } from '../dto/create-course.dto';
import { UpdateCourseDto } from '../dto/update-course.dto';
import { MongoClientConfig } from 'src/config/mongoClient.config';
import { CourseEntity } from '../entities/course.entity';
import { ObjectId } from 'mongodb';

@Injectable()
export class CourseService {
  private readonly dbName: string = 'e-learning';
  private readonly collectionName: string = 'course';

  constructor(private readonly mongoClientConfig: MongoClientConfig) {}

  async create(createCourseDto: CreateCourseDto) {
    const client = this.mongoClientConfig.getClient();
    try {
      const db = client.db(this.dbName);
      const collection = db.collection<CourseEntity>(this.collectionName);
      await collection.insertOne(createCourseDto);
      return {
        sucess: true,
        message: `Curso ${createCourseDto.name} criado com sucesso`,
      };
    } catch (error) {
      throw new Error(`Erro ao criar o curso ${createCourseDto.name}`);
    }
  }

  async findAll() {
    const client = this.mongoClientConfig.getClient();
    try {
      const db = client.db(this.dbName);
      const collection = db.collection<CourseEntity>(this.collectionName);
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
      const collection = db.collection<CourseEntity>(this.collectionName);
      const response = await collection.findOne({
        _id: new ObjectId(id),
      });
      return response;
    } catch (error) {
      throw error;
    }
  }

  async update(id: string, updateCourseDto: UpdateCourseDto) {
    const client = this.mongoClientConfig.getClient();
    try {
      const db = client.db(this.dbName);
      const collection = db.collection<CourseEntity>(this.collectionName);
      await collection.updateOne(
        {
          _id: new ObjectId(id),
        },
        { $set: updateCourseDto },
      );
      return {
        sucess: true,
        message: `Curso ${updateCourseDto.name} atualizado com sucesso`,
        data: updateCourseDto,
      };
    } catch (error) {
      throw error;
    }
  }

  async remove(id: string) {
    const client = this.mongoClientConfig.getClient();
    try {
      const db = client.db(this.dbName);
      const collection = db.collection<CourseEntity>(this.collectionName);
      await collection.deleteOne({
        _id: new ObjectId(id),
      });
      return {
        sucess: true,
        message: `Curso deletado com sucesso`,
      };
    } catch (error) {
      throw error;
    }
  }
}
