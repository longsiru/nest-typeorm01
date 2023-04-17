import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AdminModule } from './module/admin/admin.module';
import { ApiModule } from './module/api/api.module';
import { DefaultModule } from './module/default/default.module';
import { TypeOrmModule } from '@nestjs/typeorm';


//配置数据库链接

@Module({
  imports: [
    AdminModule, ApiModule, DefaultModule,
    /*

    链接mysql最新版本
    参考：https://github.com/mysqljs/mysql/issues/2382
        https://stackoverflow.com/questions/50373427/node-js-cant-authenticate-to-mysql-8-0

    执行下面命令
    
    ALTER USER 'root'@'%' IDENTIFIED WITH mysql_native_password BY '123456';
    
    */

    TypeOrmModule.forRoot(
      {
        type: 'mysql',
        // host: 'localhost',
        host: '192.168.0.6',
        port: 3306,
        username: 'root',
        password: '123456',
        database: 'nest',
        entities: [__dirname + '/**/*.entity{.ts,.js}'],
        synchronize: true,
      }
    )
  ],
  controllers: [AppController],
  providers: [AppService]  
})
export class AppModule {}
