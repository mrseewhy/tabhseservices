import { Link } from "react-router-dom";
import { TrainingData } from "../data/TrainingData";

const ServicesPage = () => {
  return (
    <div className="bg-white">
      {/* ── Intro ── */}
      <section className="py-16 md:py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-(--my-green) text-xs font-bold tracking-widest uppercase">
              World-class Trainings
            </span>
            <h2 className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl md:text-5xl leading-tight">
              Premium Training That Raises the Bar for{" "}
              <span className="text-(--my-green)">Safety</span> &{" "}
              <span className="text-(--my-purple)">Health</span>
            </h2>

            <div className="mt-3 mx-auto h-1 w-16 rounded-full bg-(--my-purple)" />
            <p className="mt-6 text-gray-600 text-sm leading-relaxed ">
              Our premium training programs are built for organizations where
              safety and health are not negotiable. We combine deep field
              expertise with current regulatory insight to deliver training that
              goes beyond compliance.
            </p>
          </div>
        </div>
      </section>

      {/* ── TrainingData grid ── */}
      <section className="pb-20">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {TrainingData.map((s) => {
              const isPurple = s.accent === "purple";
              return (
                <div
                  key={s.title}
                  className={`rounded-2xl border flex flex-col overflow-hidden hover:-translate-y-1 transition-transform duration-300 ${
                    isPurple
                      ? "border-(--my-purple)/20"
                      : "border-(--my-green)/20"
                  }`}
                >
                  {/* ── Image ── */}
                  <div className="relative h-60 w-full shrink-0">
                    <img
                      src={s.image}
                      alt={s.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/20" />
                  </div>

                  {/* ── Content ── */}
                  <div
                    className={`p-7 flex flex-col flex-1 ${
                      isPurple ? "bg-(--my-purple)/10" : "bg-(--my-green)/10"
                    }`}
                  >
                    {/* Title */}
                    <Link to={`/trainings/${s.slug}`}>
                      <h3 className="text-gray-900 font-bold text-base leading-snug mb-3">
                        {s.title}
                      </h3>
                    </Link>

                    {/* Description */}
                    <p className="text-gray-500 text-sm leading-relaxed mb-5 line-clamp-2">
                      {s.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
