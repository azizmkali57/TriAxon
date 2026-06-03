import Link from "next/link";
import Image from "next/image";
import {
  FiArrowRight,
  FiCloud,
  FiGitMerge,
  FiBox,
  FiTrendingUp,
  FiActivity,
  FiLock,
  FiDollarSign,
  FiRefreshCw,
  FiServer,
  FiCpu,
  FiShield,
  FiZap,
  FiCheckCircle,
} from "react-icons/fi";
import Footer from "@/components/layout/footer/Footer";

export const metadata = {
  title: "Cloud & DevOps Services | TriAxon Technologies",
  description:
    "AWS, GCP, Docker, Kubernetes, Terraform. Zero-downtime deployments, CI/CD, and auto-scaling infrastructure for modern applications.",
};

/* =======================
         DATA
======================= */

const stats = [
  { value: "99.99%", label: "SLA We Target", icon: FiServer },
  { value: "40%",    label: "Avg. Cloud Cost Savings", icon: FiDollarSign },
  { value: "< 5min", label: "Deploy Time (after setup)", icon: FiZap },
  { value: "0",      label: "Prod Security Incidents", icon: FiShield },
];

const services = [
  {
    icon: FiCloud,
    title: "Cloud Architecture",
    desc: "Design and implement scalable, fault-tolerant infrastructure on AWS, GCP, or Azure with best-practice IaC.",
  },
  {
    icon: FiGitMerge,
    title: "CI/CD Pipelines",
    desc: "Automated build, test, and deployment pipelines with GitHub Actions, GitLab CI, or Jenkins.",
  },
  {
    icon: FiBox,
    title: "Containerisation",
    desc: "Dockerise your applications and orchestrate them with Kubernetes or ECS for reliable, portable deployments.",
  },
  {
    icon: FiTrendingUp,
    title: "Auto-scaling & Performance",
    desc: "Configure load balancers, auto-scaling groups, and CDN layers to handle traffic spikes without intervention.",
  },
  {
    icon: FiActivity,
    title: "Monitoring & Observability",
    desc: "Full-stack monitoring with Datadog, Grafana, or AWS CloudWatch — with alerts that wake you up before your users do.",
  },
  {
    icon: FiLock,
    title: "Security & Compliance",
    desc: "IAM policies, VPC segmentation, secrets management, vulnerability scanning, and SOC2/ISO readiness.",
  },
  {
    icon: FiDollarSign,
    title: "Cloud Cost Optimisation",
    desc: "Audit and right-size your cloud spend. Most clients save 25–40% in the first 60 days.",
  },
  {
    icon: FiRefreshCw,
    title: "Disaster Recovery",
    desc: "Automated backups, multi-region failover, and tested runbooks so downtime stays in the milliseconds.",
  },
];

const techStack = [
  "AWS (EC2, RDS, S3, Lambda, CloudFront)",
  "Google Cloud Platform",
  "Microsoft Azure",
  "Docker & Docker Compose",
  "Kubernetes (EKS / GKE)",
  "Terraform & Pulumi",
  "GitHub Actions",
  "Datadog · Grafana · Prometheus",
  "Nginx · Traefik",
  "Vault (HashiCorp)",
];

const useCases = [
  {
    title: "Zero-Downtime Deployments",
    desc: "Blue-green and canary release strategies so every release is invisible to your users.",
    gradient: "from-blue-500/10",
  },
  {
    title: "Infrastructure as Code",
    desc: "Reproducible, version-controlled infrastructure with Terraform and Pulumi across all environments.",
    gradient: "from-cyan-500/10",
  },
  {
    title: "Cost Engineering",
    desc: "Right-size compute, spot instance strategies, and reserved capacity planning to slash your AWS bill.",
    gradient: "from-indigo-500/10",
  },
  {
    title: "Security Hardening",
    desc: "Zero-trust networking, secret rotation, WAF rules, and continuous compliance scanning.",
    gradient: "from-violet-500/10",
  },
];

/* =======================
        PAGE
======================= */

export default function CloudDevOpsPage() {
  return (
    <main className="bg-[#050B14] text-white">

      {/* ========================
              HERO
      ======================== */}
      <section className="relative min-h-screen flex items-center overflow-hidden">

        <div className="absolute inset-0">
          <div className="absolute w-[600px] h-[600px] bg-blue-500/10 blur-[160px] rounded-full top-[-200px] left-[-200px]" />
          <div className="absolute w-[600px] h-[600px] bg-cyan-500/10 blur-[160px] rounded-full bottom-[-200px] right-[-200px]" />
        </div>

        <div className="max-w-7xl mx-auto px-6 w-full relative z-10">

          <Link
            href="/services"
            className="text-sm text-slate-400 hover:text-white transition mb-10 inline-block"
          >
            ← Back to Services
          </Link>

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* LEFT */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/20 bg-blue-500/10 text-blue-300 text-sm mb-8">
                <FiCloud size={14} /> Infrastructure That Scales
              </div>

              <h1 className="text-5xl md:text-6xl xl:text-7xl font-black leading-[1.05]">
                Cloud &amp; DevOps
                <br />
                <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
                  Built to Scale
                </span>
              </h1>

              <p className="text-slate-400 text-lg mt-8 max-w-xl">
                Infrastructure that works while you sleep. We design, deploy, and
                manage cloud systems that auto-scale, self-heal, and stay secure.
              </p>

              <div className="flex gap-4 mt-10 flex-wrap">
                <Link
                  href="/contact"
                  className="px-8 py-4 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 font-semibold flex items-center gap-2 hover:scale-105 transition"
                >
                  Get an Audit <FiArrowRight />
                </Link>

                <Link
                  href="/contact"
                  className="px-8 py-4 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition"
                >
                  Discuss Your Stack
                </Link>
              </div>

              {/* STATS */}
              <div className="grid grid-cols-2 gap-5 mt-14">
                {stats.map((s) => {
                  const Icon = s.icon;
                  return (
                    <div
                      key={s.label}
                      className="p-6 rounded-2xl border border-white/10 bg-white/[0.03]"
                    >
                      <Icon className="text-cyan-400 mb-4" size={22} />
                      <div className="text-3xl font-bold">{s.value}</div>
                      <div className="text-sm text-slate-400">{s.label}</div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* RIGHT */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 blur-3xl rounded-full" />

              <div className="relative border border-white/10 rounded-[30px] overflow-hidden bg-[#0B1320]">
                <Image
                  src="/site/cloude-section.png"
                  alt="Cloud & DevOps"
                  width={1200}
                  height={900}
                  className="w-full"
                  priority
                />
              </div>

              <div className="absolute -top-5 -left-5 bg-[#0B1320] border border-white/10 rounded-xl p-4">
                <p className="text-xs text-slate-400">Cloud Cost Savings</p>
                <p className="text-xl font-bold text-cyan-400">40%</p>
              </div>

              <div className="absolute -bottom-5 right-0 bg-[#0B1320] border border-white/10 rounded-xl p-4">
                <p className="text-xs text-slate-400">Uptime SLA</p>
                <p className="text-xl font-bold text-blue-400">99.99%</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================
             SERVICES
      ======================== */}
      <section className="max-w-7xl mx-auto px-6 py-24">

        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">
            End-to-End DevOps Capabilities
          </h2>
          <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
            From cloud architecture to cost engineering — we handle the full infrastructure lifecycle.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="p-6 rounded-2xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] transition group"
              >
                <Icon className="text-cyan-400 mb-4 group-hover:scale-110 transition" size={24} />
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                <div className="mt-5 text-sm text-blue-400 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition">
                  Learn more <FiArrowRight />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ========================
            PROCESS
      ======================== */}
      <section className="border-t border-white/10 py-24">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold">
              Our DevOps Engagement Model
            </h2>
            <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
              A structured approach to transforming your infrastructure without breaking what works.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Audit & Discovery",
                desc: "We map your current infra, identify bottlenecks, security gaps, and cost leaks.",
              },
              {
                step: "02",
                title: "Architecture Design",
                desc: "We design a target-state architecture with IaC, CI/CD, and monitoring baked in.",
              },
              {
                step: "03",
                title: "Implementation",
                desc: "Zero-downtime migration and setup with full documentation at every step.",
              },
              {
                step: "04",
                title: "Handoff & Support",
                desc: "Team training, runbooks, and optional ongoing managed support retainers.",
              },
            ].map((p) => (
              <div
                key={p.step}
                className="p-6 rounded-2xl border border-white/10 bg-white/[0.03]"
              >
                <div className="text-blue-400 font-bold mb-3">{p.step}</div>
                <h3 className="text-lg font-semibold mb-2">{p.title}</h3>
                <p className="text-sm text-slate-400">{p.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================
            USE CASES
      ======================== */}
      <section className="max-w-7xl mx-auto px-6 py-24">

        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">
            Real-World Infrastructure Wins
          </h2>
          <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
            We don't manage servers — we engineer reliability and cut costs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {useCases.map((u) => (
            <div
              key={u.title}
              className={`p-10 rounded-3xl border border-white/10 bg-gradient-to-br ${u.gradient} to-transparent hover:brightness-110 transition`}
            >
              <h3 className="text-2xl font-semibold mb-3">{u.title}</h3>
              <p className="text-slate-400">{u.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ========================
            TECH STACK
      ======================== */}
      <section className="border-t border-white/10 py-24">
        <div className="max-w-5xl mx-auto px-6 text-center">

          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technologies We Use
          </h2>
          <p className="text-slate-400 mb-12 max-w-xl mx-auto">
            Best-in-class tools across cloud providers, orchestration, observability, and security.
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            {techStack.map((t) => (
              <span
                key={t}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-blue-500/20 bg-blue-500/5 text-sm text-slate-300 hover:border-blue-500/40 hover:text-white transition"
              >
                <FiCheckCircle className="text-cyan-400 shrink-0" size={13} />
                {t}
              </span>
            ))}
          </div>

        </div>
      </section>

      {/* ========================
              CTA
      ======================== */}
      <section className="border-t border-white/10 py-24">
        <div className="max-w-4xl mx-auto text-center px-6">

          <h2 className="text-4xl md:text-5xl font-bold">
            Free Cloud Audit
          </h2>

          <p className="text-slate-400 mt-6 max-w-2xl mx-auto">
            We'll review your existing infrastructure and identify security risks, performance
            bottlenecks, and cost savings — free of charge.
          </p>

          <div className="flex justify-center gap-4 mt-10 flex-wrap">
            <Link
              href="/contact"
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 font-semibold flex items-center gap-2 hover:scale-105 transition"
            >
              Claim Free Audit <FiArrowRight />
            </Link>

            <Link
              href="/services"
              className="px-8 py-4 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition"
            >
              Explore More Services
            </Link>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}