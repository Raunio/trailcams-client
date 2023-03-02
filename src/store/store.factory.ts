import Vuex, { Store } from 'vuex';
import { StoreState } from './store.state';
export class StoreFactory {
    private static store: Store<StoreState>;
    private constructor() {}

    static getStore() {
        if (!this.store) {
            this.store = new Vuex.Store({
                state: new StoreState(),
                mutations: {
                    setUser(state: StoreState, username: string) {
                        state.username = username;
                    },
                    setToken(state: StoreState, token: string) {
                        state.token = token;
                    },
                },
                getters: {
                    isLoggedIn(state) {
                        return state.token;
                    },
                    getUser(state) {
                        return state.username;
                    },
                    getToken(state) {
                        return state.token;
                    },
                },
            });
        }

        return this.store;
    }
}
