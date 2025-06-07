import createServer from '@codegenie/serverless-express';
import { NestFactory } from '@nestjs/core';
import { AppModule } from '../src/app.module';

let server: any;

async function bootstrap(): Promise<any> {
    const app = await NestFactory.create(AppModule);
    debugger
    app.enableCors({
        origin: '*', // 或者指定具体域名，如 'http://localhost:5173'
        credentials: true,
    });
    await app.init();
    const expressApp = app.getHttpAdapter().getInstance();
    return createServer(expressApp);
}

// AWS Lambda handler
export const handler = async (...args: any) => {
    server = server ?? (await bootstrap());
    return server(...args);
};
