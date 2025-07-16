"use client";
import { Button } from "@/components/ui/Button/Button";
import { TriangleAlert } from "lucide-react";

export default function DeleteExamplePage() {
  return (
    <div className="p-8 ">
      <Button
        backgroundColor="bg-red-600 hover:bg-red-700 focus:ring-red-500"
        textColor="text-white"
        icon={TriangleAlert}
        size="md"
      >
        Supprimer
      </Button>
    </div>
  );
}
