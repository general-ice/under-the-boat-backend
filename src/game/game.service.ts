import { Injectable } from '@nestjs/common';
import {v4 as uuidv4} from 'uuid'
import { IGame } from './interfaces/game.interface';
import { CreateGameDto } from './dto/create-game.dto';

const mockGames: IGame[] = [
  {id: uuidv4(), author: uuidv4(), name: 'My first room', maxPlayer: 4, players: 3},
  {id: uuidv4(), author: uuidv4(), name: 'Its test implementation of room', maxPlayer: 6, players: 6}
]

@Injectable()
export class GameService {
  private games: IGame[]

  constructor() {
    this.games = mockGames
  }

  public getGames(): IGame[] {
    return this.games
  }

  private isValidGameDto(game: CreateGameDto): boolean {
    const {author, maxPlayer, name} = game
    return [author, maxPlayer, name].every(necessaryKey => game[necessaryKey])
  }

  public createGame(gameDto: CreateGameDto): boolean {
    if (this.isValidGameDto(gameDto)) {
      const {author, name, maxPlayer} = gameDto
      const newGame: IGame = {
        id: uuidv4(),
        author,
        name,
        maxPlayer,
        players: 0,
      }
      this.games.push(newGame)

      return true
    }

    return false
  }
}
