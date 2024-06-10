const stats = [
  {
    id: 1,
    name: "Sampai dengan 24 jam pengerjaan",
    value: "Kecepatan",
  },
  { id: 2, name: "mulai dari 300 ribu", value: "Murah" },
  { id: 3, name: "Kepercayaan client adalah prioritas", value: "Terpercaya" },
];

export default function Stat() {
  return (
    <div
      id="About"
      className="bg-white py-24 sm:py-32 h-screen flex place-items-center ">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="mx-auto flex max-w-xs flex-col gap-y-4">
              <dt className="text-base leading-7 text-gray-600">{stat.name}</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
