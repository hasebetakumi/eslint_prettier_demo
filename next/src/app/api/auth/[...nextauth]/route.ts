import NextAuth from 'next-auth'
import KeycloakProvider from 'next-auth/providers/keycloak'

export const authOptions = {
  providers: [
    KeycloakProvider({
      clientId: 'next',
      clientSecret: 'qegajE2y5AyvaF09BjHyPJpvq9h2VNid',
      issuer: 'http://keycloak:8080/realms/demo',
    }),
  ],
  debug: true,
  callbacks: {
    async redirect({ url, baseUrl }) {
      // ブラウザでのアクセスに合わせて、必要に応じてURLを調整
      return url.startsWith(baseUrl) ? url : baseUrl
    },
  },
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
