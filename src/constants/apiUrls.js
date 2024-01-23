const LOGIN = () => `/login`;
const SESSION_GET = (status, PageNumber, DisplayLength) => `/Session?status=${status}&PageNumber=${PageNumber}&DisplayLength=${DisplayLength}`;

export default {
    LOGIN,
    SESSION_GET,
}