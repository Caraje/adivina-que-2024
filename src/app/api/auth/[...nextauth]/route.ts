import CredentialsProvider from "next-auth/providers/credentials";
import GitHubProvider from "next-auth/providers/github";
import NextAuth from "next-auth"
import { connectDB } from "@/config/db";
import User from "@/schemas/User";
import bcrypt from 'bcryptjs';

const GITHUB_ID:string = process.env.GITHUB_ID || ''
const GITHUB_SECRET:string = process.env.GITHUB_SECRET || ''
const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: { label: "user_email", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials, req) {
        await connectDB()
        const userFound = await User.findOne({user_email: credentials?.email})
        if(!userFound) throw new Error('Invalid Credentials')
        const passMatch = await bcrypt.compare(credentials!.password, userFound.user_password)
        if(!passMatch) throw new Error('invalid Credentials')
        const { user_password, ...cleanUser } = userFound.toObject()
        return cleanUser
      },
    }),
    GitHubProvider({
      clientId: GITHUB_ID,
      clientSecret: GITHUB_SECRET
    })
  ],
  callbacks: {
    jwt({account, token, user, profile, session}) {
      if (user) token.user = user;
      return token
    },
    session({session, token, user}) {
      session.user = token.user as any;
      return session
    }
  }
})

export { handler as GET, handler as POST }


