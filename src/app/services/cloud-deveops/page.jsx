import Link from "next/link";

export const metadata = {
  title: "Cloud & DevOps Services | TriAxon Technologies",
  description: "AWS, GCP, Docker, Kubernetes, Terraform. Zero-downtime deployments, CI/CD, and auto-scaling infrastructure for modern applications.",
};

const services = [
  { icon: "☁️", title: "Cloud Architecture",       desc: "Design and implement scalable, fault-tolerant infrastructure on AWS, GCP, or Azure with best-practice IaC." },
  { icon: "🔄", title: "CI/CD Pipelines",          desc: "Automated build, test, and deployment pipelines with GitHub Actions, GitLab CI, or Jenkins." },
  { icon: "🐳", title: "Containerisation",         desc: "Dockerise your applications and orchestrate them with Kubernetes or ECS for reliable, portable deployments." },
  { icon: "📈", title: "Auto-scaling & Performance", desc: "Configure load balancers, auto-scaling groups, and CDN layers to handle traffic spikes without intervention." },
  { icon: "🔍", title: "Monitoring & Observability", desc: "Full-stack monitoring with Datadog, Grafana, or AWS CloudWatch — with alerts that wake you up before your users do." },
  { icon: "🔒", title: "Security & Compliance",    desc: "IAM policies, VPC segmentation, secrets management, vulnerability scanning, and SOC2/ISO readiness." },
  { icon: "💰", title: "Cloud Cost Optimisation",  desc: "Audit and right-size your cloud spend. Most clients save 25–40% in the first 60 days." },
  { icon: "🔁", title: "Disaster Recovery",        desc: "Automated backups, multi-region failover, and tested runbooks so downtime stays in the milliseconds." },
];

const techStack = ["AWS (EC2, RDS, S3, Lambda, CloudFront)", "Google Cloud Platform", "Microsoft Azure", "Docker & Docker Compose", "Kubernetes (EKS / GKE)", "Terraform & Pulumi", "GitHub Actions", "Datadog · Grafana · Prometheus", "Nginx · Traefik", "Vault (HashiCorp)"];

export default function CloudDevOpsPage() {
  return (
    <main className="bg-[#0D1117] min-h-screen">
      <section className="relative pt-36 pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(43,126,193,0.18),transparent)]" />
        <div className="grid-pattern absolute inset-0 opacity-20" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link href="/services" className="inline-flex items-center gap-2 text-sm text-[#9CA3AF] hover:text-white mb-8 transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
            All Services
          </Link>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-4xl mb-5 block">☁️</span>
              <h1 className="font-display font-extrabold text-5xl lg:text-6xl text-white leading-[1.1] mb-6">
                Cloud & DevOps<br />
                <span className="bg-gradient-to-r from-[#2B7EC1] to-[#00B4C8] bg-clip-text text-transparent">Built to Scale</span>
              </h1>
              <p className="text-[#9CA3AF] text-lg leading-relaxed mb-8">
                Infrastructure that works while you sleep. We design, deploy, and manage cloud systems that auto-scale, self-heal, and stay secure.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-[#2B7EC1] to-[#00B4C8] text-white font-semibold hover:opacity-90 transition-opacity">Get an Audit →</Link>
                <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-[#2B7EC1]/40 text-[#79b8f0] font-semibold hover:bg-[#2B7EC1]/10 transition-colors">Discuss Your Stack</Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {[{v:"99.99%",l:"SLA We Target"},{v:"40%",l:"Avg. Cloud Cost Savings"},{v:"< 5min",l:"Deploy Time (after setup)"},{v:"0",l:"Prod Security Incidents"}].map(({v,l})=>(
                <div key={l} className="p-5 rounded-2xl border border-white/[0.07] bg-white/[0.03] text-center">
                  <div className="font-display font-extrabold text-3xl text-white mb-1">{v}</div>
                  <div className="text-xs text-[#9CA3AF]">{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#0A1628]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-xs font-mono text-[#00B4C8] uppercase tracking-widest mb-3">Services</p>
            <h2 className="font-display font-bold text-4xl text-white">What We Do</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map((s) => (
              <div key={s.title} className="group p-5 rounded-2xl border border-white/[0.07] bg-white/[0.02] hover:border-[#2B7EC1]/30 hover:-translate-y-1 transition-all duration-300">
                <div className="text-2xl mb-3">{s.icon}</div>
                <h3 className="font-semibold text-white text-sm mb-2 group-hover:text-[#00B4C8] transition-colors">{s.title}</h3>
                <p className="text-xs text-[#9CA3AF] leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <p className="text-xs font-mono text-[#00B4C8] uppercase tracking-widest mb-3">Stack</p>
            <h2 className="font-display font-bold text-4xl text-white">Technologies We Use</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {techStack.map((t) => (
              <span key={t} className="px-4 py-2.5 rounded-xl border border-[#2B7EC1]/20 bg-[#2B7EC1]/5 text-sm text-[#9CA3AF] hover:border-[#2B7EC1]/40 hover:text-white transition-colors">{t}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#0A1628]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-display font-bold text-4xl text-white mb-4">Free Cloud Audit</h2>
          <p className="text-[#9CA3AF] text-lg mb-8">We'll review your existing infrastructure and identify security risks, performance bottlenecks, and cost savings — free of charge.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 px-10 py-4 rounded-xl bg-gradient-to-r from-[#2B7EC1] to-[#00B4C8] text-white font-semibold text-base hover:opacity-90 transition-opacity">Claim Free Audit →</Link>
        </div>
      </section>
    </main>
  );
}