
export interface IOrganization {
  id: string,
  name: string
}
export interface IStateOrganization {
  organization: IOrganization|null,
}

export interface IMutationsOrganization {
  SET_ORGANIZATION: string,
}

export interface IActionsOrganization {
  FETCH_ORGANIZATION: string,
}

export const getOrganizationState = (): IStateOrganization => ({
  organization: null,
});

export const organizationMutations = (mutations: IMutationsOrganization) => ({
  [mutations.SET_ORGANIZATION](organization: IOrganization) {
    this.organization = organization;
  },
});


export const organizationActions = (
  actions: IActionsOrganization,
  mutations: IMutationsOrganization,
) => {
  return ({
    async [actions.FETCH_ORGANIZATION](id: string) {
      const { data: organization } = await new Promise((resolve) => setTimeout(() => resolve({
        data: { id, name: 'OrganizationName' },
      } as { data: IOrganization}), 100));

      this[mutations.SET_ORGANIZATION](organization);
    },
  });
};
