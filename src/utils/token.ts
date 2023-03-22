export const setToken = (token: string) => {
    localStorage.setItem('token', token)
}

export const getToken = (s: string): string => {
    return localStorage.getItem(s) ?? ''
}

export const removeToken = (s:string) => {
    localStorage.removeItem(s)
}