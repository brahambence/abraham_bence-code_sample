/**
 * @jest-environment jsdom
 */

import Song from "types/song";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Songs from "pages/songs";
import { languageOptions, defaultLanguage } from "components/language-filter";

const nonDefaultLanguages = languageOptions.filter(
  language => language != defaultLanguage
);

const songsFixture: Song[] =
  [
    {
      slug: "annenmaykantereit-jenny_jenny",
      title: "Jenny Jenny",
      artist: "AnnenMayKantereit",
      videoId: "Jsf6DCEnb3s",
      language: "german",
      coverImage: "annenmaykantereit-jenny_jenny.jpg",
      lyricLines: [],
    },
    {
      slug: "lea-du_tust_es_immer_wieder",
      title: "Du tust es immer wieder",
      artist: "LEA",
      videoId: "HGQFKoObkGA",
      language: "german",
      coverImage: "lea-trappenhaus.jpg",
      lyricLines: [],
    },
    {
      slug: 'the_pirouettes-lescalier',
      title: "L'escalier",
      artist: 'The Pirouettes',
      videoId: 'fc_UryVAfeA',
      language: 'french',
      coverImage: 'the_pirouettes-carrement_carrement.jpg',
      lyricLines: [],
    },
    {
      slug: 'napra-ballada',
      title: 'Ballada',
      artist: 'Napra',
      videoId: '5k3fC9ATTKU',
      language: 'hungarian',
      coverImage: 'napra-holdvilagos.jpg',
      lyricLines: [],
    },
  ];

describe("Songs Page", () => {
  it("Renders song list with default language", () => {
    const { getByRole } = render(<Songs songs={songsFixture} />);
    const selectedLanguage = getByRole("button", { name: /Filter songs by language/ });
    expect(selectedLanguage).toHaveTextContent(defaultLanguage);
  });

  it("Only selected language is visible on load", () => {
    const { queryByText } = render(<Songs songs={songsFixture} />);

    const nonDefaultLanguages = languageOptions.filter(
      language => language != defaultLanguage
    ).map(language => queryByText(language));

    expect(nonDefaultLanguages).toEqual(
      Array(nonDefaultLanguages.length).fill(null)
    );
  });

  it("Clicking selected language reveals other options", () => {
    const { getByRole, queryByText } = render(<Songs songs={songsFixture} />);

    const selectedLanguage = getByRole("button", { name: /Filter songs by language/ });
    userEvent.click(selectedLanguage);

    nonDefaultLanguages
      .map(language => queryByText(language))
      .forEach(language => {
        expect(language).toBeInTheDocument();
      });
  });

  it("Displays list items with appropriate attributes", () => {
    const { getAllByTestId } = render(<Songs songs={songsFixture} />);
    const songListItems = getAllByTestId("song-list-item");
    songListItems.forEach((item, index) => {
      const song = songsFixture[index];

      const linkPathname = item.querySelector('a').pathname;
      expect(linkPathname).toEqual(`/song/${song.slug}`);

      const artist = item.querySelector('[data-testid="artist"]').textContent;
      expect(artist).toEqual(song.artist);

      const title = item.querySelector('[data-testid="title"]').textContent;
      expect(title).toEqual(song.title);
    })
  });

  it("Matches snapshot", () => {
    const { container } = render(<Songs songs={songsFixture} />);
    expect(container.firstChild).toMatchSnapshot();
  })
});