import { QueryClient } from "react-query";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      cacheTime: 1000 * 60 * 60 * 24 * 14, // 14 days (default lifetime of refresh token)
      staleTime: 1000 * 60 * 5, // 5 min
    },
  },
});
