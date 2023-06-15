import type { AuthenticationManager } from '../manager/authentication.js'
import { BaseResource } from './base.js'

export class AuthenticationResource extends BaseResource<AuthenticationResource, AuthenticationManager> {
  public constructor (manager: AuthenticationManager, id: string, data: Record<string, unknown>) {
    super(manager, id, data)
  }
}
