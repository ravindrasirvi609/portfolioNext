import { connect } from "@/dbConfig/dbConfig";
import { NextRequest, NextResponse } from "next/server";
import Visitor from "../../../model/visitorModel";
connect();

export async function POST(req: NextRequest) {
  try {
    const { location } = await req.json();
    console.log("Location:", location);

    const visitor = new Visitor({ location });
    await visitor.save();
    return NextResponse.json("Visitor added successfully");
  } catch (error: any) {
    console.error(error);
  }
}
