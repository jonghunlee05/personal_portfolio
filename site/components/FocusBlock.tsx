const focusItems = [
  "Materials science",
  "AI / ML",
  "Simulation",
  "Robotics",
];

export default function FocusBlock() {
  return (
    <div className="rounded border border-neutral-200 bg-neutral-50/80 px-4 py-3">
      <p className="text-xs font-medium uppercase tracking-wider text-neutral-500">
        Currently focused on
      </p>
      <p className="mt-1 text-sm text-neutral-700">
        {focusItems.join(" · ")}
      </p>
    </div>
  );
}
