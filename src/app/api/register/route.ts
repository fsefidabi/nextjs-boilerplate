import { NextResponse } from "next/server"
import axiosInstance from "../../../utils/axiosInstance"

export async function POST(request: Request) {
  const data = await request.json()
  const { username, email, password } = data

  if (!username || !email || !password) {
    return new NextResponse("Missing username, email, or password", { status: 400 })
  }

  try {
    //todo: implement password encrypting based on server setup
    const response = await axiosInstance.post(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/local/register`, data)
    return NextResponse.json(response.data, { status: 200 })
  } catch (err) {
    return NextResponse.json(err?.response?.data, { status: 400 })
  }
}
