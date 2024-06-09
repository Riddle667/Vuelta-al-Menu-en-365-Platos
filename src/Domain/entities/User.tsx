
export interface User {
    id?:             string;
    name:            string;
    lastName:        string;
    phone:           string;
    email:           string
    password:        string;
    confirmPassword?: string;
    session_token?:  string;
    role_id?:        number;
}