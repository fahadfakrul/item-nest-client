import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";


const useProducts = () => {
    const axiosPublic = useAxiosPublic();
    const {data: products = [],  isLoading, refetch} = useQuery({
        queryKey: ['tests'],
        queryFn: async () => {
           const res = await axiosPublic.get("/products")
           return res.data;
        }
    })
    
  return [products, isLoading, refetch];
};

export default useProducts;