import { Controller, Get } from '@nestjs/common';
//引入service
import { ArticleService } from '../../../../service/article/article.service';

@Controller('admin/news')
export class NewsController {
  //注入依赖
  constructor(private articleService: ArticleService) {}

  @Get()
  async index() {
    console.log(await this.articleService.findAll());
    return '我是admin模块里面的news控制器里面的方法';
  }
}
