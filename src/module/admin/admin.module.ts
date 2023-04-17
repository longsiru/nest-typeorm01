import { Module } from '@nestjs/common';
import { UserController } from './controller/user/user.controller';
import { NewsController } from './controller/news/news.controller';

import { ArticleService } from '../../service/article/article.service';
//配置model
import { TypeOrmModule } from '@nestjs/typeorm';
import  { Article } from '../../entity/article.entity';
@Module({
  imports:[TypeOrmModule.forFeature([Article])],
  controllers: [UserController, NewsController],
  providers:[ArticleService]
})
export class AdminModule {}
