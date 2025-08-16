import { RootState } from '@/redux/store';
import { useSelector } from 'react-redux';


export const useUniqueProductCount = () => {
  const cartProducts = useSelector((state: RootState) => state.cart.cartProducts);

  const uniqueProductIds = new Set();
  cartProducts.forEach((product: any) => uniqueProductIds.add(product._id));

  return uniqueProductIds.size;
};
export const useUniqueWishlstCount = () => {
  const cartProducts = useSelector((state: RootState) => state.wishlist.cartProducts);

  const uniqueProductIds = new Set();
  cartProducts.forEach((product: any) => uniqueProductIds.add(product._id));

  return uniqueProductIds.size;
};
