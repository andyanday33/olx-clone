import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
console.log("GITHUB ID", process.env.GITHUB_ID);
export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    // ...add more providers here
  ],
};
export const nextAuth = NextAuth(authOptions);
