import { QueryClient } from "react-query";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // networkMode: 'online',
      cacheTime: 1000 * 60 * 60 * 24, // 24 hours
    },
    mutations: {
      // networkMode: 'online',
      cacheTime: 1000 * 60 * 60 * 24, // 24 hours
    },
  },
});
