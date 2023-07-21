import { defineStore } from 'pinia';
import {
  getOrganizationState,
  IOrganizationState,
  organizationActions,
} from '~/utils/store/mixins/organization';

export interface IUser {
  id: string,
  name: string,
  organization_id?: string
}
export interface IStateUser extends IOrganizationState {
  user?: IUser,
}
export enum Actions {
  GET_USER = 'STORE_USER_GET_USER',
  FETCH_ORGANIZATION = 'STORE_USER_FETCH_ORGANIZATION',
}

export enum Mutations {
  SET_USER = 'STORE_USER_SET_USER',
  SET_ORGANIZATION = 'STORE_USER_SET_ORGANIZATION',
}

// export const namespaced = false;
export const storeName = 'user';

/* STATE start */

export const getDefaultState = (): IStateUser => ({
  user: undefined,
  ...getOrganizationState(),
});

/* STATE end */

// Pinia store

export const useStoreUser = defineStore(storeName, {
  state: getDefaultState,

  actions: {


    [Mutations.SET_USER](user: IUser) {
      this.user = user;
    },

    ...organizationActions<typeof storeName, IStateUser, any, Actions>(Actions, Mutations),

    async [Actions.GET_USER](id: string) {
      const { data: user } = await new Promise((resolve) => setTimeout(() => resolve({
        data: { id, name: 'UserName' },
      } as { data: IUser}), 100));

      if (user.organization_id) {
        await this[Actions.FETCH_ORGANIZATION](user.organization_id);
      }

      this[Mutations.SET_USER](user);
    },
  },
});


