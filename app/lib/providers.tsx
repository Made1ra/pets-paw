"use client";

import { Provider } from "react-redux";
import store from "@/app/lib/store";

export function Providers({ children }: React.PropsWithChildren) {
  return <Provider store={store}>{children}</Provider>;
}
