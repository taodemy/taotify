import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Playlist() {
  const router = useRouter();
  const [playlistName, setPlaylistName] = useState("");

  useEffect(() => {
    const currentPath = window.location.pathname;
    const pathParts = currentPath.split("/");
    const lastPathPart = pathParts[pathParts.length - 1];
    setPlaylistName(lastPathPart);
  }, [router.pathname]);

  return (
    <p>
      `playlist id <span className="underline">no.{playlistName}</span> from localStorage`
    </p>
  );
}
