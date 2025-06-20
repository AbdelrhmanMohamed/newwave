import StrategySection from "./_components/technology";
import { PartnerSection } from "./_components/partner-section";
import { CTASection } from "./_components/cta-section";
import { PageBanner } from "@/components/page-banner";
import * as motion from "motion/react-client";
import { LampIcon } from "@/components/icons";
import SkillCard from "./_components/skill-card";
import GlobalCollaboration from "./_components/global-collaboration";
import AnimatedText from "@/components/effects/animate-text";
import BorderCard from "@/components/cards/border-card";
import SectionHead from "@/components/headings/section-head";

const technologiesData = [
  {
    id: 1,
    title: "Leading VR/AR Development",
    description:
      "Partnering with specialized firms that are pioneers in creating high-fidelity, immersive virtual and augmented reality content and applications. This allows us to offer bespoke VR simulations, AR brand activations, and interactive experiences that are both technologically advanced and creatively compelling.",
    iconUrl: "/images/technologies/technology.svg",
  },
  {
    id: 2,
    title: "Event Management Software",
    description:
      "Working with developers of sophisticated event management platforms (similar to functionalities offered by global providers like KonfHub or 6Connex) that offer features like AI-powered matchmaking, seamless registration, robust virtual event capabilities, and comprehensive analytics. These partnerships enable us to offer scalable and efficient solutions for events of all sizes.",
    iconUrl: "/images/technologies/innovation.svg",
  },
  {
    id: 3,
    title: "AI Solution Providers for Events",
    description:
      "Collaborating with companies specializing in artificial intelligence and machine learning applications tailored for the event industry. This includes solutions for personalized attendee journeys, intelligent chatbots, predictive analytics, and sentiment analysis, enhancing both the attendee experience and operational efficiency.",
    iconUrl: "/images/technologies/expertise.svg",
  },
  {
    id: 4,
    title: "AV & Interactive Technology",
    description:
      "Maintaining relationships with global suppliers of the latest AV equipment, interactive display technologies, and innovative engagement tools ensures our productions are always technically superior and visually stunning.",
    iconUrl: "/images/technologies/sustainability.svg",
  },
];

export default function PartnersPage() {
  return (
    <div className="min-h-screen">
      <PageBanner
        title={
          "Our Global Network: Fostering Innovation Through International Partnerships"
        }
        backgroundImage={"/images/office.png"}
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Our Partners" }]}
        className="text-4xl md:text-5xl lg:text-5xl lg:leading-16"
      />
      {/*  Section */}
      <motion.section
        initial={{ x: 300, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 1,
        }}
        className="xl:pl-12 px-6 py-20 lg:py-26 flex gap-8 flex-col lg:flex-row"
      >
        <div className="flex items-start md:items-center lg:items-start flex-col md:flex-row text-left gap-6 md:gap-12 xl:gap-12 w-full justify-start -mt-1 min-w-[60%]">
          <LampIcon className="text-primary w-16 h-16 md:w-20 md:h-20 lg:w-22 lg:h-22 lg:min-w-22 lg:min-h-22 md:min-h-20 md:min-w-20 min-w-16 min-h-16" />
          <h2 className="text-4xl md:text-[2.5rem] xl:text-[3rem] font-bold text-primary leading-12 md:leading-16">
            World-Class Events Powered by Global Partnerships{" "}
          </h2>
        </div>
        <div className="text-neutral-400 w-full text-[1rem] text-left ">
          <p>
            At New Wave, we believe that true innovation thrives on
            collaboration and access to global best practices. To ensure we
            consistently deliver cutting-edge and world-class solutions to our
            clients in Saudi Arabia and the MENA region, we have cultivated a
            strong and dynamic network of international partners.
          </p>
        </div>
      </motion.section>
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          duration: 0.5,
        }}
        className="px-4 pt-20"
      >
        <SkillCard
          section="Our Global Network"
          title={"Global Innovation Meets Local Expertise"}
          description={[]}
          imageUrl={
            "https://gaaga.wpengine.com/wp-content/uploads/2023/06/gaaga-Process-Content-Img-1-1.png"
          }
        />
      </motion.section>
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          duration: 0.5,
        }}
        className="py-20"
      >
        <StrategySection
          technologies={technologiesData}
          title="Technology Partnerships"
          description="Our technology partnerships are crucial for staying at the forefront of the rapidly evolving event tech landscape. We strategically collaborate with:"
          bgUrl="https://gaaga.wpengine.com/wp-content/uploads/2023/06/Gaaga-Portfolio-Another-Img-6.jpg"
        />
      </motion.section>

      {/* Partners Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 ">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl lg:text-4xl xl:text-5xl font-bold text-white mb-4 leading-14">
              Our Trusted Partners
            </h2>
            <p className="text-neutral-300 max-w-5xl mx-auto">
              Collaborating with industry leaders to deliver exceptional
              experiences and innovative solutions.
            </p>
          </div>
          <PartnerSection />
        </div>
      </section>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          duration: 0.5,
        }}
        className="px-4 py-20"
      >
        <GlobalCollaboration
          title="Global Collaboration Network"
          description="Beyond technology, New Wave understands the value of global collaboration in event management and public relations. Where strategically beneficial, we engage with:"
          topics={[
            {
              id: 1,
              title: "International Event Agency Networks",
              content:
                "Affiliations or strategic alliances with reputable event management agencies in other key global markets (drawing inspiration from networks like those involving experiential marketing agencies).",
            },
            {
              id: 2,
              title: "Specialized Experiential Marketing Collectives",
              content:
                "Connecting with groups that excel in creating unique and immersive brand experiences worldwide.",
            },
          ]}
          imageUrl="https://gaaga.wpengine.com/wp-content/uploads/2023/06/gaaga-Process-Content-Img-1-1.png"
          features={[
            "Offer enhanced global reach and support for clients with international event or PR needs.",
            "Share and implement global best practices and successful case studies.",
            "Efficiently manage multi-country events or campaigns through trusted local partners, coordinated by New Wave.",
            "Provide a broader perspective on international trends and audience expectations.",
          ]}
        />
      </motion.div>
      <div className="px-4 md:px-8 lg:px-16 xl:px-20 py-20 pb-28">
        <div className="text-center flex flex-col items-center justify-center">
          <motion.div
            initial={{ x: 40 }}
            whileInView={{ x: 0 }}
            transition={{
              duration: 0.5,
            }}
          >
            <SectionHead
              title="Strategies for Success"
              show={{
                start: true,
                end: true,
              }}
              animate
            />
          </motion.div>
          <AnimatedText
            text={"Our Partnership Strategy"}
            className="text-3xl md:text-4xl xl:text-5xl font-bold mt-6 tracking-wide text-center justify-center"
          />
          <p className="text-neutral-400 max-w-3xl mt-4 mx-auto text-center mb-12">
            Our partnership strategy is designed to leverage the strengths of
            our global network, ensuring we deliver exceptional value and
            innovative solutions to our clients. We focus on:
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {(strategies || []).map((value, index) => (
            <BorderCard
              iconUrl={value?.icon?.url || ""}
              title={value?.title}
              description={value?.description}
              key={index}
            />
          ))}
        </div>
      </div>
      <div></div>
      {/* Value Proposition and CTA */}
      <CTASection />
    </div>
  );
}

export interface Partner {
  name: string;
  url: string;
  showreel?: string;
  logo: string;
  description: string;
}

export const partnersData = {
  event: [
    {
      name: "Raketamedia",
      url: "https://raketamedia.com/#reel2024",
      showreel: "https://vimeo.com/1026871738",
      logo: "/placeholder.svg?height=80&width=200&text=Raketamedia",
      description: "Creative event production and media solutions",
    },
    {
      name: "BotAI",
      url: "https://www.botaileds.com/",
      logo: "/placeholder.svg?height=80&width=200&text=BotAI",
      description: "AI-powered LED solutions for events",
    },
    {
      name: "Vincentaa",
      url: "https://vincentaa.com/",
      logo: "/placeholder.svg?height=80&width=200&text=Vincentaa",
      description: "Event technology and digital solutions",
    },
    {
      name: "Silkroad CG Visual",
      url: "https://www.silkroadcg.com/",
      showreel: "https://www.youtube.com/watch?v=qMswkYMbVw8",
      logo: "/placeholder.svg?height=80&width=200&text=Silkroad+CG",
      description: "Virtual museums and cultural heritage visualization",
    },
    {
      name: "Icon Studios",
      url: "https://www.icon-studios.com",
      showreel: "https://vimeo.com/iconstudio98",
      logo: "/placeholder.svg?height=80&width=200&text=Icon+Studios",
      description: "Full-service production house",
    },
    {
      name: "Key Films",
      url: "https://www.keyfilms.tv/",
      showreel: "https://vimeo.com/keyfilmseg",
      logo: "/placeholder.svg?height=80&width=200&text=Key+Films",
      description: "Film and video production services",
    },
    {
      name: "Bee Media Productions",
      url: "https://www.beemediaproductions.com/home",
      showreel: "https://vimeo.com/477603033",
      logo: "/placeholder.svg?height=80&width=200&text=Bee+Media",
      description: "Creative media production and storytelling",
    },
    {
      name: "Veo",
      url: "https://www.veo.co/",
      showreel: "https://www.youtube.com/watch?v=FeJ2Wj2KFJY",
      logo: "/placeholder.svg?height=80&width=200&text=Veo",
      description: "Sports technology and video solutions",
    },
    {
      name: "AirPano",
      url: "https://www.airpano.com/",
      showreel: "https://www.airpano.com/360video/vr-showreel-2020/",
      logo: "/placeholder.svg?height=80&width=200&text=AirPano",
      description: "360° virtual tours and immersive experiences",
    },
    {
      name: "VR Gorilla",
      url: "https://www.vr-gorilla.com/#amref",
      logo: "/placeholder.svg?height=80&width=200&text=VR+Gorilla",
      description: "Virtual reality content creation and experiences",
    },
  ],
  vrAr: [],
  virtualMuseums: [],
  production: [],
};

export const strategies = [
  {
    title: "Global Reach",
    description:
      "Access to a worldwide network of event professionals and resources.",
    icon: {
      url: "/images/strategies/global-reach.svg",
    },
  },
  {
    title: "Local Expertise",
    description:
      "Deep understanding of local markets, cultures, and audience preferences.",
    icon: {
      url: "/images/strategies/local-expertise.svg",
    },
  },
  {
    title: "Innovative Solutions",
    description:
      "Cutting-edge technologies and creative approaches to event management.",
    icon: {
      url: "/images/strategies/innovative-solutions.svg",
    },
  },
  {
    title: "Sustainable Practices",
    description:
      "Commitment to environmentally friendly and sustainable event solutions.",
    icon: {
      url: "/images/strategies/sustainable-practices.svg",
    },
  },
  {
    title: "Collaborative Approach",
    description:
      "Working closely with partners to deliver exceptional event experiences.",
    icon: {
      url: "/images/strategies/collaborative-approach.svg",
    },
  },
  {
    title: "Diverse Skill Sets",
    description:
      "A wide range of expertise from various partners, enhancing event capabilities.",
    icon: {
      url: "/images/strategies/diverse-skill-sets.svg",
    },
  },
];
