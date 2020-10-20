interface TechObject {
  title: string;
  experience: number;
}

interface CreateUserData {
  name?: string;
  email: string;
  password: string | number;
  techs: Array<string | TechObject>;
  // techs: string[];
}

export default function createService({ name = "", email, password }: CreateUserData) {
  const user = {
    name,
    email,
    password,
  };

  return user;
}
