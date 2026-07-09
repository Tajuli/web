import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      name,
      email,
      company,
      message,
    } = body;

    // Validation

    if (
      !name ||
      !email ||
      !message
    ) {
      return NextResponse.json(
        {
          success: false,
          message: "Please fill all required fields.",
        },
        {
          status: 400,
        }
      );
    }

    await resend.emails.send({
      from: "PrimeDigitor <hello@primedigitor.com>",

      to: "hello@primedigitor.com",

      replyTo: email,

      subject: `🚀 New Inquiry from ${name}`,

      html: `
      <!DOCTYPE html>
      <html>
      <body style="
      font-family:Arial,sans-serif;
      background:#f5f7fb;
      padding:40px;
      ">

      <div style="
      max-width:700px;
      margin:auto;
      background:#ffffff;
      border-radius:18px;
      overflow:hidden;
      border:1px solid #e5e7eb;
      ">

      <div style="
      background:#111827;
      padding:30px;
      text-align:center;
      ">

      <h1 style="
      color:#fff;
      margin:0;
      ">
      PrimeDigitor
      </h1>

      <p style="
      color:#d1d5db;
      margin-top:10px;
      ">
      New Website Inquiry
      </p>

      </div>

      <div style="padding:35px;">

      <table
      width="100%"
      cellpadding="12"
      style="
      border-collapse:collapse;
      "
      >

      <tr>
      <td
      style="
      font-weight:bold;
      width:160px;
      ">
      Name
      </td>

      <td>${name}</td>
      </tr>

      <tr>
      <td
      style="
      font-weight:bold;
      ">
      Email
      </td>

      <td>${email}</td>
      </tr>

      <tr>
      <td
      style="
      font-weight:bold;
      ">
      Company
      </td>

      <td>
      ${company || "N/A"}
      </td>
      </tr>

      </table>

      <hr
      style="
      margin:30px 0;
      border:none;
      border-top:1px solid #eee;
      "
      >

      <h3>Project Details</h3>

      <p style="
      line-height:1.9;
      white-space:pre-wrap;
      ">
      ${message}
      </p>

      </div>

      <div style="
      background:#f8fafc;
      padding:20px;
      text-align:center;
      color:#64748b;
      font-size:14px;
      ">

      Sent from
      <strong>
      PrimeDigitor Website
      </strong>

      </div>

      </div>

      </body>
      </html>
      `,
    });

    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong.",
      },
      {
        status: 500,
      }
    );
  }
}
