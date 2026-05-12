import {
  SITE,
  SERVICES,
  PORTFOLIO_PROJECTS,
  BLOG_POSTS,
  ANIMATION,
  BUDGET_OPTIONS,
} from "@/lib/constants";

/**
 * @param {string} str
 * @returns {string}
 * @example
 */
export function slugify(str) {
  return str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

/**
 * @param {string} slug
 * @returns {string}
 * @example 
 */
export function unslugify(slug) {
  return slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

/**
 * @param {string} str
 * @param {number} [maxLength=160]
 * @returns {string}
 */
export function truncate(str, maxLength = 160) {
  if (!str || str.length <= maxLength) return str;
  return str.slice(0, str.lastIndexOf(" ", maxLength)) + "…";
}

/**
 * @param {string} name
 * @returns {string}
 * @example 
 */
export function getInitials(name) {
  if (!name) return "";
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((n) => n[0].toUpperCase())
    .join("");
}

/**
 * @param {number} count
 * @param {string} singular
 * @param {string} [plural]   
 * @returns {string}
 * @example
 * @example "
 */
export function pluralise(count, singular, plural) {
  const word = count === 1 ? singular : (plural ?? `${singular}s`);
  return `${count} ${word}`;
}

/**
 * @param {string} str
 * @returns {string}
 */
export function capitalise(str) {
  if (!str) return "";
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * @param {number} n
 * @param {string} [locale="en-IN"]
 * @returns {string}
 * @example 
 */
export function formatNumber(n, locale = "en-IN") {
  return new Intl.NumberFormat(locale).format(n);
}

/**
 * @param {Object} stat }
 * @returns {string}
 * @example 
 */
export function formatStat({ value, suffix = "" }) {
  return `${value}${suffix}`;
}

/**
 * @param {string} value  
 * @param {"INR"|"USD"} [currency="INR"]
 * @returns {string}
 */
export function formatBudget(value, currency = "INR") {
  const option = BUDGET_OPTIONS.find((b) => b.value === value);
  if (!option) return value;
  return currency === "USD" ? option.usd : option.label;
}

/**
 * @param {number} n
 * @param {number} min
 * @param {number} max
 * @returns {number}
 */
export function clamp(n, min, max) {
  return Math.min(Math.max(n, min), max);
}

/**
 * @param {number} a
 * @param {number} b
 * @param {number} t  - 0–1
 * @returns {number}
 */
export function lerp(a, b, t) {
  return a + (b - a) * t;
}

/**
 * @param {string} isoDate  
 * @param {Intl.DateTimeFormatOptions} [options]
 * @returns {string}        
 */
export function formatDate(isoDate, options = {}) {
  const defaults = { day: "numeric", month: "long", year: "numeric" };
  return new Intl.DateTimeFormat("en-IN", { ...defaults, ...options }).format(
    new Date(isoDate)
  );
}

/**
 * @param {string} isoDate
 * @returns {string}  
 */
export function timeAgo(isoDate) {
  const seconds = Math.floor((Date.now() - new Date(isoDate).getTime()) / 1000);
  const units = [
    { label: "year",   secs: 31536000 },
    { label: "month",  secs: 2592000  },
    { label: "week",   secs: 604800   },
    { label: "day",    secs: 86400    },
    { label: "hour",   secs: 3600     },
    { label: "minute", secs: 60       },
  ];
  for (const { label, secs } of units) {
    const count = Math.floor(seconds / secs);
    if (count >= 1) return `${count} ${label}${count > 1 ? "s" : ""} ago`;
  }
  return "just now";
}

/**
 * @param {string} readTime  
 * @returns {number}
 */
export function parseReadTime(readTime) {
  const match = readTime?.match(/\d+/);
  return match ? parseInt(match[0], 10) : 0;
}

/**
 * @returns {number}
 */
export function currentYear() {
  return new Date().getFullYear();
}

/**
 * @returns {string}
 */
export function copyrightString() {
  const now = currentYear();
  const range = now > SITE.foundedYear ? `${SITE.foundedYear}–${now}` : `${now}`;
  return `© ${SITE.name} ${range}`;
}


/**
 * @param {Array} arr
 * @param {number} size
 * @returns {Array[]}
 * @example
 */
export function chunk(arr, size) {
  const result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
}

/**
 * @param {Array} arr
 * @param {Function} [keyFn]  
 * @returns {Array}
 */
export function unique(arr, keyFn) {
  if (!keyFn) return [...new Set(arr)];
  const seen = new Set();
  return arr.filter((item) => {
    const key = keyFn(item);
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

/**
 * @param {Array} arr
 * @returns {Array}
 */
export function shuffle(arr) {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

/**
 * @param {Object[]} arr
 * @param {string|Function} key 
 * @returns {Object.<string, Object[]>}
 * @example
 */
export function groupBy(arr, key) {
  return arr.reduce((acc, item) => {
    const group = typeof key === "function" ? key(item) : item[key];
    if (!acc[group]) acc[group] = [];
    acc[group].push(item);
    return acc;
  }, {});
}

/**
 * @param {Array} arr
 * @param {number} n
 * @returns {Array}
 */
export function takeLast(arr, n) {
  return arr.slice(Math.max(0, arr.length - n));
}


/**
 * @param {string} [message]
 * @param {string} [phone]  
 * @returns {string}
 */
export function buildWhatsAppUrl(message = "", phone = SITE.whatsapp) {
  const base = `https://wa.me/${phone}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

/**
 * @param {string} [to]     
 * @param {string} [subject]
 * @param {string} [body]
 * @returns {string}
 */
export function buildMailtoUrl(to = SITE.email, subject = "", body = "") {
  const params = new URLSearchParams();
  if (subject) params.set("subject", subject);
  if (body)    params.set("body", body);
  const qs = params.toString();
  return `mailto:${to}${qs ? `?${qs}` : ""}`;
}

/**
 * @param {Object} [params] 
 * @returns {string}
 */
export function buildCalUrl(params = {}) {
  const base = "https://cal.com/triaxon/30min";
  const qs = new URLSearchParams(params).toString();
  return qs ? `${base}?${qs}` : base;
}

/**
 * @param {string} path
 * @returns {string}
 */
export function absoluteUrl(path = "") {
  return `${SITE.url}${path.startsWith("/") ? path : `/${path}`}`;
}


/**
 * @param {string} email
 * @returns {boolean}
 */
export function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

/**
 * @param {string} phone
 * @returns {boolean}
 */
export function isValidPhone(phone) {
  return /^\+?[\d\s\-().]{7,20}$/.test(phone);
}

/**
 * @param {string} url
 * @returns {boolean}
 */
export function isValidUrl(url) {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}

/**
 * @param {string} str
 * @returns {boolean}
 */
export function isNonEmpty(str) {
  return typeof str === "string" && str.trim().length > 0;
}

/**
 * @param {...(string|undefined|null|false)} classes
 * @returns {string}
 * @example 
 */
export function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

/**
 * @param {number} index      
 * @param {number} [base=0]    
 * @returns {string}        
 */
export function staggerDelay(index, base = 0) {
  return `${base + index * ANIMATION.stagger}ms`;
}

/**
 * @param {number} index
 * @param {number} [base=0]
 * @returns {{ animationDelay: string, transitionDelay: string }}
 */
export function staggerStyle(index, base = 0) {
  const delay = staggerDelay(index, base);
  return { animationDelay: delay, transitionDelay: delay };
}

/**
 * @param {string} [query=""]
 * @returns {typeof SERVICES}
 */
export function filterServices(query = "") {
  const q = query.toLowerCase().trim();
  if (!q) return SERVICES;
  return SERVICES.filter(
    ({ title, tags, tagline }) =>
      title.toLowerCase().includes(q) ||
      tagline.toLowerCase().includes(q) ||
      tags.some((t) => t.toLowerCase().includes(q))
  );
}

/**
 * @param {Object} [filters]
 * @param {string} [filters.category] 
 * @param {string} [filters.tech]      
 * @param {boolean} [filters.featured] 
 * @returns {typeof PORTFOLIO_PROJECTS}
 */
export function filterPortfolio({ category, tech, featured } = {}) {
  return PORTFOLIO_PROJECTS.filter((project) => {
    if (featured !== undefined && project.featured !== featured) return false;
    if (category && category !== "All" && project.category !== category) return false;
    if (tech && !project.stack.includes(tech)) return false;
    return true;
  });
}

/**
 * @param {Object} [options]
 * @param {string} [options.category]  
 * @param {boolean} [options.featuredFirst]
 * @returns {typeof BLOG_POSTS}
 */
export function sortBlogPosts({ category, featuredFirst = false } = {}) {
  let posts = [...BLOG_POSTS];

  if (category && category !== "All") {
    posts = posts.filter((p) => p.category === category);
  }

  posts.sort((a, b) => new Date(b.date) - new Date(a.date));

  if (featuredFirst) {
    posts.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
  }

  return posts;
}

/**
 * @param {number} [n=3]
 * @returns {typeof BLOG_POSTS}
 */
export function getRecentPosts(n = 3) {
  return sortBlogPosts().slice(0, n);
}

/**
 * @returns {string[]}
 */
export function getAllPortfolioTechs() {
  return unique(PORTFOLIO_PROJECTS.flatMap((p) => p.stack)).sort();
}

/**
 * @returns {string[]}
 */
export function getAllPortfolioCategories() {
  return ["All", ...unique(PORTFOLIO_PROJECTS.map((p) => p.category)).sort()];
}


/**
 * @returns {boolean}
 */
export function isBrowser() {
  return typeof window !== "undefined";
}

/**
 * @returns {boolean}
 */
export function isMobile() {
  if (!isBrowser()) return false;
  return window.innerWidth < 768;
}

/**
 * @returns {boolean}
 */
export function prefersReducedMotion() {
  if (!isBrowser()) return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/**
 * @param {number} duration 
 * @returns {number}
 */
export function safeAnimationDuration(duration) {
  return prefersReducedMotion() ? 0 : duration;
}


/**
 * @returns {string}
 */
export function uid() {
  return Math.random().toString(36).slice(2, 9);
}

/**
 * @param {Function} fn
 * @param {number} [delay=300]
 * @returns {Function}
 */
export function debounce(fn, delay = 300) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}

/**
 * @param {Object} obj
 * @param {string[]} keys
 * @returns {Object}
 */
export function pick(obj, keys) {
  return Object.fromEntries(keys.filter((k) => k in obj).map((k) => [k, obj[k]]));
}

/**
 * @param {Object} obj
 * @param {string[]} keys
 * @returns {Object}
 */
export function omit(obj, keys) {
  const set = new Set(keys);
  return Object.fromEntries(Object.entries(obj).filter(([k]) => !set.has(k)));
}

/**
 * @param {number} ms
 * @returns {Promise<void>}
 */
export function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}