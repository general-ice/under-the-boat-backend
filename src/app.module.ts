import { Module } from '@nestjs/common';
import { GameController } from './game/game.controller';
import { GameService } from './game/game.service';
import { EventsModule } from './game/event/events.module';

@Module({
  imports: [EventsModule],
  controllers: [GameController],
  providers: [GameService],
})
export class AppModule {}
