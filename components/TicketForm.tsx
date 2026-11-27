"use client";
// Client Component because:
// - every input is "controlled": its value lives in useState and changes on onChange
// - validation runs in the browser when the user clicks Submit (onSubmit)
// - after booking we show a confirmation, which is also state
// There is no real server, so "booking" only updates React state.

import { useState } from "react";
import { Match, Team } from "@/types";
import { formatDate } from "@/lib/utils";
import Button from "./Button";

interface TicketFormProps {
  upcomingMatches: Match[];
  teams: Team[];
}

// The shape of the form data
interface TicketFormData {
  fullName: string;
  email: string;
  phone: string;
  matchId: string;
  stand: string;
  quantity: string; // inputs always give strings, we convert with Number()
  agree: boolean;
}

// One error message per field (only fields with errors are filled)
type FormErrors = Partial<Record<keyof TicketFormData, string>>;

const standPrices: Record<string, number> = {
  General: 800,
  Premium: 2500,
  VIP: 6000,
};

const emptyForm: TicketFormData = {
  fullName: "",
  email: "",
  phone: "",
  matchId: "",
  stand: "General",
  quantity: "1",
  agree: false,
};

export default function TicketForm({ upcomingMatches, teams }: TicketFormProps) {
  const [form, setForm] = useState<TicketFormData>(emptyForm);
  const [errors, setErrors] = useState<FormErrors>({});
  const [bookingId, setBookingId] = useState(""); // empty = not booked yet

  // Live total price, recalculated on every render
  const total = standPrices[form.stand] * (Number(form.quantity) || 0);

  function getTeamName(teamId: string) {
    return teams.find((t) => t.id === teamId)?.name ?? "Unknown";
  }

  function getMatchLabel(match: Match) {
    return `Match ${match.matchNo}: ${getTeamName(match.homeTeamId)} vs ${getTeamName(match.awayTeamId)} (${formatDate(match.date)})`;
  }

  // One change handler for all text inputs and selects.
  // The input's "name" tells us which field to update.
  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    setErrors({ ...errors, [name]: "" }); // clear the error while the user fixes it
  }

  function validate(): FormErrors {
    const newErrors: FormErrors = {};
    const quantity = Number(form.quantity);

    if (form.fullName.trim().length < 3) {
      newErrors.fullName = "Please enter your full name (at least 3 letters).";
    }
    if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      newErrors.email = "Please enter a valid email, e.g. rahul@gmail.com.";
    }
    if (!/^[6-9]\d{9}$/.test(form.phone)) {
      newErrors.phone = "Phone must be a 10-digit Indian mobile number, e.g. 9876543210.";
    }
    if (form.matchId === "") {
      newErrors.matchId = "Please choose a match.";
    }
    if (!Number.isInteger(quantity) || quantity < 1 || quantity > 10) {
      newErrors.quantity = "You can book between 1 and 10 tickets.";
    }
    if (!form.agree) {
      newErrors.agree = "You must accept the stadium rules.";
    }
    return newErrors;
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault(); // stop the browser from reloading the page

    const newErrors = validate();
    setErrors(newErrors);

    // Only "book" if there are no errors
    if (Object.keys(newErrors).length === 0) {
      setBookingId("CL-" + Math.floor(100000 + Math.random() * 900000));
    }
  }

  function bookAgain() {
    setForm(emptyForm);
    setErrors({});
    setBookingId("");
  }

  // ---------- Confirmation screen ----------
  if (bookingId !== "") {
    const match = upcomingMatches.find((m) => m.id === form.matchId);
    return (
      // Looks like a paper ticket: a dark main part and a gold stub, split by a dashed line.
      // The ticket rises in, then the gold stub lands on it like a stamp.
      <div className="mx-auto max-w-3xl overflow-hidden rounded-3xl shadow-xl md:flex motion-safe:animate-rise">
        <div className="floodlights flex-1 p-6 text-white sm:p-8">
          <p className="font-display text-xl font-bold text-gold">✅ Booking confirmed</p>
          <h2 className="mt-1 text-2xl font-extrabold sm:text-3xl">{match && getMatchLabel(match)}</h2>
          <p className="mt-3 text-slate-300">
            Thank you, {form.fullName}. Your tickets are booked. (This is a demo, nothing was charged.)
          </p>
          <dl className="mt-6 grid gap-4 text-sm sm:grid-cols-3">
            <div><dt className="text-slate-400">Stand</dt><dd className="font-semibold">{form.stand}</dd></div>
            <div><dt className="text-slate-400">Tickets</dt><dd className="font-semibold">{form.quantity}</dd></div>
            <div><dt className="text-slate-400">Email</dt><dd className="break-all font-semibold">{form.email}</dd></div>
          </dl>
        </div>
        <div className="flex flex-col justify-between gap-4 border-t-4 border-dashed border-night bg-gold p-6 text-night md:w-56 md:border-l-4 md:border-t-0 motion-safe:animate-stamp" style={{ animationDelay: "400ms" }}>
          <div>
            <p className="text-sm font-semibold">Booking ID</p>
            <p className="font-display text-3xl font-extrabold">{bookingId}</p>
            <p className="mt-3 text-sm font-semibold">Total paid</p>
            <p className="font-display text-3xl font-extrabold">₹{total.toLocaleString()}</p>
          </div>
          <Button variant="secondary" onClick={bookAgain}>Book more tickets</Button>
        </div>
      </div>
    );
  }

  // ---------- The form ----------
  const inputClass =
    "mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 focus:border-night focus:outline-none focus:ring-2 focus:ring-gold";
  const labelClass = "text-sm font-semibold text-night";
  const errorClass = "mt-1 text-sm font-medium text-ball motion-safe:animate-shake"; // errors shake when they appear

  return (
    <form
      onSubmit={handleSubmit}
      noValidate // we do our own validation instead of the browser's
      className="grid gap-5 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 sm:p-8 md:grid-cols-2"
    >
      <div>
        <label htmlFor="fullName" className={labelClass}>Full name</label>
        <input id="fullName" name="fullName" value={form.fullName} onChange={handleChange} className={inputClass} placeholder="Rahul Sharma" />
        {errors.fullName && <p className={errorClass}>{errors.fullName}</p>}
      </div>

      <div>
        <label htmlFor="email" className={labelClass}>Email</label>
        <input id="email" name="email" type="email" value={form.email} onChange={handleChange} className={inputClass} placeholder="rahul@gmail.com" />
        {errors.email && <p className={errorClass}>{errors.email}</p>}
      </div>

      <div>
        <label htmlFor="phone" className={labelClass}>Phone number</label>
        <input id="phone" name="phone" value={form.phone} onChange={handleChange} className={inputClass} placeholder="9876543210" />
        {errors.phone && <p className={errorClass}>{errors.phone}</p>}
      </div>

      <div>
        <label htmlFor="matchId" className={labelClass}>Match</label>
        <select id="matchId" name="matchId" value={form.matchId} onChange={handleChange} className={inputClass}>
          <option value="">-- Choose a match --</option>
          {upcomingMatches.map((match) => (
            <option key={match.id} value={match.id}>
              {getMatchLabel(match)}
            </option>
          ))}
        </select>
        {errors.matchId && <p className={errorClass}>{errors.matchId}</p>}
      </div>

      <div>
        <label htmlFor="stand" className={labelClass}>Stand</label>
        <select id="stand" name="stand" value={form.stand} onChange={handleChange} className={inputClass}>
          {Object.keys(standPrices).map((stand) => (
            <option key={stand} value={stand}>
              {stand} (₹{standPrices[stand]} each)
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="quantity" className={labelClass}>Number of tickets</label>
        <input id="quantity" name="quantity" type="number" min={1} max={10} value={form.quantity} onChange={handleChange} className={inputClass} />
        {errors.quantity && <p className={errorClass}>{errors.quantity}</p>}
      </div>

      <div className="md:col-span-2">
        <label className="flex items-center gap-2 text-sm">
          <input
            type="checkbox"
            checked={form.agree}
            onChange={(e) => {
              setForm({ ...form, agree: e.target.checked });
              setErrors({ ...errors, agree: "" });
            }}
            className="h-4 w-4 accent-night"
          />
          I accept the stadium rules (no glass bottles, no fireworks).
        </label>
        {errors.agree && <p className={errorClass}>{errors.agree}</p>}
      </div>

      {/* Live total in a dark strip */}
      <div className="flex flex-col gap-3 rounded-xl bg-night p-4 text-white sm:flex-row sm:items-center sm:justify-between md:col-span-2">
        <p>
          <span className="block text-sm text-slate-300">Total ({form.quantity || 0} × {form.stand})</span>
          <span className="font-display text-4xl font-extrabold text-gold">₹{total.toLocaleString()}</span>
        </p>
        <Button type="submit">Book tickets</Button>
      </div>
    </form>
  );
}
