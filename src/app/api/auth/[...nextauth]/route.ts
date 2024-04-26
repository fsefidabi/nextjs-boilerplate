import NextAuth, { AuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import { ZodError } from "zod"
import axiosInstance from "../../../../utils/axiosInstance"
import { loginSchema } from "../../../../utils/validations/auth"

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials, req) {
        try {
          const { username, password } = await loginSchema.parseAsync(credentials)

          const res = await axiosInstance.post(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/local`, {
            identifier: username,
            password: password
          })

          const user = await res.data

          if (!user) {
            return null
          }

          return user.user
        } catch (error) {
          console.log("error: ", error)
          if (error instanceof ZodError) {
            // Return `null` to indicate that the credentials are invalid
            return null
          }
        }
      }
    })
  ],
  callbacks: {
    async jwt({ token, user, account, profile, isNewUser }) {
      if (user) {
        return {
          ...token,
          ...user
        }
      }
      return token
    },
    async session({ session, user, token }) {
      return {
        ...session,
        user: {
          ...session.user,
          ...token
        }
      }
    }
  },
  session: {
    strategy: "jwt"
  },
  secret: process.env.NEXTAUTH_SECRET,
  debug: true
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
