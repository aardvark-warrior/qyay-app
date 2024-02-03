import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { validate } from './env.validation';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LocalStrategy } from './auth/local.strategy';
import { AuthService } from './auth/auth.service';
import { PassportModule } from '@nestjs/passport';
import { UserService } from './user/user.service';
import { User } from './user/user.entity';

@Module({
  imports: [
    PassportModule,
    ConfigModule.forRoot({
      // validate,    // env.validation DB_PORT isNumber failing after adding TypeOrmModule 
    }), // Loads the .env file
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: "postgres",
        host: configService.get<string>("DB_HOST"),
        port: configService.get<number>("DB_PORT"),
        username: configService.get<string>("DB_USER"),
        password: configService.get<string>("DB_PASSWORD"),
        database: configService.get<string>("DB_NAME"),
        entities: [__dirname + "/**/*.entity{.ts,.js}"],
        synchronize: configService.get<string>("NODE_ENV") !== "production",
      }),
      inject: [ConfigService],
    }),
    TypeOrmModule.forFeature([User]),
  ],
  controllers: [AppController],
  providers: [AppService, AuthService, LocalStrategy, UserService],
})
export class AppModule {}
