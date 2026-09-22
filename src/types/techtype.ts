
export interface ITechnology {
    id: string;
  icon: string;
  badge: string | null; // Nullable for cards without a top badge (like Next.js)
  name: string;
  description: string;
  category: string;
  difficulty: "Beginner-Friendly" | "Intermediate" | "Advanced";
  rating: number;
  buttonText: string;
}