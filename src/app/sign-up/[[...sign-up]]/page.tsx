import { SignUp } from "@clerk/nextjs";
import { dark } from "@clerk/themes";

export default function SignUpPage() {
  return (
    <main className="flex min-h-[calc(100vh-65px)] items-center justify-center">
      <SignUp appearance={{ baseTheme: dark }} />
    </main>
  );
}
