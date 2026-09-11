"use client";

import { useState, useTransition } from "react";
import { CheckCircle2, Plus, Save, Trash2, Users } from "lucide-react";

import {
  createBoardMember,
  deleteBoardMember,
  updateBoardMember,
} from "@/lib/acttions/dashboard/board-member";

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

type BoardMember = {
  id: string;
  name: string;
  image: string | null;
  title: string | null;
  sortOrder: number;
};

type BoardMembersFormProps = {
  members: BoardMember[];
};

export default function BoardMembersForm({ members }: BoardMembersFormProps) {
  const [isPending, startTransition] = useTransition();

  const [form, setForm] = useState<BoardMember[]>(members);

  const [savedId, setSavedId] = useState<string | null>(null);
  const [error, setError] = useState("");

  function updateField(
    id: string,
    field: keyof BoardMember,
    value: string | number,
  ) {
    setForm((current) =>
      current.map((member) =>
        member.id === id
          ? {
              ...member,
              [field]: value,
            }
          : member,
      ),
    );

    setSavedId(null);
    setError("");
  }

  function handleSave(member: BoardMember) {
    setSavedId(null);
    setError("");

    startTransition(async () => {
      try {
        await updateBoardMember(member.id, {
          name: member.name,
          image: member.image ?? "",
          title: member.title ?? "",
          sortOrder: member.sortOrder,
        });

        setSavedId(member.id);
      } catch (error) {
        console.error(error);
        setError("There was a problem saving the board member.");
      }
    });
  }

  function handleDelete(id: string) {
    const member = form.find((item) => item.id === id);

    if (!member) {
      return;
    }

    const confirmed = window.confirm(
      `Are you sure you want to delete ${member.name}?`,
    );

    if (!confirmed) {
      return;
    }

    setError("");

    startTransition(async () => {
      try {
        await deleteBoardMember(id);

        setForm((current) => current.filter((member) => member.id !== id));

        setSavedId(null);
      } catch (error) {
        console.error(error);
        setError("There was a problem deleting the board member.");
      }
    });
  }

  function handleAdd() {
    setError("");

    startTransition(async () => {
      try {
        const newMember = await createBoardMember({
          name: "New Board Member",
          image: "",
          title: "",
          sortOrder: form.length,
        });

        setForm((current) => [...current, newMember]);
      } catch (error) {
        console.error(error);
        setError("There was a problem adding the board member.");
      }
    });
  }

  return (
    <div className="space-y-6">
      {form.length === 0 && (
        <Card>
          <CardContent className="flex flex-col items-center justify-center py-12 text-center">
            <div className="mb-4 rounded-full bg-primary/10 p-3">
              <Users className="h-6 w-6 text-primary" />
            </div>

            <h3 className="text-lg font-semibold">No Board Members</h3>

            <p className="mt-1 text-sm text-muted-foreground">
              Add the first board member to get started.
            </p>
          </CardContent>
        </Card>
      )}

      {form.map((member) => (
        <Card key={member.id}>
          <CardHeader>
            <div className="flex items-start justify-between gap-4">
              <div>
                <CardTitle>Board Member</CardTitle>

                <CardDescription>
                  Update this board member's information.
                </CardDescription>
              </div>

              <Button
                type="button"
                variant="ghost"
                size="icon"
                onClick={() => handleDelete(member.id)}
                disabled={isPending}
                className="text-destructive hover:text-destructive"
                aria-label={`Delete ${member.name}`}
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          </CardHeader>

          <CardContent>
            <div className="grid gap-6 sm:grid-cols-2">
              {/* Name */}
              <div className="space-y-2">
                <Label htmlFor={`name-${member.id}`}>Name</Label>

                <Input
                  id={`name-${member.id}`}
                  value={member.name}
                  onChange={(event) =>
                    updateField(member.id, "name", event.target.value)
                  }
                  placeholder="Board member name"
                />
              </div>

              {/* Title */}
              <div className="space-y-2">
                <Label htmlFor={`title-${member.id}`}>Title</Label>

                <Input
                  id={`title-${member.id}`}
                  value={member.title ?? ""}
                  onChange={(event) =>
                    updateField(member.id, "title", event.target.value)
                  }
                  placeholder="Board Member"
                />
              </div>

              {/* Image */}
              <div className="space-y-2">
                <Label htmlFor={`image-${member.id}`}>Image</Label>

                <Input
                  id={`image-${member.id}`}
                  value={member.image ?? ""}
                  onChange={(event) =>
                    updateField(member.id, "image", event.target.value)
                  }
                  placeholder="Image name or path"
                />
              </div>

              {/* Sort Order */}
              <div className="space-y-2">
                <Label htmlFor={`sortOrder-${member.id}`}>Sort Order</Label>

                <Input
                  id={`sortOrder-${member.id}`}
                  type="number"
                  value={member.sortOrder}
                  onChange={(event) =>
                    updateField(
                      member.id,
                      "sortOrder",
                      Number(event.target.value),
                    )
                  }
                />
              </div>
            </div>

            <div className="mt-6 flex flex-col gap-4 border-t pt-6 sm:flex-row sm:items-center sm:justify-between">
              <div className="text-sm">
                {savedId === member.id && (
                  <div className="flex items-center gap-2 text-green-600">
                    <CheckCircle2 className="h-4 w-4" />
                    <span>Board member saved.</span>
                  </div>
                )}

                {error && <p className="text-destructive">{error}</p>}
              </div>

              <Button
                type="button"
                onClick={() => handleSave(member)}
                disabled={isPending}
              >
                <Save className="mr-2 h-4 w-4" />
                {isPending ? "Saving..." : "Save Changes"}
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}

      {/* Bottom Actions */}
      <div className="flex flex-col gap-3 border-t pt-6 sm:flex-row sm:justify-between">
        <a
          href="/admin"
          className="inline-flex h-9 items-center justify-center rounded-md border px-4 text-sm font-medium transition-colors hover:bg-muted"
        >
          Cancel
        </a>

        <Button type="button" onClick={handleAdd} disabled={isPending}>
          <Plus className="mr-2 h-4 w-4" />
          Add Board Member
        </Button>
      </div>
    </div>
  );
}
