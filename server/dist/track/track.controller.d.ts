import { TrackService } from "./track.service";
import { CreateTrackDto } from "./dto/create-track.dto";
import { ObjectId } from "mongoose";
import { CreateCommentDto } from "./dto/create-comment.dto";
export declare class TrackController {
    private trackService;
    constructor(trackService: TrackService);
    create(files: any, dto: CreateTrackDto): Promise<import("./shemas/track.schema").Track>;
    getAll(count: number, offset: number): Promise<import("./shemas/track.schema").Track[]>;
    search(query: string): Promise<import("./shemas/track.schema").Track[]>;
    getOne(id: ObjectId): Promise<import("./shemas/track.schema").Track>;
    delete(id: ObjectId): Promise<import("mongoose").Schema.Types.ObjectId>;
    addComment(dto: CreateCommentDto): Promise<import("./shemas/comment.schema").Comment>;
    listen(id: ObjectId): Promise<void>;
}
