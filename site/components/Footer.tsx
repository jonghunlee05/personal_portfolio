export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 px-4 py-8">
      <div className="mx-auto max-w-2xl text-center text-sm text-neutral-500">
        <p>Jonghun Lee</p>
        <p className="mt-1">{new Date().getFullYear()}</p>
        <p className="mt-2 text-neutral-400">
          Built with intention, not decoration.
        </p>
      </div>
    </footer>
  );
}
