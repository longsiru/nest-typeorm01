import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3002);
}
bootstrap();

//1. npm install --save @nestjs/typeorm typeorm mysql
//2. 配置数据库连接。 app.module
//3. 配置实体 entity，在src里面新建一个文件夹，名字叫做entity，然后新建操作数据的实体。然后在要操作的contrller对应的module配置model
//4. 定义service来获取module，来操作数据库。
