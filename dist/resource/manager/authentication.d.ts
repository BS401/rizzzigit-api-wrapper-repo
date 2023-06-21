import { type ClientEventEmitter } from '../../Wrapper.js';
import type { AuthenticationResource } from '../data/authentication.js';
import type { MainManager } from '../main.js';
import { BaseManager } from './base.js';
export declare class AuthenticationManager extends BaseManager<AuthenticationResource, AuthenticationManager> {
    #private;
    constructor(main: MainManager, events: ClientEventEmitter);
    isAuthorized(): Promise<boolean>;
    logout(): Promise<void>;
    login(username: string, password: string): Promise<void>;
}
