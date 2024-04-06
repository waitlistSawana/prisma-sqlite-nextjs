import { db } from "@/db";

export default async function Home() {
  const dbUser = await db.user.findFirst({
    where: {
      id: 1,
    },
  });

  return (
    <main className="mx-auto w-full max-w-screen-xl px-2.5 md:px-20 text-center">
      <div className="mt-[10vh]">
        <div>prisma + sqlite + nextjs</div>
        <div>this is a form submit</div>
        <div>......</div>
        <div>this is a data return: </div>
        <div>id: {dbUser ? dbUser.id : "not found"}</div>
        <div>email: {dbUser ? dbUser.email : "not found"}</div>
        <div>name: {dbUser ? dbUser.name : "not found"}</div>
      </div>
    </main>
  );
}
