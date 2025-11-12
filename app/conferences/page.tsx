import { conferences } from "@/lib/conferences";
import { ConferenceList } from "@/components/conference-list";

export const metadata = {
  title: "Conferences | Tech Events 2025",
  description: "Browse and search upcoming tech conferences, summits, and events",
};

export default function ConferencesPage() {
  return (
    <div className="bg-zinc-50 dark:bg-black py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold tracking-tight text-black dark:text-zinc-50 mb-2">
            Tech Conferences 2025
          </h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-400">
            Discover current and upcoming tech conferences around the world
          </p>
        </div>

        <ConferenceList conferences={conferences} />
      </div>
    </div>
  );
}
