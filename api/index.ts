import { createServer, proxy } from '@vendia/serverless-express';
import { Callback, Context, Handler } from 'aws-lambda';
import { AppModule } from '../src/app.module';
import { NestFactory } from '@nestjs/core';

let server: Handler;

async function bootstrap(): Promise<Handler> {
    const app = await NestFactory.create(AppModule);
    await app.init();
    const expressApp = app.getHttpAdapter().getInstance();
    return createServer(expressApp);
}

export const handler: Handler = async (
    event: any,
    context: Context,
    callback: Callback,
) => {
    server = server ?? (await bootstrap());
    return proxy(server, event, context, 'PROMISE').promise;
};