import { Injectable } from '@nestjs/common';
import { CreateTagDto } from '../dto/create-tag.dto';
import { UpdateTagDto } from '../dto/update-tag.dto';
import { MongoClientConfig } from 'src/config/mongoClient.config';
import { TagEntity } from '../entities/tag.entity';
import { ObjectId } from 'mongodb';

@Injectable()
export class TagService {
  private readonly dbName: string = 'e-learning';
  private readonly collectionName: string = 'tag';

  constructor(private readonly mongoClientConfig: MongoClientConfig) {}

  async create(createTagDto: CreateTagDto) {
    const client = await this.mongoClientConfig.connect();
    try {
      const db = client.db(this.dbName);
      const collection = db.collection<TagEntity>(this.collectionName);
      await collection.insertOne(createTagDto);
      return {
        sucess: true,
        message: `Tag ${createTagDto.name} criado com sucesso`,
      };
    } catch (error) {
      throw new Error(`Erro ao criar a tag ${createTagDto.name}`);
    } finally {
      await this.mongoClientConfig.close();
    }
  }

  async findAll() {
    const client = await this.mongoClientConfig.connect();
    try {
      const db = client.db(this.dbName);
      const collection = db.collection<TagEntity>(this.collectionName);
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
      const collection = db.collection<TagEntity>(this.collectionName);
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

  async update(id: string, updateTagDto: UpdateTagDto) {
    const client = await this.mongoClientConfig.connect();
    try {
      const db = client.db(this.dbName);
      const collection = db.collection<TagEntity>(this.collectionName);
      await collection.updateOne(
        {
          _id: new ObjectId(id),
        },
        { $set: updateTagDto },
      );
      return {
        sucess: true,
        message: `Curso ${updateTagDto.name} atualizado com sucesso`,
        data: updateTagDto,
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
      const collection = db.collection<TagEntity>(this.collectionName);
      await collection.deleteOne({
        _id: new ObjectId(id),
      });
      return {
        sucess: true,
        message: `Curso deletado com sucesso`,
      };
    } catch (error) {
      throw error;
    } finally {
      await this.mongoClientConfig.close();
    }
  }
}
