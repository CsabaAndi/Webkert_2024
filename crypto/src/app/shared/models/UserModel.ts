export interface User {
    Id: string;
    Username: string;
    Name: {
        Firstname: string;
        Lastname: string;
    }
    Email: string;
}
