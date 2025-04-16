import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/draw")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="p-2 max-w-[900px]">
      <div className="flex flex-row space-x-2">
        <div>Foundations set</div>
        <Input placeholder="Collector's number" />
        <Button>Submit</Button>
      </div>
    </div>
  );
}
