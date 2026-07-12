import type { ReactNode } from "react";

import QueryProvider from "@/providers/query-provider";

type ProvidersProps = {
  children?: ReactNode;
};

export default function Providers({ children }: ProvidersProps) {
  return <QueryProvider>{children}</QueryProvider>;
}
