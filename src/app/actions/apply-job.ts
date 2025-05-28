/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { ApplyCareer } from "@/types/career";

async function uploadFile(file: File): Promise<number | null> {
  const formData = new FormData();
  formData.append("files", file, file.name || "file.pdf"); // Use file.name if available, otherwise default to "file.pdf"

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/upload`,
    {
      method: "POST",

      body: formData,
    }
  );

  if (!response.ok) {
    return null;
  }

  const data = await response.json();
  return data[0]?.id;
}

export async function applyJob(application: ApplyCareer) {
  try {
    const file = application.cv;
    // Check if file is a Blob or File
    if (!(file instanceof Blob)) {
      throw new Error("Uploaded cv is not a file");
    }

    // Upload the file and get the file ID
    const fileId = await uploadFile(file);
    if (!fileId) {
      throw new Error("Failed to upload CV file.");
    }

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/applications`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          data: {
            full_name: application.fullName,
            email: application.email,
            phone_number: application.phone_number,
            message: application.message,
            career: {
              id: Number(application.career),
            },
            cv: {
              id: Number(fileId), // Ensure fileId is a number
            },
          },
        }),
      }
    );

    if (!res.ok) throw new Error("Failed to submit application.");

    return await res.json();
  } catch (error: any) {
    throw new Error(
      error?.message || "An unexpected error occurred during job application."
    );
  }
}
