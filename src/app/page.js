"use client"
import AddUser from "./components/AddUser";
import DisplayUser from "./components/DisplayUser";
import { Providers } from "../redux/providers";

export default function Home() {
  return (
    <main >
      <Providers>
      <AddUser/>
      <DisplayUser/>
      </Providers>
    </main>
  );
}
