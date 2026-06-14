import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

export const Route = createFileRoute("/test-supabase")({
  component: TestSupabase,
});

function TestSupabase() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function loadUsers() {
      const { data, error } = await supabase
        .from("users")
        .select("*");

      console.log(data);
      console.log(error);

      if (data) setUsers(data);
    }

    loadUsers();
  }, []);

  return (
    <div>
      <h1>Supabase Test</h1>
      <pre>{JSON.stringify(users, null, 2)}</pre>
    </div>
  );
}