export default function AboutPage() {
  return (
    <div className="animate-fade-up space-y-6 sm:space-y-8">
      <h2 className="text-2xl sm:text-3xl font-bold font-serif mb-6 sm:mb-8 text-white">
        About
      </h2>

      <div className="space-y-5 sm:space-y-6 text-base sm:text-lg leading-relaxed text-stone-300">
        <p>
          I engineer software with a bias toward business outcomes; that imply
          moving fast early on when uncertainty is high and optimize for
          long-term economics as uncertainty fall over time. Curious by default;
          strive to understand the structural reality of things — stuff that
          most people get wrong by default.
        </p>
        <p>
          Self-studying business, economics, and AI mastery for software
          development and agentic systems. Aspired to build my own business or
          be part of a great one.
        </p>
        <p>
          Early on, I started my career with freelancing — mostly fullstack
          development, where I delivered a couple of projects for clients. It
          wasn&apos;t a long journey, but it was a great experience and a
          non-trivial exercise of my technical and soft skills.
        </p>
        <p>
          Later, I joined a fast-growing startup where I worked on large-scale
          infra and practiced building systems that scale, are reliable, and are
          easy to maintain.
        </p>
        <p>
          At that time I was already heavily-invested in reading books to build
          solid foundations, books like{" "}
          <em className="text-stone-200 not-italic font-medium">Clean Code</em>,{" "}
          <em className="text-stone-200 not-italic font-medium">
            The Pragmatic Programmer
          </em>
          ,{" "}
          <em className="text-stone-200 not-italic font-medium">
            Design Patterns
          </em>
          , and many more.
        </p>

        <h3 className="text-lg sm:text-xl font-bold font-serif text-white pt-4 sm:pt-6">
          Reading books
        </h3>
        <p>
          Reading is my preferred way to learn big things, explore different
          sciences, and just expand my forever-shallow comprehension of the
          world; some of my favorites:
        </p>
        <ul className="list-disc list-inside space-y-2 sm:space-y-3 ml-1 sm:ml-2">
          <li>
            <em className="text-stone-200 not-italic font-medium">
              Design Patterns
            </em>{" "}
            (Gang of Four book). A foundational guide to solving common software
            design problems.
          </li>
          <li>
            <em className="text-stone-200 not-italic font-medium">
              Getting Things Done
            </em>
            . A system for clearing mental clutter, turning overwhelm into calm,
            methodical productivity.
          </li>
          <li>
            <em className="text-stone-200 not-italic font-medium">
              The Psychology of Money
            </em>
            . Great lessons on how behavior, more than knowledge, drives
            financial success.
          </li>
        </ul>
      </div>
    </div>
  );
}
