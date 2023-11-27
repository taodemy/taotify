import React, { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import CreateNewPlaylist from "./createNewPlaylist";
import { IMusicContext } from "@/types/context";
import { useGlobalContext } from "@/contexts/GlobalContext";
import PlaylistItem from "@/components/playlists/playlistItem";

interface PlayListManagementProps {
  isSongArchived: boolean;
  setIsSongArchived: (isSongArchived: boolean) => void;
  playlistContext: IMusicContext;
}

const PlayListManagement: React.FC<PlayListManagementProps> = ({
  isSongArchived,
  setIsSongArchived,
  playlistContext,
}) => {
  const [isTriggeredCreate, setIsTriggerCreate] = useState(false);
  const { playlistsName } = useGlobalContext();

  return (
    <div className="relative">
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="max-w-[235px] rounded-3xl bg-white px-[35px] text-dark">
          <div className="flex items-center pt-12">
            <p className="whitespace-nowrap font-roboto text-xl font-black">Save music to...</p>
            <RxCross1
              className="ml-auto h-5 w-5 text-dark"
              onClick={() => setIsSongArchived(!isSongArchived)}
            />
          </div>
          {playlistsName.map((playlistName, index) => (
            <PlaylistItem
              playlistName={playlistName}
              playlistContext={playlistContext}
              key={index}
            />
          ))}
          <CreateNewPlaylist
            isTriggeredCreate={isTriggeredCreate}
            setIsTriggerCreate={setIsTriggerCreate}
          />
        </div>
      </div>
    </div>
  );
};

export default PlayListManagement;
