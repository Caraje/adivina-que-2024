import CredentialsProvider from "next-auth/providers/credentials";
import NextAuth from "next-auth"
import { connectDB } from "@/config/db";
import User from "@/schemas/User";
import bcrypt from 'bcryptjs';

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: { label: "user_email", type: "text", placeholder: "jsmith" },
        user_password: { label: "Password", type: "password" }
      },
      async authorize(credentials, req) {
        await connectDB()
        const userFound = await User.findOne({user_email: credentials?.email})
        if(!userFound) throw new Error('Invalid Credentials')
        const passMatch = await bcrypt.compare(credentials!.user_password, userFound.user_password)
        if(!passMatch) throw new Error('invalid Credentials')
        return userFound
      },
    })
  ],
  callbacks: {
    jwt({account, token, user, profile, session}) {
      if (user) token.user = user;
      return token
    },
    session({session, token, user}) {
      session.user = token.user as any;
      console.log({session, token, user})
      return session
    }
  }
})

export { handler as GET, handler as POST }


