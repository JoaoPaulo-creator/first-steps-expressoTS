import { UserRepository } from "@repositories/user/user.repository";
import { provide } from "inversify-binding-decorators";
import { ICreateUserResponseDTO } from "../create/create-user.dto";
import { IFindOneUserRequestDTO } from "./findone-user.dto";

@provide(FindOneUserUseCase)
class FindOneUserUseCase {
    constructor(private userRepository: UserRepository) {}

    execute(data: IFindOneUserRequestDTO): ICreateUserResponseDTO | null {
        try {
            const { id } = data;
            const user = this.userRepository.find(id);

            let response: ICreateUserResponseDTO;

            if (user !== null) {
                response = {
                    id: user.Id,
                    name: user.name,
                    email: user.email,
                    status: "success",
                };
                return response;
            }
            return null;
        } catch (error) {
            throw error;
        }
    }
}

export { FindOneUserUseCase };
