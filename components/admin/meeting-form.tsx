"use client";

import { useState, useTransition } from "react";
import { CheckCircle2, Save } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { updateMeeting } from "@/lib/actions/dashboard/meeting";

type Meeting = {
  id: string;
  dayOfWeek: string;
  weekOfMonth: string | null;
  time: string;
  location: string;
  address: string | null;
};

type MeetingFormProps = {
  meeting: Meeting;
};

export default function MeetingForm({ meeting }: MeetingFormProps) {
  const [isPending, startTransition] = useTransition();

  const [saved, setSaved] = useState(false);
  const [error, setError] = useState("");

  const [form, setForm] = useState({
    dayOfWeek: meeting.dayOfWeek,
    weekOfMonth: meeting.weekOfMonth ?? "",
    time: meeting.time,
    location: meeting.location,
    address: meeting.address ?? "",
  });

  function updateField(field: keyof typeof form, value: string) {
    setForm((current) => ({
      ...current,
      [field]: value,
    }));

    setSaved(false);
    setError("");
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setSaved(false);
    setError("");

    startTransition(async () => {
      try {
        await updateMeeting(form);
        setSaved(true);
      } catch (error) {
        console.error(error);
        setError("There was a problem saving the meeting information.");
      }
    });
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Board Meeting Details</CardTitle>

        <CardDescription>
          Update the meeting information displayed throughout the Deerfield HOA
          website.
        </CardDescription>
      </CardHeader>

      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid gap-6 sm:grid-cols-2">
            {/* Day of Week */}
            <div className="space-y-2">
              <Label htmlFor="dayOfWeek">Day of Week</Label>

              <Input
                id="dayOfWeek"
                value={form.dayOfWeek}
                onChange={(event) =>
                  updateField("dayOfWeek", event.target.value)
                }
                placeholder="Thursday"
                required
              />
            </div>

            {/* Week of Month */}
            <div className="space-y-2">
              <Label htmlFor="weekOfMonth">Week of Month</Label>

              <Input
                id="weekOfMonth"
                value={form.weekOfMonth}
                onChange={(event) =>
                  updateField("weekOfMonth", event.target.value)
                }
                placeholder="2nd"
              />
            </div>

            {/* Time */}
            <div className="space-y-2">
              <Label htmlFor="time">Time</Label>

              <Input
                id="time"
                value={form.time}
                onChange={(event) => updateField("time", event.target.value)}
                placeholder="5:30 P.M."
                required
              />
            </div>

            {/* Location */}
            <div className="space-y-2">
              <Label htmlFor="location">Location</Label>

              <Input
                id="location"
                value={form.location}
                onChange={(event) =>
                  updateField("location", event.target.value)
                }
                placeholder="Park West Church"
                required
              />
            </div>
          </div>

          {/* Address */}
          <div className="space-y-2">
            <Label htmlFor="address">Address</Label>

            <Input
              id="address"
              value={form.address}
              onChange={(event) => updateField("address", event.target.value)}
              placeholder="Meeting address"
            />
          </div>

          {/* Status / Actions */}
          <div className="flex flex-col gap-4 border-t pt-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="text-sm">
              {saved && (
                <div className="flex items-center gap-2 text-green-600">
                  <CheckCircle2 className="h-4 w-4" />
                  <span>Meeting information saved.</span>
                </div>
              )}

              {error && <p className="text-destructive">{error}</p>}
            </div>

            <div className="flex gap-2">
              {/* Cancel */}
              <a
                href="/admin"
                className="inline-flex h-9 items-center justify-center rounded-md border px-4 text-sm font-medium transition-colors hover:bg-muted"
              >
                Cancel
              </a>

              {/* Save */}
              <Button type="submit" disabled={isPending}>
                <Save className="mr-2 h-4 w-4" />
                {isPending ? "Saving..." : "Save Changes"}
              </Button>
            </div>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
