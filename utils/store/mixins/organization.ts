import { DefineStoreOptions } from 'pinia';

export interface IOrganization {
  id: string,
  name: string
}
export interface IOrganizationState {
  organization: IOrganization|null,
}

export interface IOrganizationMutations {
  SET_ORGANIZATION: string,
  [key: string]: string,
}

export interface IOrganizationActions {
  FETCH_ORGANIZATION: string,
}

export const getOrganizationState = (): IOrganizationState => ({
  organization: null,
});

export const organizationMutations = (mutations: IOrganizationMutations) => ({
  [mutations.SET_ORGANIZATION](organization: IOrganization) {
    this.organization = organization;
  },
});


export const organizationActions = <
    Id extends string,
    S extends IOrganizationState,
    G,
    A extends IOrganizationActions & { [key: string]: string }
>(
    actions: IOrganizationActions,
    mutations: IOrganizationMutations,
  ): DefineStoreOptions<Id, S, G, {
  [key in A[keyof A]]?: (...args: any[]) => any; // Type '{ [x: string]: (id: string) => Promise<void>; }' is not assignable to type '{ [key in A[keyof A]]?: ((...args: any[]) => any) | undefined; }'.
}>['actions'] => {
  return ({
    [actions.FETCH_ORGANIZATION]: async (id: string) => {
      const { data: organization } = await new Promise((resolve) => setTimeout(() => resolve({
        data: { id, name: 'OrganizationName' },
      } as { data: IOrganization}), 100));

      this[mutations.SET_ORGANIZATION](organization);
    },
  });
};
