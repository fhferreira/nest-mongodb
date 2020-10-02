import { Module } from '@nestjs/common';

// Importamos o módulo do Mongoose
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GatosModule } from './gatos/gatos.module';

@Module({
  // Suponhamos aqui que a nossa string de conexão seja 'mongodb://localhost/nest'
  imports: [MongooseModule.forRoot('mongodb://localhost/nest'), GatosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}