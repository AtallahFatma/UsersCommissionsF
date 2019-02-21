import * as api from '../../redux/saga/apiUtils'
const initialState = {
        fetching: false,
        error: null,
        user: null,
        registerFailure: null,
        addingUser: false,
        userId: null,
        loggingIn: false,
        loginFailure: null,
        loginSuccess: null,
        commissions: null
};

export const user = {
    state: { ...initialState },
    reducers: {
        setProfile(state, payload) {
            return { ...state, userId: payload.userId , loggingIn: payload.loggingIn, loginSuccess: payload.loginSuccess};
        },
        loginPending(state, payload) {
            return { ...state, loggingIn: payload.loggingIn }
        },
        loginFailure(state, error) {
            return { ...state,loggingIn: false, error, loginSuccess: false }
        },
        gettingUser(state, error) {
            return { ...state, fetching: true, }
        },
        setUser(state, payload) {
            console.log(payload);
            return { ...state, user: payload, fetching: false, }
        }
    },
    effects: {
        async login(payload) {
            try {
                const url = '/user/login';
                this.loginPending({ loggingIn: true })
                const response = await api.postApi(url, payload);
                const data = await response.json();
                this.setProfile({ ...data, loggingIn: false, loginSuccess: true })
            } catch (error) {
                this.loginFailure(error.message)
            }
        },
        async getUser(userId) {
            try {
                const url = '/user/'+userId;
                this.gettingUser();
                const response = await api.getApi(url);
                const data = await response.json();
                this.setUser({ ...data})
            } catch (error) {
                console.log(error);
            }
        },
    },
};