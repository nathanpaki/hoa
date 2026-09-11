import AdminPageHeader from "@/components/admin/admin-page-header";
import BoardMembersForm from "@/components/admin/board-members-form";
import { getBoardMembers } from "@/lib/acttions/getBoardMembers";

export default async function BoardMembersPage() {
  const members = await getBoardMembers();

  return (
    <div className="mx-auto w-full max-w-5xl px-4 py-8 sm:px-6">
      <AdminPageHeader
        title="Board Members"
        description="Manage the board members displayed on the Deerfield HOA website."
      />

      <BoardMembersForm members={members} />
    </div>
  );
}
