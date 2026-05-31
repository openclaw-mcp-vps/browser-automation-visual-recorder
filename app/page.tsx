export default function Home() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Browser Automation
        </span>
        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
          Record Browser Actions as{" "}
          <span className="text-[#58a6ff]">Automation Scripts</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-2xl mx-auto mb-10">
          Capture every click, input, and navigation in your browser. RecordFlow converts your interactions into production-ready Playwright or Selenium scripts with real-time visual feedback.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg transition-colors text-base"
          >
            Start Recording — $25/mo
          </a>
          <a
            href="#faq"
            className="border border-[#30363d] hover:border-[#58a6ff] text-[#c9d1d9] px-8 py-3 rounded-lg transition-colors text-base"
          >
            Learn More
          </a>
        </div>
        <div className="mt-16 bg-[#161b22] border border-[#30363d] rounded-xl p-6 text-left font-mono text-sm overflow-x-auto">
          <div className="text-[#8b949e] mb-2">// Generated Playwright script</div>
          <div><span className="text-[#ff7b72]">const</span> <span className="text-[#79c0ff]">{'{ chromium }'}</span> <span className="text-[#ff7b72]">=</span> <span className="text-[#a5d6ff]">require</span><span className="text-[#c9d1d9]">('playwright');</span></div>
          <div><span className="text-[#ff7b72]">const</span> <span className="text-[#79c0ff]">browser</span> <span className="text-[#ff7b72]">=</span> <span className="text-[#ff7b72]">await</span> <span className="text-[#79c0ff]">chromium</span><span className="text-[#c9d1d9]">.launch();</span></div>
          <div><span className="text-[#ff7b72]">await</span> <span className="text-[#79c0ff]">page</span><span className="text-[#c9d1d9]">.goto(</span><span className="text-[#a5d6ff]">'https://example.com'</span><span className="text-[#c9d1d9]">);</span></div>
          <div><span className="text-[#ff7b72]">await</span> <span className="text-[#79c0ff]">page</span><span className="text-[#c9d1d9]">.click(</span><span className="text-[#a5d6ff]">'#login-btn'</span><span className="text-[#c9d1d9]">);</span></div>
          <div><span className="text-[#ff7b72]">await</span> <span className="text-[#79c0ff]">page</span><span className="text-[#c9d1d9]">.fill(</span><span className="text-[#a5d6ff]">'input[name="email"]'</span><span className="text-[#c9d1d9]">, </span><span className="text-[#a5d6ff]">'user@example.com'</span><span className="text-[#c9d1d9]">);</span></div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-xl p-8">
          <div className="flex items-baseline gap-1 mb-1">
            <span className="text-4xl font-bold text-white">$25</span>
            <span className="text-[#8b949e]">/month</span>
          </div>
          <p className="text-[#8b949e] mb-6">Everything you need to automate your QA workflow</p>
          <ul className="space-y-3 mb-8">
            {[
              "Browser extension for Chrome & Firefox",
              "Playwright & Selenium script export",
              "Real-time WebSocket recording feedback",
              "Visual script editor with syntax highlighting",
              "Unlimited recordings & exports",
              "Priority email support"
            ].map((f) => (
              <li key={f} className="flex items-center gap-3 text-sm">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg text-center transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-6">
          {[
            {
              q: "Which browsers and frameworks are supported?",
              a: "The browser extension works with Chrome and Firefox. Scripts can be exported for Playwright (JavaScript/TypeScript/Python) and Selenium (Python/Java)."
            },
            {
              q: "How does real-time recording feedback work?",
              a: "The extension streams your interactions via WebSocket to the RecordFlow app, which processes and displays the generated script live as you browse — no manual export step needed."
            },
            {
              q: "Can I edit the generated scripts before exporting?",
              a: "Yes. The built-in script editor includes syntax highlighting, step reordering, and assertion insertion so you can refine scripts before downloading or copying them."
            }
          ].map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-lg p-6">
              <h3 className="font-semibold text-white mb-2">{q}</h3>
              <p className="text-[#8b949e] text-sm leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#30363d] text-center py-6 text-[#8b949e] text-sm">
        © {new Date().getFullYear()} RecordFlow. All rights reserved.
      </footer>
    </main>
  );
}
