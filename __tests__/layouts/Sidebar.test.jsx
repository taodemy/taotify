import { render, screen } from "@testing-library/react";
import Sidebar from "../../src/layouts/SideBar";
import "@testing-library/jest-dom";

describe("Sidebar", () => {
  beforeEach(() => {
    render(<Sidebar />);
  });

  it("renders sidebar txt", () => {
    const SideBarTitle = screen.getByText(/Taotify/i);
    expect(SideBarTitle).toBeInTheDocument();
  });

  it("renders Menu heading", () => {
    const menuHeading = screen.getByText(/MENU/i);
    expect(menuHeading).toBeInTheDocument();
  });

  it("renders Home SubMenu", () => {
    const menuHeading = screen.getByText(/Home/i);
    expect(menuHeading).toBeInTheDocument();
  });

  it("renders Discover SubMenu", () => {
    const discoverSubMenu = screen.getByText(/Discover/i);
    expect(discoverSubMenu).toBeInTheDocument();
  });

  it("renders Albums SubMenu", () => {
    const albumsSubMenu = screen.getByText(/Albums/i);
    expect(albumsSubMenu).toBeInTheDocument();
  });

  it("renders Artists SubMenu", () => {
    const artistsSubMenu = screen.getByText(/Artists/i);
    expect(artistsSubMenu).toBeInTheDocument();
  });

  it("renders Videos SubMenu", () => {
    const videosSubMenu = screen.getByText(/Videos/i);
    expect(videosSubMenu).toBeInTheDocument();
  });

  it("renders Your Library Heading", () => {
    const libraryHeading = screen.getByText(/Your Library/i);
    expect(libraryHeading).toBeInTheDocument();
  });

  it("renders RecentlyPlayed SubMenu", () => {
    const recentlyPlayedMenu = screen.getByText(/Recently Played/i);
    expect(recentlyPlayedMenu).toBeInTheDocument();
  });

  it("renders Favourite songs SubMenu", () => {
    const favouriteSongSubMenu = screen.getByText(/Favourite songs/i);
    expect(favouriteSongSubMenu).toBeInTheDocument();
  });

  it("renders playlists heading", () => {
    const playlistsHeading = screen.getByText(/PLAYLISTS/i);
    expect(playlistsHeading).toBeInTheDocument();
  });
});
