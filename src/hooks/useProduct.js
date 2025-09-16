// "use client"
// import { useQuery } from "@tanstack/react-query";
// import api from "../api/axiosIntespter";

// const useProductFetching = (id) => {
//   return useQuery({
//     queryKey: ["product", id], // cache depends on id
//     queryFn: async () => {
//       const endpoint = id ? `products?id=${id}` : "products";
//       const response = await api.get(endpoint);
//       return response.data;
//     },
//     staleTime: 1000 * 60 * 5,
//   });
// };

// export default useProductFetching;
