import { redirect } from "next/navigation";

export default function HomePage() {
  const isLoggedIn = false;

  if (!isLoggedIn) {
    redirect("/login");
  }else{
    redirect("/dashboard")
  }

//   return <h1>Home Page</h1>;
}
