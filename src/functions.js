export function resolveAuthError(code) {
    switch (code) {
        case "auth/wrong-password":
            return "Invalid password";

        case "auth/user-not-found":
            return "User not found";

        case 'auth/null-value':     // created call back in login.js - not database
            return 'E-mail address and/or password can not be empty';

        default:
            break;
    }
}