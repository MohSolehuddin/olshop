export default function ScrollContainer({
  children,
  id,
}: {
  children: React.ReactNode;
  id: string;
}) {
  return (
    <section
      id="ScrollContainer"
      className="w-full h-screen
    overflow-x-scroll overflow-y-hidden flex place-items-center">
      {children}
    </section>
  );
}
