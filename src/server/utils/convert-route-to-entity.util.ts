const mapping: Record<string, string> = {
  'customer-strategies': 'customer_strategy',
  organizations: 'organization',
  strategies: 'strategy',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
