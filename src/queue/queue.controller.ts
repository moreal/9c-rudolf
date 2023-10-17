import { Injectable } from '@nestjs/common';
import { QueueService } from './queue.service';
import { Cron } from '@nestjs/schedule';

@Injectable()
export class QueueController {
  constructor(private readonly queueService: QueueService) {}

  @Cron('00,10,20,30,40,50 * * * * *')
  async handleCron() {
    await this.queueService.handleCron();
  }

  @Cron('05,15,25,35,45,55 * * * * *')
  async handleStagingCron() {
    await this.queueService.handleStagingCron();
  }
}
