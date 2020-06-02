import { Controller, Get, Post, Body, Header} from '@nestjs/common';
import { GameService } from './game.service';
import { CreateGameDto } from './dto/create-game.dto';
import { IGame } from './interfaces/game.interface';

@Controller('api/v1/games')
export class GameController {
  constructor(private readonly gameService: GameService) {}

  @Post('create')
  createGame(@Body() createGameDto: CreateGameDto) {
    console.log(createGameDto)
    const isSuccess = this.gameService.createGame(createGameDto)
    return {success: isSuccess}
  }


  @Get('get-all')
  @Header('Access-Control-Allow-Origin', '*')
  getGames(): IGame[] {
    console.log('get-all')
    return this.gameService.getGames();
  }
}
