import { SignInButton, SignUpButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6">
      <div className="flex flex-col items-center gap-2">
        <h1 className="text-5xl font-bold text-center">FlashyCardy</h1>
        <p className="text-lg text-muted-foreground text-center">
          Your personal flashcard platform.
        </p>
      </div>
      <div className="flex gap-4">
        <SignInButton mode="modal">
          <Button variant="outline">Sign In</Button>
        </SignInButton>
        <SignUpButton mode="modal">
          <Button>Sign Up</Button>
        </SignUpButton>
      </div>
    </main>
  );
}
