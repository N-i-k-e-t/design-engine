import { NextRequest, NextResponse } from "next/server";

// Validation
function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

const VALID_PROFESSIONS = [
  "Graphic Designer",
  "Fashion Designer",
  "Artist",
  "Illustrator",
  "Factory",
  "Manufacturer",
  "Packaging Company",
  "Print Shop",
  "Brand Owner",
  "Agency",
  "Student",
  "Other",
];

// In-memory store for serverless (replace with database for production)
// For production on Vercel, integrate with:
// - Vercel KV (Redis)
// - Supabase
// - PlanetScale
// - Firebase Firestore
// - MongoDB Atlas
// - Airtable API
// - Google Sheets API
// - Mailchimp API

// Environment variable for webhook (optional)
const WEBHOOK_URL = process.env.WAITLIST_WEBHOOK_URL;

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, profession, keepUpdated } = body;

    // Validate required fields
    if (!name || typeof name !== "string" || name.trim().length < 2) {
      return NextResponse.json(
        { error: "Name is required (min 2 characters)" },
        { status: 400 }
      );
    }

    if (!email || !validateEmail(email)) {
      return NextResponse.json(
        { error: "Valid email is required" },
        { status: 400 }
      );
    }

    if (!profession || !VALID_PROFESSIONS.includes(profession)) {
      return NextResponse.json(
        { error: "Valid profession is required" },
        { status: 400 }
      );
    }

    // Create entry
    const entry = {
      id: crypto.randomUUID(),
      name: name.trim(),
      email: email.trim().toLowerCase(),
      profession,
      keepUpdated: keepUpdated ?? true,
      timestamp: new Date().toISOString(),
      source: "website",
      tags: ["waitlist", "pre-launch"],
    };

    // Send to webhook if configured (e.g., Zapier, Make, n8n, custom backend)
    if (WEBHOOK_URL) {
      try {
        await fetch(WEBHOOK_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(entry),
        });
      } catch (webhookError) {
        console.error("Webhook delivery failed:", webhookError);
        // Don't fail the request — webhook is optional
      }
    }

    // Log to server console (visible in Vercel logs)
    console.log("📧 New waitlist signup:", {
      name: entry.name,
      email: entry.email,
      profession: entry.profession,
      timestamp: entry.timestamp,
    });

    return NextResponse.json(
      {
        success: true,
        message: "Successfully joined the waitlist!",
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Waitlist API error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({
    status: "active",
    message: "Design Engine waitlist API",
    launch: "2026-07-22",
  });
}
