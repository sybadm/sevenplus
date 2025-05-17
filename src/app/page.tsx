import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900 px-6 py-10">
      <section className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Prepare with Confidence for the 7+ Exam
        </h1>
        <p className="text-lg md:text-xl text-gray-700 mb-8">
          Our expertly crafted mock exams provide the closest experience to the real 7+ exam — giving your child the confidence, practice, and feedback they need to succeed.
        </p>
        <Link href="/book">
          <a className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
            Book a Mock Exam
          </a>
        </Link>
      </section>

      <section className="max-w-4xl mx-auto mt-16 grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-bold mb-2">🎯 Realistic Exam Simulation</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Designed to match GL, CEM, and ISEB formats</li>
            <li>Timed just like real exams</li>
            <li>Uses OCR-scannable answer sheets</li>
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-2">📊 Instant, Insightful Feedback</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Same-day performance reports</li>
            <li>Benchmarking against a broader cohort</li>
            <li>Topic-wise breakdowns to identify strengths and areas for improvement</li>
          </ul>
        </div>
      </section>

      <section className="max-w-4xl mx-auto mt-16 grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-bold mb-2">🏠 Flexible Options</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Take exams online at your convenience</li>
            <li>Attend in-person exams for an authentic environment</li>
            <li>Locations across the UK</li>
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-2">🧑‍🏫 Expertly Created Content</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Written by experienced 7+ educators</li>
            <li>Updated for the latest syllabus and question formats</li>
          </ul>
        </div>
      </section>

      <section className="max-w-5xl mx-auto text-center mt-20">
        <h3 className="text-2xl font-semibold mb-4">Book Now and Give Your Child a Head Start</h3>
        <Link href="/book">
          <a className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition">
            Reserve a Spot
          </a>
        </Link>
      </section>
    </main>
  );
}
