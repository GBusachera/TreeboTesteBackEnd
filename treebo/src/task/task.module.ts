import { Module } from '@nestjs/common';
import { TaskService } from './task.service';
import { TaskController } from './task.controller';
import { taskProviders } from './task.providers';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  controllers: [TaskController],
  imports: [DatabaseModule],
  providers: [
    ...taskProviders,
    TaskService,
  ], 
})
export class TaskModule {}
