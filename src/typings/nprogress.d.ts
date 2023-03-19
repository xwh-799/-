declare module 'nprogress' {
    interface Nprogress {
        start: () => void
        done: () => void
    }

    const nprogress: Nprogress

    export default nprogress
}
