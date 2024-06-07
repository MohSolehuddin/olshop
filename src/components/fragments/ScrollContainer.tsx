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
      className="w-full h-[500px]
    overflow-x-scroll overflow-y-hidden">
      {children}
    </section>
  );
}
