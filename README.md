# IPL Cricket Dashboard

**CS4032 Web Programming, Assignment 3 (Next.js Frontend)**

| | |
|---|---|
| Group | **G33** (Section BCY-5B) |
| Topic | **39. Cricket league dashboard** (Entertainment) |

| Member | Roll number |
|---|---|
| Sameer Ahmed | 24I-2047 |
| Affaf Shahid | 24I-2009 |
| Muhammad Subhan | 24I-2082 |

## About the app

IPL Cricket Dashboard is the frontend of a cricket league website built around the 10 Indian Premier League teams and 40 well-known players (Kohli, Rohit, Dhoni, Bumrah and more). It shows fixtures and results, a points table worked out from the match results, team pages with squads, and player profiles with stats. Users can search, filter and sort players, build a Fantasy XI within a 100-credit budget, and book match tickets through a form with validation. Team names, grounds and player names are real, but all scores, results and stats are **mock data** made up for this project. Booking tickets and saving a team only update React state. This is an unofficial student project, not linked to the IPL or BCCI, and the logos are our own placeholders.

**Tech:** Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS 4, `next/font` (Saira Condensed and Barlow). No backend.

**Design:** a "night match under the floodlights" theme. The colours (night blue, floodlight gold, outfield green, ball red) are defined once in `app/globals.css` with Tailwind's `@theme`, so classes like `bg-night` and `text-gold` work everywhere. Each team's own colour is used on its cards, banner and match rows.

**Animations (CSS only, no library):** the Home hero rises in piece by piece under flickering floodlights, the team-colour stripe drops in, cards lift on hover, the Fantasy counters pop when you add a player, form errors shake, and the booking confirmation lands like a stamped ticket. The keyframes are in `app/globals.css`, and every animation uses `motion-safe:` so it is skipped for users who turn on "reduce motion".

## How to run

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

To make a production build: `npm run build`, then `npm start`.

## Routes

| Route | What it shows | Type |
|---|---|---|
| `/` | Home: hero with the next match, league numbers, next 3 matches, Orange Cap and Purple Cap race, top 3 of the table, Fantasy favourites | Server |
| `/teams` | All 10 IPL teams as cards | Server |
| `/teams/[id]` | **Dynamic.** One team: banner, season stats, squad, all its matches. Unknown id shows the 404 page | Server + `loading.tsx` |
| `/players` | All 40 players with **search by name, filter by team, filter by role, and sort** (name, runs, wickets, average) | Server page + Client `PlayersExplorer` |
| `/players/[id]` | **Dynamic.** Player profile and season stats (mock). Unknown id shows the 404 page | Server + `loading.tsx` |
| `/fixtures` | Upcoming matches and results | Server |
| `/points-table` | Full standings (played, won, lost, points) | Server |
| `/fantasy` | **Stateful feature:** Fantasy XI builder (pick 11 players, 100 credits, name and save the team) | Server page + Client `FantasyTeamBuilder` |
| `/tickets` | **Form:** ticket booking with controlled inputs, validation errors, live total price in ₹, and a confirmation | Server page + Client `TicketForm` |
| `/about` | About the project and the team | Server |
| any other URL | Custom 404 page (`app/not-found.tsx`) | Server |

## Folder structure

```
app/                  routes (App Router)
  layout.tsx          root layout: Navbar + page + Footer on every page
  page.tsx            Home
  not-found.tsx       404 page
  teams/page.tsx, teams/[id]/page.tsx, teams/[id]/loading.tsx
  players/page.tsx, players/[id]/page.tsx, players/[id]/loading.tsx
  fixtures/  points-table/  fantasy/  tickets/  about/
components/           18 reusable components, each with a typed props interface
data/                 mock data: teams.ts (10), players.ts (40), matches.ts (20)
lib/                  pointsTable.ts (builds the table from results), utils.ts
types/index.ts        TypeScript types: Team, Player, Match, PointsRow
public/               SVG images (team logos, player pictures)
```

## Contribution table

| Member | Pages | Components and other files |
|---|---|---|
| **Sameer Ahmed** (24I-2047) | Root layout, Home (`/`), About (`/about`), 404 page (`not-found.tsx`) | `Navbar` (client), `Footer`, `PageHeader`, `StatBox`, `SectionHeading`, `TeamStripe`, `CapRace`, `globals.css` (colour theme and fonts) |
| **Affaf Shahid** (24I-2009) | Teams (`/teams`), Team detail (`/teams/[id]`), Players (`/players`), Player detail (`/players/[id]`), both `loading.tsx` | `PlayersExplorer` (client: search, filter, sort), `PlayerCard`, `TeamCard`, `SearchBar`, `Badge`, `LoadingSpinner`, `types/index.ts`, `data/teams.ts`, `data/players.ts` |
| **Muhammad Subhan** (24I-2082) | Tickets (`/tickets`), Fantasy XI (`/fantasy`), Fixtures (`/fixtures`), Points table (`/points-table`) | `TicketForm` (client: form and validation), `FantasyTeamBuilder` (client: stateful feature), `MatchCard`, `PointsTable`, `Button`, `data/matches.ts`, `lib/pointsTable.ts`, `lib/utils.ts` |

## Links

- **Git repository:** https://github.com/Denarzai/cricket-league
- **Video demo:** _add Google Drive / YouTube (Unlisted) link here_. Sharing must be "Anyone with the link, Viewer".
- **Vercel (bonus):** _add live link here if deployed_

## AI tools used

- **Claude (Anthropic):** used to help plan the pages and components, generate the mock data and SVG placeholder images, write parts of the code, and check the app against the assignment checklist. Every member has gone through and can explain the code they present.
