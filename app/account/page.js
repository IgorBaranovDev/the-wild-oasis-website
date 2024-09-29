import { Span } from "next/dist/trace";
import { auth } from "../_lib/auth";

export const metadata = {
  title: "Guest area",
};

export default async function Page() {
  const session = await auth();
  const firstName = session.user.name.split(" ").at(0);

  return (
    <div>
      <h2 className="font-semibold text-2xl text-accent-400 mb-7">
        Welcome,{" "}
        <span className=" text-transform: capitalize">{firstName}</span>
      </h2>
    </div>
  );
}
