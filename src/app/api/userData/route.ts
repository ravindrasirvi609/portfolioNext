import { connect } from "@/dbConfig/dbConfig";
import { NextRequest, NextResponse } from "next/server";
import userData from "../../../model/userModel";
import { Resend } from "resend";

connect();

export async function POST(req: NextRequest) {
  try {
    const userDataFromBody = await req.json();
    const newUser = new userData(userDataFromBody);

    await newUser.save();

    const resend = new Resend(process.env.RESEND_API_KEY!);

    resend.emails.send({
      from: "dev@ravindrachoudhary.in",
      to: "ravi.sirvi609@gmail.com",
      subject: `${newUser.name} wants to connect with you!`,
      html: `
    <div style="font-family: Arial, sans-serif; padding: 20px; color: #333;">
      <h1 style="font-size: 24px; color: #333;">Connection Request</h1>
      <p style="font-size: 18px;">Hi,</p>
      <p style="font-size: 18px;"><strong>${newUser.name}</strong> wants to connect with you!</p>
      <p style="font-size: 18px;">Here are their details:</p>
      <ul style="font-size: 18px;">
        <li>Email: ${newUser.email}</li>
        <li>Message: ${newUser.message}</li>
        <li>Mobile No: ${newUser.mobileNo}</li>
        <li>Created At: ${newUser.createdAt}</li>
      </ul>
    </div>
  `,
    });

    return NextResponse.json({
      message: "User added successfully",
      user: newUser,
    });
  } catch (error: any) {
    console.error("Error adding user:", error);
    return NextResponse.error(); // Remove the argument from the function call
  }
}
