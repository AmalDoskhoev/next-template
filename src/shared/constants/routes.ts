export enum RoutesMap {
  home = '',
  profile = 'profile',
  ui = 'ui',
  login = 'login'
}

export const routes = {
  home: '/',
  profile: `/${RoutesMap.profile}`,
  ui: `/${RoutesMap.ui}`,
  login: `/${RoutesMap.login}`
};
