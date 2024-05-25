import { Module } from '@nestjs/common';
import { CostumersController } from './costumers.controller';
import { CostumersService } from './costumers.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Costumer } from './costumer.entity';

@Module({
  controllers: [CostumersController],
  providers: [CostumersService],
  exports:[CostumersService],
  imports:[TypeOrmModule.forFeature([Costumer])]
})
export class CostumersModule { }
