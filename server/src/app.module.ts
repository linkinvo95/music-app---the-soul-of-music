import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { TrackModule } from "./track/track.module";
import { FileModule } from './file/file.module';
import { ServeStaticModule } from "@nestjs/serve-static";
import * as path from 'path'

@Module({
    imports: [
        ServeStaticModule.forRoot({ rootPath: path.resolve(__dirname, 'static') }),
        MongooseModule.forRoot('mongodb+srv://admin:admin@cluster0.hmxier4.mongodb.net/music-platform?retryWrites=true&w=majority'),
        TrackModule,
        FileModule
    ]
})
export class AppModule {

}