import BasketScreen from "./screens/BasketScreen";
import LoadingScreen from "./screens/LoadingScreen";
import ReceiptScreen from "./screens/ReceiptScreen";

type Route = {
  name: keyof RootStackParamList;
  // rome-ignore lint/suspicious/noExplicitAny:
  component: any;
};

export const ROUTES: Route[] = [
  { name: "Basket", component: BasketScreen },
  { name: "Loading", component: LoadingScreen },
  { name: "Receipt", component: ReceiptScreen },
];

export type RootStackParamList = {
  Basket: undefined;
  Loading: undefined;
  Receipt: { timestamp: number };
};
