"use client";
import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

export default function Dashboard() {
  const [submission, setSubmission] = useState(0);
  const [accepted, setAccepted] = useState(0);
  const [pending, setPending] = useState(0);
  const supabase = createClientComponentClient();
  useEffect(() => {
    async function fetchProducts() {
      let { error, count: scount } = await supabase
        .from("products")
        .select("*", { count: "exact" });
      let { error: aerror, count: acount } = await supabase
        .from("products")
        .select("*", { count: "exact" })
        .eq("status", "Published");
      let { error: perror, count: pcount } = await supabase
        .from("products")
        .select("*", { count: "exact" })
        .eq("status", "false");
      // handle error and set state with products
      if (error && aerror && perror) console.log("error", error);
      else {
        setSubmission(scount);
        setAccepted(acount);
        setPending(pcount);
      }
    }

    fetchProducts();
  }, [supabase]);
  return (
    <div className="p-4 sm:ml-64">
      <div className="p-4 rounded-lg dark:border-gray-700 mt-14">
        <div className="grid grid-cols-3 gap-4">
          <Card title="Total Submission" count={submission} />
          <Card title="Total Accepted" count={accepted} />
          <Card title="Total Pendings" count={pending} />
          <iframe
            className="col-span-3"
            width="100%"
            height="197"
            style={{
              padding: 0,
              margin: 0,
              border: "none",
              background: "transparent",
            }}
            frameBorder="0"
            scrolling="no"
            src="https://dayspedia.com/if/digit/?v=1&iframe=eyJ3LTEyIjp0cnVlLCJ3LTExIjp0cnVlLCJ3LTEzIjp0cnVlLCJ3LTE0Ijp0cnVlLCJ3LTE1IjpmYWxzZSwidy0xMTAiOnRydWUsInctd2lkdGgtMCI6ZmFsc2UsInctd2lkdGgtMSI6dHJ1ZSwidy13aWR0aC0yIjpmYWxzZSwidy0xNiI6IjI0cHgiLCJ3LTE5IjoiNDgiLCJ3LTE3IjoiMTYiLCJ3LTIxIjp0cnVlLCJiZ2ltYWdlIjotMSwiYmdpbWFnZVNldCI6ZmFsc2UsInctMjFjMCI6IiMwYTBhMGEiLCJ3LTAiOnRydWUsInctMyI6ZmFsc2UsInctM2MwIjoiI2Y1ZjVmNSIsInctM2IwIjoiMSIsInctNiI6IiNmY2ZjZmMiLCJ3LTIwIjp0cnVlLCJ3LTQiOiIjYWQzN2Q3Iiwidy0xOCI6ZmFsc2UsInctd2lkdGgtMmMtMCI6IjMwMCIsInctMTE1Ijp0cnVlfQ==&lang=en&cityid=9611"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
