interface IFindOneUserResponseDTO {
    id: string;
    name: string;
    email: string;
    status: string;
}

interface IFindOneUserRequestDTO {
    id: string;
}

export { IFindOneUserResponseDTO, IFindOneUserRequestDTO };
