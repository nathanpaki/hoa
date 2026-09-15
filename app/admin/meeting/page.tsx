import AdminPageHeader from "@/components/admin/admin-page-header";
import MeetingForm from "@/components/admin/meeting-form";
import { getMeeting } from "@/lib/actions/dashboard/meeting";

export default async function MeetingPage() {
  const meeting = await getMeeting();

  if (!meeting) {
    return (
      <div className="mx-auto w-full max-w-4xl px-4 py-8 sm:px-6">
        <AdminPageHeader
          title="Meeting Information"
          description="Manage the board meeting information displayed on the website."
        />

        <div className="rounded-lg border bg-muted/30 p-6 text-sm text-muted-foreground">
          No meeting information was found in the database.
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto w-full max-w-4xl px-4 py-8 sm:px-6">
      <AdminPageHeader
        title="Meeting Information"
        description="Manage the board meeting information displayed on the website."
      />

      <MeetingForm meeting={meeting} />
    </div>
  );
}
