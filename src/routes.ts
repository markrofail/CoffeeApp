import BranchScreen from "./screens/BranchScreen";
import BasketScreen from "./screens/BasketScreen";
import LoadingScreen from "./screens/LoadingScreen";
import ReceiptScreen from "./screens/ReceiptScreen";

type Route = {
  name: keyof RootStackParamList;
  // rome-ignore lint/suspicious/noExplicitAny:
  component: any;
};

export const ROUTES: Route[] = [
  { name: "Branch", component: BranchScreen },
  { name: "Basket", component: BasketScreen },
  { name: "Loading", component: LoadingScreen },
  { name: "Receipt", component: ReceiptScreen },
];

export type RootStackParamList = {
  Branch: undefined;
  Shop: { branch: string };
  Basket: undefined;
  Loading: undefined;
  Receipt: { formattedTimestamp: string };
};
