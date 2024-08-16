import { UpdateSectionDto } from './../dto/update-section.dto';
import { Injectable } from '@nestjs/common';
import { CreateSectionDto } from '../dto/create-section.dto';
import { MongoClientConfig } from 'src/config/mongoClient.config';
import { ObjectId } from 'mongodb';
import { SectionEntity } from '../entities/section.entity';

@Injectable()
export class SectionService {
  private readonly dbName: string = 'e-learning';
  private readonly collectionName: string = 'section';

  constructor(private readonly mongoClientConfig: MongoClientConfig) {}

  async create(createSectionDto: CreateSectionDto) {
    const client = await this.mongoClientConfig.connect();
    try {
      const db = client.db(this.dbName);
      const collection = db.collection<SectionEntity>(this.collectionName);
      await collection.insertOne(createSectionDto);
      return {
        sucess: true,
        message: `Seção criada com sucesso`,
      };
    } catch (error) {
      throw new Error(`Erro ao criar a seção`);
    } finally {
      await this.mongoClientConfig.close();
    }
  }

  async findAll() {
    const client = await this.mongoClientConfig.connect();
    try {
      const db = client.db(this.dbName);
      const collection = db.collection<SectionEntity>(this.collectionName);
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
      const collection = db.collection<SectionEntity>(this.collectionName);
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

  async update(id: string, updateSectionDto: UpdateSectionDto) {
    const client = await this.mongoClientConfig.connect();
    try {
      const db = client.db(this.dbName);
      const collection = db.collection<SectionEntity>(this.collectionName);
      await collection.updateOne(
        {
          _id: new ObjectId(id),
        },
        { $set: updateSectionDto },
      );
      return {
        sucess: true,
        message: `Seção atualizada com sucesso`,
        data: updateSectionDto,
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
      const collection = db.collection<SectionEntity>(this.collectionName);
      await collection.deleteOne({
        _id: new ObjectId(id),
      });
      return {
        sucess: true,
        message: `Seção deletada com sucesso`,
      };
    } catch (error) {
      throw error;
    } finally {
      await this.mongoClientConfig.close();
    }
  }
}
