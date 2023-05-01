import { BaseController, StatusCode } from "@expressots/core";
import {
    controller,
    httpGet,
    requestParam,
    response,
} from "inversify-express-utils";
import { FindOneUserUseCase } from "./findone-user.usecase";

@controller("/user")
class FindOneUserController extends BaseController {
    constructor(private findOneUserUseCase: FindOneUserUseCase) {
        super("findone-user-controller");
    }

    @httpGet("/:id")
    execute(@response() res: any, @requestParam() id): any {
        return this.callUseCase(
            this.findOneUserUseCase.execute(id),
            res,
            StatusCode.OK,
        );
    }
}

export { FindOneUserController };
