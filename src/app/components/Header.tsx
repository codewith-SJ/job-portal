import { getSignInUrl, withAuth, signOut } from "@workos-inc/authkit-nextjs";
import Link from "next/link";
export default async function Header() {
  const { user } = await withAuth();
  const signInUrl = await getSignInUrl();
  // const signOutUrl = await getSignUpUrl();
  return (
    <header>
      <div className="container flex items-center justify-between mx-auto my-4">
        <Link href={"/"} className="font-bold text-xl">
          Job Portal
        </Link>

        <nav className="flex gap-2  *:py-2 *:px-4 *:rounded-md">
          {!user && (
            <Link href={signInUrl} className="py-2 px-4 rounded-md bg-gray-200">
              Login
            </Link>
          )}
          {user && (
            <form
              action={async () => {
                "use server";
                await signOut();
              }}
            >
              <button
                type="submit"
                className="py-2 px-4 rounded-md bg-gray-200"
              >
                Logout, {user.firstName}
              </button>
            </form>
          )}
          <Link
            href={"/new-listing"}
            className="py-2 px-4 rounded-md bg-blue-600 text-white"
          >
            Post a job
          </Link>
        </nav>
      </div>
    </header>
  );
}
