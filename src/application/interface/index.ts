import { IncomingHttpHeaders } from 'node:http';

export type HttpResponse<T> = {
  statusCode: number;
  response: T;
  headers?: IncomingHttpHeaders;
};
