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
        user_email: { label: "user_email", type: "text", placeholder: "jsmith" },
        user_password: { label: "Password", type: "password" }
      },
      async authorize(credentials, req) {
        await connectDB()
        const userFound = await User.findOne({user_email: credentials?.user_email})
        if(!userFound) throw new Error('Invalid Credentials')
        const passMatch = await bcrypt.compare(credentials!.user_password, userFound.user_password)
        if(!passMatch) throw new Error('invalid Credentials')
        if (userFound) return userFound.
        return 
      },
    })
  ],
  callbacks: {
    jwt({account, token, user, profile, session}) {
      // console.log({account, token, user, profile, session})
      return token
    },
    session({session, token}) {
      console.log({session, token})
      return session
    }
  }
})

export { handler as GET, handler as POST }
