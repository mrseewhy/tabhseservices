import { Link, useParams } from "react-router-dom";
import { TrainingData } from "../data/TrainingData";

const Trainings = () => {
  const { slug } = useParams();
  const training = TrainingData.find((t) => t.slug === slug);
  return (
    <section className="py-16 ">
      <div className="container">
        <div className="max-w-5xl mx-auto ">
          {/* 2. Constrained Image - never too big */}
          {training?.image && (
            <div className="mt-8 ">
              <div className="mx-auto h-auto max-w-5xl bg-gray-100 overflow-hidden rounded-xl shadow-lg">
                <img
                  src={training.image}
                  alt={training?.imageAlt || training.title}
                  className=" h-auto w-full aspect-video object-contain"
                  loading="lazy"
                />
              </div>
            </div>
          )}

          {/* 3. Key Details: Venue, Date, Account Number */}
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {training?.venue && (
              <div className="rounded-lg border border-gray-200 p-5 bg-(--my-purple)">
                <p className="text-lg font-semibold uppercase tracking-wide text-white">
                  Venue
                </p>
                <address className="mt-2 text-sm not-italic text-gray-200 font-medium">
                  {training?.venue}
                </address>
              </div>
            )}

            {training?.date && (
              <div className="rounded-lg border border-gray-200 p-5 bg-(--my-green)">
                <p className="text-lg font-semibold uppercase tracking-wide text-white">
                  Date
                </p>
                <time className="mt-2 text-sm block text-gray-200 font-medium">
                  {training?.date}
                </time>
              </div>
            )}

            {training?.accountNumber && (
              <div className="rounded-lg border border-gray-200 p-5 sm:col-span-2 lg:col-span-1  bg-(--my-purple)">
                <p className="text-lg font-semibold uppercase tracking-wide text-white">
                  Payment Details
                </p>
                <p className="mt-2 text-sm text-gray-200 font-medium break-all">
                  {training.accountNumber}
                </p>
              </div>
            )}
          </div>

          {/* 4. Description */}
          {training?.description && (
            <div className="mt-10 prose prose-gray max-w-none">
              <h2 className="text-2xl font-bold text-gray-900">
                About This Training
              </h2>
              <p className="mt-4 text-gray-600 leading-relaxed">
                {training.description}
              </p>
            </div>
          )}
          {/* price */}
          {training?.fee && (
            <div className="mt-10 prose prose-gray max-w-none">
              <h2 className="text-2xl font-bold text-gray-900">Training Fee</h2>
              <p className="mt-4 text-gray-600 leading-relaxed">
                {training.fee}
              </p>
            </div>
          )}

          {/* 5. Embedded Form if any */}
          {training?.formEmbed && (
            <div className="mt-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Register Now
              </h2>
              <div className="overflow-hidden rounded-xl border border-gray-200 bg-white">
                <iframe
                  src={training.formEmbed}
                  title={`${training.title} Registration Form`}
                  className="w-full min-h-[700px]"
                  loading="lazy"
                />
              </div>
              <p className="mt-3 text-center text-sm text-gray-500">
                Having trouble with the form?{" "}
                <a
                  href={training.formEmbed}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-[--my-purple] hover:underline"
                >
                  Open it in a new tab
                </a>
              </p>
            </div>
          )}
        </div>
      </div>
      <div className="mt-12 text-center">
        <Link
          to="/trainings"
          className="inline-flex items-center justify-center rounded-md border border-transparent bg-(--my-purple) py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-(--my-purple)/90"
        >
          Back to all trainings
        </Link>
      </div>
    </section>
  );
};

export default Trainings;
