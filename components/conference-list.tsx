"use client";

import { useState, useMemo } from "react";
import { Input, Button, Chip } from "@heroui/react";
import { Conference } from "@/lib/types";
import { ConferenceCard } from "./conference-card";

interface ConferenceListProps {
  conferences: Conference[];
}

type SortOption = "date-asc" | "date-desc" | "name-asc" | "name-desc";

export function ConferenceList({ conferences }: ConferenceListProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState<SortOption>("date-asc");

  const allTags = useMemo(() => {
    const tags = new Set<string>();
    conferences.forEach((conf) => {
      conf.tags.forEach((tag) => tags.add(tag));
    });
    return Array.from(tags).sort();
  }, [conferences]);

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const filteredAndSortedConferences = useMemo(() => {
    const filtered = conferences.filter((conference) => {
      const matchesSearch =
        searchQuery === "" ||
        conference.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        conference.tags.some((tag) =>
          tag.toLowerCase().includes(searchQuery.toLowerCase())
        );

      const matchesTags =
        selectedTags.length === 0 ||
        selectedTags.every((tag) => conference.tags.includes(tag));

      return matchesSearch && matchesTags;
    });

    return filtered.sort((a, b) => {
      switch (sortBy) {
        case "date-asc":
          return new Date(a.date).getTime() - new Date(b.date).getTime();
        case "date-desc":
          return new Date(b.date).getTime() - new Date(a.date).getTime();
        case "name-asc":
          return a.name.localeCompare(b.name);
        case "name-desc":
          return b.name.localeCompare(a.name);
        default:
          return 0;
      }
    });
  }, [conferences, searchQuery, selectedTags, sortBy]);

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <Input
            type="text"
            placeholder="Search conferences..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full sm:w-96"
            isClearable
            onClear={() => setSearchQuery("")}
          />
          <div className="flex gap-2">
            <Button
              size="sm"
              variant={sortBy === "date-asc" ? "solid" : "flat"}
              color="primary"
              onClick={() => setSortBy("date-asc")}
            >
              Date ↑
            </Button>
            <Button
              size="sm"
              variant={sortBy === "date-desc" ? "solid" : "flat"}
              color="primary"
              onClick={() => setSortBy("date-desc")}
            >
              Date ↓
            </Button>
            <Button
              size="sm"
              variant={sortBy === "name-asc" ? "solid" : "flat"}
              color="primary"
              onClick={() => setSortBy("name-asc")}
            >
              Name A-Z
            </Button>
            <Button
              size="sm"
              variant={sortBy === "name-desc" ? "solid" : "flat"}
              color="primary"
              onClick={() => setSortBy("name-desc")}
            >
              Name Z-A
            </Button>
          </div>
        </div>

        <div>
          <p className="text-sm text-default-500 mb-2">Filter by tags:</p>
          <div className="flex flex-wrap gap-2">
            {allTags.map((tag) => (
              <Chip
                key={tag}
                onClick={() => toggleTag(tag)}
                variant={selectedTags.includes(tag) ? "solid" : "flat"}
                color="primary"
                className="cursor-pointer"
              >
                {tag}
              </Chip>
            ))}
          </div>
        </div>

        {selectedTags.length > 0 && (
          <div className="flex items-center gap-2">
            <span className="text-sm text-default-500">Active filters:</span>
            {selectedTags.map((tag) => (
              <Chip
                key={tag}
                onClose={() => toggleTag(tag)}
                variant="solid"
                color="primary"
              >
                {tag}
              </Chip>
            ))}
            <Button
              size="sm"
              variant="light"
              color="danger"
              onClick={() => setSelectedTags([])}
            >
              Clear all
            </Button>
          </div>
        )}
      </div>

      <div className="text-sm text-default-500">
        Showing {filteredAndSortedConferences.length} of {conferences.length}{" "}
        conferences
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filteredAndSortedConferences.map((conference) => (
          <ConferenceCard key={conference.id} conference={conference} />
        ))}
      </div>

      {filteredAndSortedConferences.length === 0 && (
        <div className="text-center py-12">
          <p className="text-lg text-default-500">
            No conferences found matching your criteria.
          </p>
        </div>
      )}
    </div>
  );
}
