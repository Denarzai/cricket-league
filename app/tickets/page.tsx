import type { Metadata } from "next";
import { getUpcomingMatches } from "@/data/matches";
import { teams } from "@/data/teams";
import PageHeader from "@/components/PageHeader";
import TicketForm from "@/components/TicketForm";

export const metadata: Metadata = {
  title: "Buy Tickets",
  description: "Book tickets for upcoming IPL matches.",
};

export default function TicketsPage() {
  return (
    <div>
      <PageHeader
        title="Buy Tickets"
        subtitle="Book seats for an upcoming match. General ₹800, Premium ₹2500, VIP ₹6000."
      />
      <TicketForm upcomingMatches={getUpcomingMatches()} teams={teams} />
    </div>
  );
}
