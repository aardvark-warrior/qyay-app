import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Upvote } from './upvote.entity';
import { UpvoteService } from './upvote.service';
import { UpvoteController } from './upvote.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Upvote])],
  providers: [UpvoteService],
  controllers: [UpvoteController],
})
export class UpvoteModule {}
