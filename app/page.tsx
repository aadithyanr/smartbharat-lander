import Link from "next/link"
import { SmartBharatAscii } from "./components/SmartBharatAscii"

export default function Home() {
  return (
    <main className="mx-auto max-w-[640px] px-6 py-20">
      <SmartBharatAscii />

      <div className="space-y-12 text-sm leading-relaxed">
        <section>
          <h1 className="text-lg font-bold text-[#B29FFF]">SmartBharat</h1>
          <p className="mt-4">
            We&apos;re democratising computer education for India&apos;s government school students through AI-powered localized
            learning.
          </p>
        </section>

        <section>
          <h2 className="font-bold">The Problem</h2>
          <p className="mt-4">
            Of the 1.1 million government schools in India, only 35.8% have access to functional computers. The vast
            majority of students are unable to leverage these labs due to a glaring absence of computer teachers.
          </p>
          <p className="mt-4">Three key challenges prevent schools from employing computer educators:</p>
          <ul className="mt-2 list-inside list-disc space-y-1">
            <li>Need for IT proficiency - a niche skill in rural settings</li>
            <li>Budget constraints from the Education Ministry</li>
            <li>Local language fluency requirement due to limited English skills</li>
          </ul>
        </section>

        <section>
          <h2 className="font-bold">Our Solution</h2>
          <p className="mt-4">SmartBharat is a gamified platform that democratizes computer education through:</p>
          <ul className="mt-2 list-inside list-disc space-y-1">
            <li>AI-powered content dubbing into local languages</li>
            <li>Gamified learning with real-time assessments</li>
            <li>Train-the-trainer model for sustainability</li>
            <li>Local-language AI chatbot for student support</li>
          </ul>
        </section>

        <section>
          <h2 className="font-bold">Impact & Metrics</h2>
          <div className="mt-4 grid gap-4">
            <div className="border border-blue-800 p-4">
              <div className="text-lg font-bold text-[#B29FFF]">2</div>
              <div className="mt-1 text-neutral-400">Successful pilot programs in Telangana schools</div>
            </div>
            <div className="border border-blue-800 p-4">
              <div className="text-lg font-bold text-[#B29FFF]">75%</div>
              <div className="mt-1 text-neutral-400">Average accuracy in student assessments</div>
            </div>
            <div className="border border-blue-800 p-4">
              <div className="text-lg font-bold text-[#B29FFF]">14,000+</div>
              <div className="mt-1 text-neutral-400">Schools targeted for pan-India expansion</div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="font-bold">Key Differentiators</h2>
          <div className="mt-4 space-y-4">
            <div>
              <h3 className="text-[#B29FFF]">1. Localized</h3>
              <p className="mt-2">
                Using advanced AI dubbing technology to translate content into regional languages naturally and
                efficiently. Our solution handles complex computer concepts while maintaining colloquial understanding.
              </p>
            </div>
            <div>
              <h3 className="text-[#B29FFF]">2. Easy to Understand</h3>
              <p className="mt-2">
                Python programming taught through familiar cooking metaphors. Universal concepts help bridge the gap
                between traditional knowledge and modern programming.
              </p>
            </div>
            <div>
              <h3 className="text-[#B29FFF]">3. Gamified</h3>
              <p className="mt-2">
                Real-time quizzes, interactive components, and point-based progression create healthy competition and
                engagement. Integrated simulations allow practical application of concepts.
              </p>
            </div>
            <div>
              <h3 className="text-[#B29FFF]">4. Scalable</h3>
              <p className="mt-2">
                Train-the-trainer model ensures sustainability. Existing teachers become SmartBharat facilitators
                through our platform and bi-weekly support sessions.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="font-bold">Recognition</h2>
          <ul className="mt-4 list-inside list-disc space-y-1">
            <li>Nord Anglia Social Impact R&D Grant recipient (USD 3000)</li>
            <li>Felicitated by Secretary of Telangana Board of Intermediate Education</li>
          </ul>
        </section>

        <section>
          <h2 className="font-bold">Get Involved</h2>
          <p className="mt-4">Working on democratizing education in India? Want to support our mission?</p>
          <p className="mt-4">
            <Link href="#" className="text-[#B29FFF] underline hover:text-blue-300">
              Fill out this form
            </Link>
            . We&apos; get back to you via email.
          </p>
        </section>

        <footer className="pt-8 text-neutral-400">
          <p>© 2024 SmartBharat. Democratising computer education for a smarter India.</p>
        </footer>
      </div>
    </main>
  )
}

