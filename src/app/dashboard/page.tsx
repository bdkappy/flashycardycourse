import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import Link from "next/link";
import { db } from "@/db";
import { decksTable } from "@/db/schema";
import { eq } from "drizzle-orm";
import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { PlusIcon, LayersIcon } from "lucide-react";

export default async function DashboardPage() {
  const { userId } = await auth();
  if (!userId) redirect("/sign-in");

  const decks = await db
    .select()
    .from(decksTable)
    .where(eq(decksTable.userId, userId));

  return (
    <main className="mx-auto max-w-5xl px-6 py-10">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">My Decks</h1>
          <p className="text-muted-foreground mt-1">
            {decks.length === 0
              ? "No decks yet — create one to get started."
              : `${decks.length} deck${decks.length === 1 ? "" : "s"}`}
          </p>
        </div>
        <Link href="/dashboard/decks/new" className={buttonVariants()}>
          <PlusIcon />
          New Deck
        </Link>
      </div>

      {decks.length === 0 ? (
        <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-border py-24 text-center">
          <LayersIcon className="mb-4 size-10 text-muted-foreground" />
          <h2 className="text-lg font-semibold">No decks yet</h2>
          <p className="text-muted-foreground mb-6 mt-1 text-sm">
            Create your first flashcard deck to start studying.
          </p>
          <Link href="/dashboard/decks/new" className={buttonVariants()}>
            <PlusIcon />
            Create Deck
          </Link>
        </div>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {decks.map((deck) => (
            <Link key={deck.id} href={`/dashboard/decks/${deck.id}`}>
              <Card className="h-full transition-colors hover:bg-muted/50">
                <CardHeader>
                  <CardTitle className="truncate">{deck.title}</CardTitle>
                  {deck.description && (
                    <CardDescription className="line-clamp-2">
                      {deck.description}
                    </CardDescription>
                  )}
                </CardHeader>
                <CardFooter>
                  <span className="text-xs text-muted-foreground">
                    {new Date(deck.createdAt).toLocaleDateString()}
                  </span>
                </CardFooter>
              </Card>
            </Link>
          ))}
        </div>
      )}
    </main>
  );
}
