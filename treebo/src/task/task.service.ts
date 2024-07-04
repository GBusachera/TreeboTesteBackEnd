import { Inject, Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Repository } from 'typeorm';
import { Task } from './entities/task.entity';

@Injectable()
export class TaskService {
  constructor(
    @Inject('TASK_REPOSITORY')
    private taskRepository: Repository<Task>
  ) { }
  async create(createTaskDto: CreateTaskDto) {
    try {
      const data = await this.taskRepository.save(createTaskDto);
      return {
        message: 'Lista criada com sucesso',
        data
      };
    } catch (error) {
      return {
        message: 'Erro ao cadastrar a lista',
        data: []
      };
    }
  }

  async findAll(): Promise<Task[]> {
    try {
      const data = await this.taskRepository.find();
      return data;
    } catch (error) {
      return error
    };
  }

  async findOne(id: number): Promise<Task> {
    try {
      const data = await this.taskRepository.findOneBy({ id: id });
      return data;
    } catch (error) {
      return error
    };
  }

  update(id: number, updateTaskDto: UpdateTaskDto) {
    try {
      const data = this.taskRepository.update({ id: id }, updateTaskDto);
      return {
        message: 'Lista atualizada com sucesso',
        data
      };
    } catch (error) {
      return {
        message: 'Erro ao atualizar a lista',
        data: []
      };
    }
  }

  remove(id: number) {
    try {
      const data = this.taskRepository.delete({ id: id });
      return {
        message: 'Lista deletada com sucesso',
        data
      };
    } catch (error) {
      return {
        message: 'Erro ao deletar a lista',
        data: []
      };
    }
  }
}
