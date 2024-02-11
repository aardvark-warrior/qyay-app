import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { validate } from "./env.validation";
import { TypeOrmModule } from "@nestjs/typeorm";
import { JwtModule } from "@nestjs/jwt";
import { JwtStrategy } from "./auth/jwt.strategy";
import { User } from "./user/user.entity";
import { UserController } from "./user/user.controller";
import { UserService } from "./user/user.service";
import { EventModule } from "./event/event.module";
import { AuthService } from "./auth/auth.service";
import { PassportModule } from "@nestjs/passport";
import { LocalStrategy } from "./auth/local.strategy";
import { QuestionModule } from './question/question.module';

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
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        secret: configService.get<string>("JWT_SECRET"),
        signOptions: {
          expiresIn: configService.get<string>("JWT_EXPIRATION"),
        },
      }),
      inject: [ConfigService],
    }),
    EventModule,
    QuestionModule,
  ],
  controllers: [AppController, UserController],
  providers: [AppService, AuthService, LocalStrategy, UserService, JwtStrategy],
})
export class AppModule {}
