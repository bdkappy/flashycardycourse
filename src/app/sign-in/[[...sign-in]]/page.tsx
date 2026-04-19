import { SignIn } from "@clerk/nextjs";
import { dark } from "@clerk/themes";

export default function SignInPage() {
  return (
    <main className="flex min-h-[calc(100vh-65px)] items-center justify-center">
      <SignIn appearance={{ baseTheme: dark }} />
    </main>
  );
}
