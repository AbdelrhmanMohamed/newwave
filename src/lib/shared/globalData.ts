import { GlobalData } from "@/types/global";

export async function getGlobalData() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/global`, {
      method: "GET",
      next: { revalidate: 120 }, // Revalidate every 60 seconds
    });
    if (!res.ok) {
      throw new Error(`Error fetching global data: ${res.statusText}`);
    }
    const data = await res.json();
    if (!data || !data.data) {
      throw new Error("Invalid global data response");
    }
    return data.data as GlobalData;
  } catch (error) {
    console.error("Error fetching base FAQ page data:", error);
    return {} as GlobalData;
  }
}
