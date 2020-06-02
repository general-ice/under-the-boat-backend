import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
  WsResponse,
} from '@nestjs/websockets';
import { from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Server } from 'socket.io';

@WebSocketGateway(81)
export class EventsGateway {

  @SubscribeMessage('events')
  handleEvent(@MessageBody() data: string) {
    console.log('SubscribeMessage', data);
    return {hello: 'world'}
  }
}