import Button from "@/components/buttons";
import tokenHandler from "@/utils/tokenHandler";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const SearchBar = () => {
  const router = useRouter();
  const [bearerToken, setBearerToken] = useState<string>("");
  useEffect(() => {
    const { token } = tokenHandler.getToken();
    token && setBearerToken(token);
    token && router.push("/member/prices");
  }, []);

  return (
    <div className="fixed top-0 h-[64px] w-full border-2 border-dotted bg-light transition-all duration-200 ease-in-out md:left-[64px] lg:left-[320px]">
      This is the top search bar
      <Link href="/login">
        <Button label="login" />
      </Link>
    </div>
  );
};

export default SearchBar;
