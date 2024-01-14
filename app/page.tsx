import { SignInButton, SignedOut, UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div>
      Hellow World
      <UserButton afterSignOutUrl="/" />
      <SignedOut>
        <SignInButton />
      </SignedOut>
    </div>
  );
}
