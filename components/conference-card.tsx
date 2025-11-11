import { Card, CardHeader, CardBody, CardFooter, Chip, Link } from "@heroui/react";
import { Conference } from "@/lib/types";

interface ConferenceCardProps {
  conference: Conference;
}

export function ConferenceCard({ conference }: ConferenceCardProps) {
  const formattedDate = new Date(conference.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <Card className="h-full">
      <CardHeader className="flex-col items-start gap-2 pb-2">
        <h3 className="text-xl font-semibold">{conference.name}</h3>
        <p className="text-sm text-default-500">{formattedDate}</p>
      </CardHeader>
      <CardBody className="py-2">
        <div className="flex flex-wrap gap-2">
          {conference.tags.map((tag) => (
            <Chip key={tag} size="sm" variant="flat" color="primary">
              {tag}
            </Chip>
          ))}
        </div>
      </CardBody>
      <CardFooter>
        <Link
          href={conference.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-medium"
        >
          Visit Website →
        </Link>
      </CardFooter>
    </Card>
  );
}
