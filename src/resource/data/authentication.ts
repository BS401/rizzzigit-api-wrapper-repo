import type { AuthenticationManager } from '../manager/authentication'
import { BaseResource } from './base'

export class AuthenticationResource extends BaseResource<AuthenticationResource, AuthenticationManager> {
  public constructor (manager: AuthenticationManager, id: string, data: Record<string, unknown>) {
    super(manager, id, data)
  }
}
