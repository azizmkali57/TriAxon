"use client";
import { notFound } from "next/navigation";
import Navbar from "@/components/layout/header/Navbar";
import Footer from "@/components/layout/footer/Footer";
import Link from "next/link";

const categoryColors = {
  Development: "bg-[#2B7EC1]/15 text-[#79b8f0] border-[#2B7EC1]/25",
  Mobile:      "bg-[#6B3FA0]/15 text-[#b392d8] border-[#6B3FA0]/25",
  "AI/ML":     "bg-[#00B4C8]/15 text-[#00B4C8] border-[#00B4C8]/25",
  DevOps:      "bg-amber-500/15 text-amber-300 border-amber-500/25",
  Design:      "bg-pink-500/15  text-pink-300  border-pink-500/25",
  Product:     "bg-emerald-500/15 text-emerald-300 border-emerald-500/25",
};

const allPosts = [
  {
    slug:     "trpc-nextjs-app-router",
    title:    "Why We Moved All Client Projects from REST to tRPC + Next.js App Router",
    excerpt:  "After 12+ projects, we made the full switch. Here's what we learned — including surprising performance wins and the DX improvements that convinced our whole team.",
    category: "Development",
    author:   { name: "Rahul Verma", role: "CTO", avatar: "RV" },
    date:     "Apr 28, 2025",
    readTime: "7 min read",
    emoji:    "⚛️",
    content: [
      {
        type: "lead",
        text: "We've been building production software on Next.js since v12. By the time App Router stabilised in v14, we'd already shipped REST APIs on 30+ client projects. So why did we rip them out?",
      },
      {
        type: "h2",
        text: "The Problems We Were Solving",
      },
      {
        type: "p",
        text: "Every REST API we wrote shared the same pain: duplicated types between frontend and backend, hand-rolled fetch wrappers, and inconsistent error handling that manifested as mysterious 'something went wrong' toasts in production. TypeScript helped, but it couldn't enforce the contract across the network boundary.",
      },
      {
        type: "callout",
        label: "The core insight",
        text: "tRPC doesn't just add types to your API — it eliminates the concept of a network boundary from the developer's mental model entirely.",
      },
      {
        type: "h2",
        text: "What Actually Changed",
      },
      {
        type: "p",
        text: "The first thing our team noticed wasn't performance — it was the silence. No more back-and-forth Slack messages asking 'what does this endpoint return on error?' The procedure definition is the documentation. Rename a field on the server and TypeScript screams at every call site instantly.",
      },
      {
        type: "p",
        text: "With App Router, we co-locate the tRPC router next to the React Server Components that consume it. Data fetching happens at the server boundary; the client receives typed, serialised payloads. Streaming via Suspense boundaries just works. Our median TTFB on audited client projects dropped by 310 ms.",
      },
      {
        type: "h2",
        text: "The Surprising Performance Wins",
      },
      {
        type: "p",
        text: "We didn't expect this, but batching is a game-changer. tRPC's built-in request batching means a page that previously fired six parallel fetch calls now sends one. Combine that with React Query's stale-while-revalidate and you get snappy navigation with zero loading spinners for repeat visits.",
      },
      {
        type: "code",
        lang: "ts",
        text: `// server/routers/project.ts
export const projectRouter = router({
  byId: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ input, ctx }) => {
      return ctx.db.project.findUniqueOrThrow({
        where: { id: input.id },
        include: { team: true, milestones: true },
      });
    }),
});`,
      },
      {
        type: "h2",
        text: "What We'd Do Differently",
      },
      {
        type: "p",
        text: "Start with a well-structured router from day one. We made the mistake of dumping everything into a single router on our first project, which became unwieldy fast. Adopt feature-based sub-routers immediately and merge them at the app router level.",
      },
      {
        type: "p",
        text: "Also: don't skip the transformer. Using SuperJSON as the data transformer handles Dates, Maps, Sets, and BigInts transparently. Without it you'll spend a day debugging why your Date is arriving as a string.",
      },
    ],
  },
  {
    slug:     "flutter-vs-react-native-2025",
    title:    "Flutter vs React Native in 2025: A Decision Framework for Startups",
    excerpt:  "We've shipped 20+ mobile apps. This is the honest, framework-agnostic guide we wish we'd had — with real benchmarks.",
    category: "Mobile",
    author:   { name: "Karan Singh", role: "Mobile Lead", avatar: "KS" },
    date:     "Apr 15, 2025",
    readTime: "9 min read",
    emoji:    "📱",
    content: [
      {
        type: "lead",
        text: "We have no stake in this debate. We've shipped 11 Flutter apps and 9 React Native apps in the last two years. Here's the unvarnished truth.",
      },
      {
        type: "h2",
        text: "The Only Question That Matters",
      },
      {
        type: "p",
        text: "Forget benchmarks for a moment. The most important question is: does your team write Dart or JavaScript? If you have strong React / TypeScript engineers, React Native will ship faster — full stop. If you're hiring mobile specialists or have a budget for training, Flutter's performance ceiling is higher.",
      },
      {
        type: "callout",
        label: "Our rule of thumb",
        text: "Web-first team + tight deadline = React Native. Dedicated mobile team + 18-month roadmap = Flutter.",
      },
      {
        type: "h2",
        text: "Performance: Flutter Wins, But the Gap Is Narrowing",
      },
      {
        type: "p",
        text: "Flutter renders via its own Impeller engine — it doesn't use native components at all. This means 60/120 fps animations that look identical on Android and iOS. React Native's New Architecture (Fabric + TurboModules, now stable in RN 0.73) has closed the gap significantly for most UI patterns, but complex gesture-heavy interfaces still feel more polished in Flutter.",
      },
      {
        type: "h2",
        text: "Ecosystem & Third-Party Libraries",
      },
      {
        type: "p",
        text: "React Native wins here — not because pub.dev is bad, but because every JS library author ships npm packages. Need a Stripe integration? Twilio? A specific analytics SDK? There's an RN wrapper with 50k weekly downloads and active maintenance. Flutter's ecosystem is maturing fast but still has gaps, particularly for niche enterprise integrations.",
      },
      {
        type: "h2",
        text: "Our Recommendation Matrix",
      },
      {
        type: "p",
        text: "Choose Flutter if your app is animation-heavy, targets kiosk or TV, needs pixel-perfect cross-platform parity, or if you're building a long-term product with dedicated mobile investment. Choose React Native if your team is JS-native, you need rapid prototyping, you rely on many third-party SDK integrations, or you want to share business logic with a Next.js web app.",
      },
    ],
  },
  {
    slug:     "rag-production-lessons",
    title:    "Building Production RAG Pipelines: Lessons from 5 Deployments",
    excerpt:  "RAG sounds simple in demos. In production, it's a different story. Embedding choices, chunking strategies, and eval frameworks.",
    category: "AI/ML",
    author:   { name: "Priya Joshi", role: "AI Engineer", avatar: "PJ" },
    date:     "Mar 30, 2025",
    readTime: "11 min read",
    emoji:    "🤖",
    content: [
      {
        type: "lead",
        text: "We've deployed RAG systems for a legal firm, two SaaS companies, a healthcare provider, and an e-commerce platform. Every one of them taught us something the tutorials didn't.",
      },
      {
        type: "h2",
        text: "Chunking Is Not an Afterthought",
      },
      {
        type: "p",
        text: "The single highest-leverage decision in a RAG pipeline isn't the LLM or the vector DB — it's how you chunk your documents. Fixed-size chunking (e.g. 512 tokens with 50-token overlap) works fine for homogeneous prose but destroys structured documents like contracts, financial reports, or product specs.",
      },
      {
        type: "callout",
        label: "What we do now",
        text: "We run a document classifier first, then route to semantic chunking (sentence-boundary aware) for prose, and structure-aware chunking (table/section preserving) for documents.",
      },
      {
        type: "h2",
        text: "Embedding Model Choice Is Permanent",
      },
      {
        type: "p",
        text: "Once you index 500k documents with text-embedding-ada-002, switching to text-embedding-3-large requires re-indexing everything. We've seen clients stuck on inferior models because the re-indexing cost is prohibitive. Evaluate embedding models before you ingest — not after.",
      },
      {
        type: "h2",
        text: "Build an Eval Framework on Day One",
      },
      {
        type: "p",
        text: "Without evals you're flying blind. We maintain a golden set of 50–100 question/answer pairs for every client deployment. Any pipeline change runs against this set before shipping. Tools we've standardised on: RAGAS for retrieval quality metrics, LangSmith for tracing, and a simple pytest harness for regression testing.",
      },
      {
        type: "code",
        lang: "python",
        text: `from ragas import evaluate
from ragas.metrics import faithfulness, answer_relevancy, context_recall

result = evaluate(
    dataset=golden_dataset,
    metrics=[faithfulness, answer_relevancy, context_recall],
)
print(result.to_pandas())`,
      },
    ],
  },
  {
    slug:     "nextjs-performance-checklist",
    title:    "The 2025 Next.js Performance Checklist (From Real Project Audits)",
    excerpt:  "12 performance wins we apply to every new project — with before/after Core Web Vitals numbers from real client sites.",
    category: "Development",
    author:   { name: "Rahul Verma", role: "CTO", avatar: "RV" },
    date:     "Mar 12, 2025",
    readTime: "8 min read",
    emoji:    "⚡",
    content: [
      {
        type: "lead",
        text: "We run a performance audit on every project we inherit. Here are the 12 items that appear on almost every report — and the exact fixes we apply.",
      },
      {
        type: "h2",
        text: "1. Use the Image Component — Always",
      },
      {
        type: "p",
        text: "This one is obvious but still missed constantly. next/image handles lazy loading, modern format conversion (WebP/AVIF), and responsive srcsets automatically. Swapping raw img tags for next/image is typically a 10–30 point LCP improvement.",
      },
      {
        type: "h2",
        text: "2. Move Heavy Computations to Server Components",
      },
      {
        type: "p",
        text: "If a component only renders — no event handlers, no state — it should be a Server Component. This removes it from the JS bundle entirely. We've seen 40–80 KB bundle reductions on content-heavy pages just by auditing which components actually need to be client-side.",
      },
      {
        type: "callout",
        label: "Quick win",
        text: "Run `next build` and check the bundle analyser output. Any component over 20 KB that doesn't use hooks is a candidate for conversion.",
      },
      {
        type: "h2",
        text: "3. Optimise Fonts with next/font",
      },
      {
        type: "p",
        text: "Self-hosting fonts via next/font eliminates the render-blocking Google Fonts request and applies size-adjust to prevent layout shift. It's a two-line change with a measurable CLS improvement on every project we've touched.",
      },
    ],
  },
  {
    slug:     "aws-cost-optimisation",
    title:    "How We Cut AWS Bills by 40% for 3 Clients in 60 Days",
    excerpt:  "The common waste patterns we find in almost every cloud audit, and the exact steps we take to eliminate them.",
    category: "DevOps",
    author:   { name: "Karan Singh", role: "DevOps Lead", avatar: "KS" },
    date:     "Feb 28, 2025",
    readTime: "6 min read",
    emoji:    "☁️",
    content: [
      {
        type: "lead",
        text: "Cloud waste is embarrassingly common. We've audited dozens of AWS accounts and the same patterns appear every time. Here's what we find and how we fix it.",
      },
      {
        type: "h2",
        text: "Pattern 1: Oversized EC2 Instances",
      },
      {
        type: "p",
        text: "The most common finding: t3.xlarge instances running at 8% CPU. Teams provision big 'just in case' and never revisit. AWS Compute Optimiser will tell you exactly what size you actually need. In our last audit, 70% of EC2 instances were right-sizing candidates.",
      },
      {
        type: "h2",
        text: "Pattern 2: Unattached EBS Volumes",
      },
      {
        type: "p",
        text: "When you terminate an EC2 instance, the root EBS volume isn't deleted by default unless you configured it that way. We consistently find dozens of orphaned 100–500 GB volumes in production accounts. A simple Lambda that runs weekly and reports unattached volumes pays for itself in hours.",
      },
      {
        type: "callout",
        label: "Quick audit",
        text: "Run: `aws ec2 describe-volumes --filters Name=status,Values=available` — every result is money you're burning.",
      },
      {
        type: "h2",
        text: "Pattern 3: Data Transfer Costs",
      },
      {
        type: "p",
        text: "Cross-AZ data transfer is 1 cent/GB each way. It sounds trivial until your microservices are chattering across AZs at 10 TB/month. Ensure your ECS services, RDS instances, and ElastiCache clusters are in the same AZ as their primary consumers. Enable S3 Transfer Acceleration only where actually needed.",
      },
    ],
  },
  {
    slug:     "figma-design-system-workflow",
    title:    "The Design System Workflow That Scales Across 10+ Client Projects",
    excerpt:  "How we structure Figma files, component libraries, and token handoffs so every client gets a consistent, maintainable design system.",
    category: "Design",
    author:   { name: "Anjali Patel", role: "Design Lead", avatar: "AP" },
    date:     "Feb 10, 2025",
    readTime: "7 min read",
    emoji:    "🎨",
    content: [
      {
        type: "lead",
        text: "We maintain design systems for 10+ active client products simultaneously. After a lot of painful iteration, we've landed on a workflow that keeps things consistent without becoming a bureaucracy.",
      },
      {
        type: "h2",
        text: "The Three-File Structure",
      },
      {
        type: "p",
        text: "Every client gets three Figma files: a Tokens file (primitive values — colours, spacing, typography scales), a Components file (the library published from tokens), and a Pages file (actual product screens). This separation means a rebrand requires touching only the Tokens file; components and pages update automatically via Figma's library sync.",
      },
      {
        type: "callout",
        label: "The rule",
        text: "No hardcoded hex values in the Components or Pages files. Ever. Everything is a token or a semantic alias.",
      },
      {
        type: "h2",
        text: "Handoff Without Pain",
      },
      {
        type: "p",
        text: "We use Tokens Studio to sync design tokens to a JSON file in the client's GitHub repo. The engineering team consumes this via Style Dictionary, which transforms tokens into CSS custom properties, Tailwind config extensions, or React Native StyleSheet values — whichever the project needs. Design changes propagate to code via a PR, not a Slack message.",
      },
      {
        type: "h2",
        text: "Component Naming Conventions",
      },
      {
        type: "p",
        text: "We follow a strict pattern: Category/ComponentName/Variant. Buttons/Primary/Default, Buttons/Primary/Hover, Forms/Input/Error. This maps directly to how Storybook organises stories, which means the design system and the component library stay in sync structurally even when they diverge in implementation details.",
      },
    ],
  },
  {
    slug:     "mvp-launch-playbook",
    title:    "The TriAxon MVP Launch Playbook: 0 to Production in 8 Weeks",
    excerpt:  "The exact process we use to take a founder's idea from a napkin sketch to a live, paying-customer-ready product.",
    category: "Product",
    author:   { name: "Neha Sharma", role: "Product Strategist", avatar: "NS" },
    date:     "Jan 22, 2025",
    readTime: "10 min read",
    emoji:    "🚀",
    content: [
      {
        type: "lead",
        text: "Eight weeks sounds aggressive. It isn't — if you ruthlessly cut scope. Here's our exact playbook, refined across 15+ MVP launches.",
      },
      {
        type: "h2",
        text: "Week 1–2: Discovery & Definition",
      },
      {
        type: "p",
        text: "We run a condensed design sprint. Day one is all listening — what problem are we solving, for whom, and how will we know it's solved? By end of week two we have a validated problem statement, three user personas, and a prioritised feature list split into 'must have for launch' and 'everything else'.",
      },
      {
        type: "callout",
        label: "The hardest part",
        text: "Getting founders to agree on what's NOT in the MVP. We use a 'parking lot' document to acknowledge good ideas without letting them expand scope.",
      },
      {
        type: "h2",
        text: "Week 3–4: Design & Architecture",
      },
      {
        type: "p",
        text: "High-fidelity Figma screens for the core flow only. We don't design every edge case — we design the happy path and document edge case behaviour in plain text. Architecture decisions are made with an 18-month horizon: choose boring, proven technology over shiny new frameworks.",
      },
      {
        type: "h2",
        text: "Week 5–7: Build",
      },
      {
        type: "p",
        text: "Two-week sprint followed by a refinement week. We deploy to production from day one via feature flags — the app is live but gated. This forces us to solve infrastructure problems early rather than scrambling in the final days.",
      },
      {
        type: "h2",
        text: "Week 8: Launch",
      },
      {
        type: "p",
        text: "The launch week is not for building. It's for testing with real users, fixing critical bugs, writing runbooks, and preparing the founder to handle their first 100 customers. We hand over with full documentation, recorded walkthroughs, and a 30-day support retainer.",
      },
    ],
  },
];

/* ─── Sub-components ─── */

function TableOfContents({ content }) {
  const headings = content.filter((b) => b.type === "h2");
  if (headings.length === 0) return null;
  return (
    <nav className="rounded-xl border border-white/[0.07] bg-white/[0.02] p-5 sticky top-24">
      <p className="text-xs font-mono text-[#9CA3AF] uppercase tracking-widest mb-4">Contents</p>
      <ul className="space-y-2.5">
        {headings.map((h, i) => (
          <li key={i}>
            <a
              href={`#heading-${i}`}
              className="text-sm text-[#9CA3AF] hover:text-[#00B4C8] transition-colors leading-snug block"
            >
              {h.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

function ContentBlock({ block, headingIndex }) {
  switch (block.type) {
    case "lead":
      return (
        <p className="text-xl text-[#C9D1D9] leading-relaxed font-light border-l-2 border-[#2B7EC1]/60 pl-5 mb-8">
          {block.text}
        </p>
      );
    case "h2":
      return (
        <h2
          id={`heading-${headingIndex}`}
          className="font-display font-bold text-2xl text-white mt-12 mb-4 scroll-mt-28"
        >
          {block.text}
        </h2>
      );
    case "p":
      return (
        <p className="text-[#9CA3AF] leading-[1.85] mb-5 text-[0.975rem]">
          {block.text}
        </p>
      );
    case "callout":
      return (
        <div className="my-7 rounded-xl border border-[#00B4C8]/20 bg-[#00B4C8]/5 px-6 py-5">
          <span className="text-xs font-mono text-[#00B4C8] uppercase tracking-widest block mb-2">
            {block.label}
          </span>
          <p className="text-[#C9D1D9] leading-relaxed">{block.text}</p>
        </div>
      );
    case "code":
      return (
        <div className="my-7 rounded-xl border border-white/[0.08] bg-[#0A1628] overflow-hidden">
          <div className="flex items-center gap-2 px-4 py-2.5 border-b border-white/[0.06]">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
            <span className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
            <span className="ml-2 text-xs font-mono text-[#4A6080]">{block.lang}</span>
          </div>
          <pre className="overflow-x-auto p-5">
            <code className="text-sm font-mono text-[#79b8f0] leading-relaxed whitespace-pre">
              {block.text}
            </code>
          </pre>
        </div>
      );
    default:
      return null;
  }
}

/* ─── Page ─── */

export default function BlogPostPage({ params }) {
  const { slug } = params;
  const post = allPosts.find((p) => p.slug === slug);

  if (!post) notFound();

  const related = allPosts
    .filter((p) => p.slug !== slug && p.category === post.category)
    .slice(0, 2);

  const fallbackRelated = allPosts
    .filter((p) => p.slug !== slug)
    .slice(0, 2 - related.length);

  const relatedPosts = [...related, ...fallbackRelated].slice(0, 2);

  /* Track heading index for IDs */
  let h2Count = -1;

  return (
    <main className="bg-[#0D1117] min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-36 pb-14 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_-10%,rgba(43,126,193,0.12),transparent)]" />
        <div className="dot-pattern absolute inset-0 opacity-20" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-[#4A6080] mb-8">
            <Link href="/" className="hover:text-[#9CA3AF] transition-colors">Home</Link>
            <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 18l6-6-6-6" /></svg>
            <Link href="/blog" className="hover:text-[#9CA3AF] transition-colors">Blog</Link>
            <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 18l6-6-6-6" /></svg>
            <span className="text-[#9CA3AF] truncate max-w-[200px]">{post.title}</span>
          </nav>

          {/* Category + Meta */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className={`text-xs px-2.5 py-1 rounded-full border ${categoryColors[post.category]}`}>
              {post.category}
            </span>
            <span className="text-xs text-[#4A6080]">{post.date}</span>
            <span className="text-xs text-[#4A6080]">·</span>
            <span className="text-xs text-[#4A6080]">{post.readTime}</span>
          </div>

          {/* Title */}
          <h1 className="font-display font-extrabold text-4xl sm:text-5xl text-white leading-[1.1] mb-6">
            {post.title}
          </h1>

          {/* Excerpt */}
          <p className="text-[#9CA3AF] text-lg leading-relaxed mb-8 max-w-2xl">
            {post.excerpt}
          </p>

          {/* Author */}
          <div className="flex items-center gap-3 pt-6 border-t border-white/[0.06]">
            <div className="w-10 h-10 rounded-xl bg-[#2B7EC1]/20 text-[#79b8f0] flex items-center justify-center text-sm font-bold">
              {post.author.avatar}
            </div>
            <div>
              <div className="text-sm font-medium text-white">{post.author.name}</div>
              <div className="text-xs text-[#4A6080]">{post.author.role} · TriAxon Technologies</div>
            </div>
          </div>
        </div>
      </section>

      {/* Emoji banner */}
      <div className="border-y border-white/[0.05] bg-white/[0.01] py-10 mb-14 flex items-center justify-center">
        <span className="text-[7rem] opacity-40">{post.emoji}</span>
      </div>

      {/* Article body */}
      <section className="pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_260px] gap-12 items-start">

            {/* Content */}
            <article className="min-w-0">
              {post.content.map((block, i) => {
                if (block.type === "h2") h2Count++;
                return (
                  <ContentBlock key={i} block={block} headingIndex={block.type === "h2" ? h2Count : undefined} />
                );
              })}

              {/* Bottom author card */}
              <div className="mt-16 rounded-2xl border border-white/[0.07] bg-white/[0.02] p-6 flex items-center gap-5">
                <div className="w-14 h-14 rounded-xl bg-[#2B7EC1]/20 text-[#79b8f0] flex items-center justify-center text-lg font-bold flex-shrink-0">
                  {post.author.avatar}
                </div>
                <div>
                  <p className="text-xs text-[#4A6080] mb-0.5">Written by</p>
                  <p className="text-base font-semibold text-white">{post.author.name}</p>
                  <p className="text-sm text-[#9CA3AF]">{post.author.role} at TriAxon Technologies</p>
                </div>
                <Link
                  href="/blog"
                  className="ml-auto flex-shrink-0 text-sm text-[#2B7EC1] hover:text-[#00B4C8] transition-colors flex items-center gap-1"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M7 16l-4-4m0 0l4-4m-4 4h18" /></svg>
                  All Articles
                </Link>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="hidden lg:block">
              <TableOfContents content={post.content} />
            </aside>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-20 bg-[#0A1628] border-t border-white/[0.05]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-display font-bold text-2xl text-white mb-8">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedPosts.map((rp) => (
                <Link key={rp.slug} href={`/blog/${rp.slug}`} className="group block">
                  <article className="h-full rounded-2xl border border-white/[0.07] bg-white/[0.02] overflow-hidden hover:border-white/[0.15] hover:-translate-y-1 transition-all duration-300">
                    <div className="h-32 bg-gradient-to-br from-[#0D1F3C] to-[#0A1628] flex items-center justify-center border-b border-white/[0.05]">
                      <span className="text-5xl opacity-50 group-hover:opacity-80 group-hover:scale-110 transition-all duration-300">{rp.emoji}</span>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <span className={`text-xs px-2.5 py-0.5 rounded-full border ${categoryColors[rp.category]}`}>{rp.category}</span>
                        <span className="text-xs text-[#9CA3AF]">{rp.readTime}</span>
                      </div>
                      <h3 className="font-display font-bold text-base text-white mb-2 leading-snug group-hover:text-[#00B4C8] transition-colors line-clamp-2">{rp.title}</h3>
                      <p className="text-sm text-[#9CA3AF] line-clamp-2">{rp.excerpt}</p>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Newsletter */}
      <section className="py-20 border-t border-white/[0.05]">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="font-display font-bold text-3xl text-white mb-3">Stay in the Loop</h2>
          <p className="text-[#9CA3AF] mb-8">One article per week. No spam, unsubscribe anytime.</p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 px-5 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder-[#4A6080] focus:outline-none focus:border-[#2B7EC1]/60 transition-colors"
            />
            <button className="px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#2B7EC1] to-[#6B3FA0] text-white text-sm font-semibold hover:opacity-90 transition-opacity whitespace-nowrap">
              Subscribe →
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}