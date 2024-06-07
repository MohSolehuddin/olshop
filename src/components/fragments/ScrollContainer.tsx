export default function ScrollContainer({
  children,
}: {
  children: React.ReactNode;
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
