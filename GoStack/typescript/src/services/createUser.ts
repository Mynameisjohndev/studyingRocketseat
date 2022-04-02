interface TechObject{
    title: string;
    experience: number;
}

interface CreateUserProps {
    name?: string;
    email?: string;
    password?: string;
    techs:  Array<string | TechObject>;
}

export function createUser( { name, email, password } : CreateUserProps ){
    const user = {
        name,
        email, 
        password,
    }
    return user;
};