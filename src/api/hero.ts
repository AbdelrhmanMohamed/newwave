import { Hero } from "@/types/hero";

export const heroOptions = {
  queryKey: ["hero"],
  queryFn: async (): Promise<Hero> => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/hero?populate=cover`
    );

    if (!res.ok) {
      throw new Error("Failed to fetch hero");
    }

    const json = await res.json();
    return json.data as Hero;
  },
};
