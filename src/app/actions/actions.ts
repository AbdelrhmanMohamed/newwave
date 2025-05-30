"use server";
import { Contact } from "@/types/contact";

export async function send_message(data: Contact): Promise<boolean> {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/contact-uses`,
      {
        method: "POST",
        body: JSON.stringify({
          data: {
            ...data,
          },
        }),
        headers: {
          "content-type": "application/json",
        },
      }
    );

    if (response.ok) {
      return true;
    } else {
      return false;
    }
  } catch {
    return false;
  }
}

export async function subscribe_api(email: string): Promise<boolean> {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/subscribers`,
      {
        method: "POST",
        body: JSON.stringify({
          data: {
            email: email,
          },
        }),
        headers: {
          "content-type": "application/json",
        },
      }
    );

    if (response.ok) {
      return true;
    } else {
      return false;
    }
  } catch {
    return false;
  }
}
