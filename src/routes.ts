import BasketScreen from "./screens/BasketScreen";
import BranchScreen from "./screens/BranchScreen";
import LoadingScreen from "./screens/LoadingScreen";
import ReceiptScreen from "./screens/ReceiptScreen";
import ShopScreen from "./screens/ShopScreen/ShopScreen";

type Route = {
  name: keyof RootStackParamList;
  // rome-ignore lint/suspicious/noExplicitAny:
  component: any;
};

export const ROUTES: Route[] = [
  { name: "Branch", component: BranchScreen },
  { name: "Shop", component: ShopScreen },
  { name: "Basket", component: BasketScreen },
  { name: "Loading", component: LoadingScreen },
  { name: "Receipt", component: ReceiptScreen },
];

export type RootStackParamList = {
  Branch: undefined;
  Shop: {
    branch: { name: string; location: string };
  };
  Basket: {
    branch: { name: string; location: string };
    item: { item: string; price: number };
  };
  Loading: {
    branch: { name: string; location: string };
    item: { item: string; price: number };
  };
  Receipt: {
    branch: { name: string; location: string };
    item: { item: string; price: number };
    formattedTimestamp: string;
  };
};
