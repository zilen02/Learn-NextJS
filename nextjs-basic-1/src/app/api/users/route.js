import { NextResponse } from "next/server";

export async function GET(req) {
  //connect with mongodb connection
  //   const payload = await req;
  const db = await MongoClient.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const users = await db.collection("users").find().toArray();
  return NextResponse.json({ users });
}
