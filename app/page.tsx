import Link from "next/link"
import { SmartBharatAscii } from "./components/SmartBharatAscii"
import Image from "next/image"

export default function Home() {
  return (
    <main className="mx-auto max-w-[720px] px-6 py-20">
      <div className="space-y-16 leading-relaxed">
        <section className="text-center items-center flex justify-center flex-col">
          {/* <h1 className="font-urbanist text-3xl font-bold text-[#B29FFF] tracking-wide">
            Smart<span className="text-gradient">Bharat</span>
          </h1> */}
          <Image src="sb_logo.svg" width={200} height={600} alt="SmartBharat Logo" />
          <p className="mt-4 font-urbanist text-lg  max-w-[560px] text-[#AEAEAE]">
            We&apos;re democratising computer education for India&apos;s government school students through AI-powered localized
            learning.
          </p>
        </section>

        <section className="border-l-2 border-[#B29FFF]/20 pl-6">
          <h2 className="font-urbanist text-xl font-bold text-foreground">The Problem</h2>
          <p className="mt-4 font-urbanist text-foreground/90">
            Of the 1.1 million government schools in India, only 35.8% have access to functional computers. The vast
            majority of students are unable to leverage these labs due to a glaring absence of computer teachers.
          </p>
          <p className="mt-4 font-urbanist text-foreground/90">Three key challenges prevent schools from employing computer educators:</p>
          <ul className="mt-4 space-y-2 font-mono text-sm">
            <li className="flex items-start gap-2">
              <span className="text-[#B29FFF] mt-1">▹</span>
              <span>Need for IT proficiency - a niche skill in rural settings</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#B29FFF] mt-1">▹</span>
              <span>Budget constraints from the Education Ministry</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#B29FFF] mt-1">▹</span>
              <span>Local language fluency requirement due to limited English skills</span>
            </li>
          </ul>
        </section>

        <section className="border-l-2 border-[#B29FFF]/20 pl-6">
          <h2 className="font-urbanist text-xl font-bold text-foreground">Our Solution</h2>
          <p className="mt-4 font-urbanist text-foreground/90">SmartBharat is a gamified platform that democratizes computer education through:</p>
          <ul className="mt-4 space-y-2 font-mono text-sm">
            <li className="flex items-start gap-2">
              <span className="text-[#B29FFF] mt-1">▹</span>
              <span>AI-powered content dubbing into local languages</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#B29FFF] mt-1">▹</span>
              <span>Gamified learning with real-time assessments</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#B29FFF] mt-1">▹</span>
              <span>Train-the-trainer model for sustainability</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#B29FFF] mt-1">▹</span>
              <span>Local-language AI chatbot for student support</span>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="font-urbanist text-xl font-bold text-foreground text-center mb-6">Impact & Metrics</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border border-[#B29FFF]/30 rounded-lg p-6 bg-card/5 hover:bg-card/10 transition-colors duration-300">
              <div className="text-3xl font-urbanist font-bold text-[#B29FFF]">2</div>
              <div className="mt-2 text-muted-foreground font-mono text-sm">Successful pilot programs in Telangana schools</div>
            </div>
            <div className="border border-[#B29FFF]/30 rounded-lg p-6 bg-card/5 hover:bg-card/10 transition-colors duration-300">
              <div className="text-3xl font-urbanist font-bold text-[#B29FFF]">75%</div>
              <div className="mt-2 text-muted-foreground font-mono text-sm">Average accuracy in student assessments</div>
            </div>
            <div className="border border-[#B29FFF]/30 rounded-lg p-6 bg-card/5 hover:bg-card/10 transition-colors duration-300">
              <div className="text-3xl font-urbanist font-bold text-[#B29FFF]">14,000+</div>
              <div className="mt-2 text-muted-foreground font-mono text-sm">Schools targeted for pan-India expansion</div>
            </div>
          </div>
        </section>

        <section className="bg-card/5 p-6 rounded-lg backdrop-blur-sm">
          <h2 className="font-urbanist text-xl font-bold text-foreground mb-6">Key Differentiators</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative pl-6 border-l border-[#B29FFF]/40">
              <h3 className="font-urbanist text-lg text-[#B29FFF]">1. Localized</h3>
              <p className="mt-2 font-mono text-sm leading-relaxed text-foreground/80">
                Using advanced AI dubbing technology to translate content into regional languages naturally and
                efficiently. Our solution handles complex computer concepts while maintaining colloquial understanding.
              </p>
            </div>
            <div className="relative pl-6 border-l border-[#B29FFF]/40">
              <h3 className="font-urbanist text-lg text-[#B29FFF]">2. Easy to Understand</h3>
              <p className="mt-2 font-mono text-sm leading-relaxed text-foreground/80">
                Python programming taught through familiar cooking metaphors. Universal concepts help bridge the gap
                between traditional knowledge and modern programming.
              </p>
            </div>
            <div className="relative pl-6 border-l border-[#B29FFF]/40">
              <h3 className="font-urbanist text-lg text-[#B29FFF]">3. Gamified</h3>
              <p className="mt-2 font-mono text-sm leading-relaxed text-foreground/80">
                Real-time quizzes, interactive components, and point-based progression create healthy competition and
                engagement. Integrated simulations allow practical application of concepts.
              </p>
            </div>
            <div className="relative pl-6 border-l border-[#B29FFF]/40">
              <h3 className="font-urbanist text-lg text-[#B29FFF]">4. Scalable</h3>
              <p className="mt-2 font-mono text-sm leading-relaxed text-foreground/80">
                Train-the-trainer model ensures sustainability. Existing teachers become SmartBharat facilitators
                through our platform and bi-weekly support sessions.
              </p>
            </div>
          </div>
        </section>

        <section className="border-l-2 border-[#B29FFF]/20 pl-6">
          <h2 className="font-urbanist text-xl font-bold text-foreground">Recognition</h2>
          <ul className="mt-4 space-y-2 font-mono text-sm">
            <li className="flex items-start gap-2">
              <span className="text-[#B29FFF] mt-1">▹</span>
              <span>Nord Anglia Social Impact R&D Grant recipient (USD 3000)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#B29FFF] mt-1">▹</span>
              <span>Felicitated by Secretary of Telangana Board of Intermediate Education</span>
            </li>
          </ul>
        </section>

        <section className="text-center bg-card/5 p-8 rounded-lg backdrop-blur-sm">
          <h2 className="font-urbanist text-xl font-bold text-foreground">Get Involved</h2>
          <p className="mt-4 font-urbanist text-foreground/90">Working on democratizing education in India? Want to support our mission?</p>
          <p className="mt-6">
            <Link 
              href="#" 
              className="inline-block font-urbanist text-[#B29FFF] border border-[#B29FFF]/50 px-6 py-3 rounded-md hover:bg-[#B29FFF]/10 transition-colors duration-300"
            >
              Fill out this form
            </Link>
          </p>
          <p className="mt-4 font-mono text-sm text-muted-foreground">
            We&apos;ll get back to you via email.
          </p>
        </section>

        <footer className="pt-8 text-muted-foreground text-center">
          <p className="font-mono text-xs">© 2024 SmartBharat. Democratising computer education for a smarter India.</p>
        </footer>
      </div>
    </main>
  )
}