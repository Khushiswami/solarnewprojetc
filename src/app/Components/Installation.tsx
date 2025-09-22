import Image from "next/image";

export default function Installation() {
  const items = [
    {
      title: "Roof Strength Check",
      description:
        "Solar panels add around 15 kg/m² of load. We ensure your roof is strong enough to safely support this weight.",
      img: "/ban.jpg",
      link: "/system",
    },
    {
      title: "Roof Type",
      description:
        "RCC rooftops that need space for other uses require elevated hot-dip galvanized steel mounting structures. Metallic sheet roofs need lightweight, sturdy, and corrosion-resistant aluminum rail structures.",
      img: "/ban.jpg",
      link: "/system",
    },
    {
      title: "Slope, Direction & Mounting Angle",
      description:
        "Maximum solar generation occurs when panels face south and remain shadow-free between 9 AM and 4 PM. Ideal tilt angles vary by region: around 10° in South India and over 20° in North India.",
      img: "/ban.jpg",
      link: "/system",
    },
    {
      title: "Safe Rooftop Access",
      description:
        "Installers need safe, direct access to carry materials, and post-installation maintenance requires convenient passage for regular check-ups.",
      img: "/ban.jpg",
      link: "/system",
    },
  ];

  return (
    <section className="w-full py-12 mt-5  ">
      <div className=" mx-auto px-4 py-5 md:mx-20 md:py-8">
        {/* Heading and Description */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center mb-8 ">
          <h2 className="text-3xl font-bold md:text-3xl">
            Installation Requirements for Commercial Rooftops{" "}
          </h2>
          <p className="text-gray-600">
            At Gayatri Solar, we handle every aspect of commercial rooftop solar
            installation — from initial evaluation to final setup.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="bg-gray-100 rounded-lg overflow-hidden flex flex-col shadow-md hover:shadow-lg transition-shadow duration-300 group"
            >
              {/* Image */}
              <div className="relative w-full h-68">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col flex-1">
                <h3 className="text-2xl mb-2 md:text-2xl">{item.title}</h3>
                <p className="text-gray-600 flex-1">{item.description}</p>

                {/* Explore more with inline arrows */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
