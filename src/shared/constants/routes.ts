export enum RoutesMap {
  home = '',
  profile = 'profile',
  ui = 'ui'
}

export const routes = {
  home: '/',
  profile: `/${RoutesMap.profile}`,
  ui: `/${RoutesMap.ui}`
};
