declare module 'mockjs' {
    interface Mock {
        mock: (path: string, template: {}) => void
    }

    const mock: Mock
    export default mock
}
