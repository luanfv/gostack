interface TechsObject {
    name: string,
    expertise: number,
}

interface CreateUserData {
    name?: string;
    email: string;
    password: string;
    techs: Array<string | TechsObject>;
}

export default ({ name = '', email, password, techs }: CreateUserData) => {
    const user = {
        name,
        email,
        password,
        techs,
    };

    return user;
}