import { routes } from '@/lib/routes';
import { useRouter } from 'next/router';

export const useCurrentPage = () => {
  const router = useRouter();
  const isHomePage = router.pathname === routes.HOME;

  return [isHomePage];
};
