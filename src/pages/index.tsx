import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Layout from "../components/Layout";

export default function Index() {
    const router = useRouter();

    useEffect(() => {
        setTimeout(() => router.push("/home"), 5000);
    }, []);
    return (
        <Layout>
            <h3 className="error">
                Syntax error on 69:420. Please wait to be redirected...
            </h3>
        </Layout>
    );
}
