import type { AuthenticationManager } from '../manager/authentication.js';
import { BaseResource } from './base.js';
export declare class AuthenticationResource extends BaseResource<AuthenticationResource, AuthenticationManager> {
    constructor(manager: AuthenticationManager, id: string, data: Record<string, unknown>);
}
