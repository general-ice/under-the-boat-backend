export class CreateGameDto {
  author: string
  maxPlayer: number
  name: string
  description: string | undefined
  mode: string | undefined
}