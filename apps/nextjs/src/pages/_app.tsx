// src/pages/_app.tsx
import "../styles/globals.css";
import type { AppType } from "next/dist/shared/lib/utils";
import { trpc } from "../utils/trpc";
import { SessionProvider } from "@acme/auth/client";

const MyApp: AppType = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
};

export default trpc.withTRPC(MyApp);
