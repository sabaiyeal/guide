import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
const babyIllustration = "/babyread.png";

type Language = "th" | "en";

export default function App() {
  const [lang, setLang] = useState<Language>("th");
  const [activeTab, setActiveTab] = useState<"before" | "how" | "warning">("before");

  useEffect(() => {
    const savedLang = localStorage.getItem("toobtubb_lang") as Language;
    if (savedLang === "th" || savedLang === "en") {
      setLang(savedLang);
    }
  }, []);

  const handleLangChange = (newLang: Language) => {
    setLang(newLang);
    localStorage.setItem("toobtubb_lang", newLang);
  };

  const isTh = lang === "th";

  return (
    <div className="min-h-[100dvh] w-full bg-background flex justify-center pb-24">
      <div className="w-full max-w-[430px] relative shadow-soft bg-background">
        
        {/* Sticky Language Switcher */}
        <div className="sticky top-0 z-50 bg-background/90 backdrop-blur-md border-b border-border py-3 px-6 flex justify-end gap-2">
          <button
            onClick={() => handleLangChange("th")}
            className={`px-3 py-1 rounded-full text-sm font-display transition-colors ${isTh ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"}`}
          >
            🇹🇭 ไทย
          </button>
          <button
            onClick={() => handleLangChange("en")}
            className={`px-3 py-1 rounded-full text-sm font-display transition-colors ${!isTh ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"}`}
          >
            🇬🇧 English
          </button>
        </div>

        <div className="px-6 pt-6 pb-10 flex flex-col gap-8">
          {/* Hero Section */}
          <section className="relative flex flex-col items-center text-center fade-in">
            <div className="absolute top-4 left-4 text-2xl floating-anim" style={{ animationDelay: "0s" }}>⭐</div>
            <div className="absolute top-10 right-4 text-2xl floating-anim" style={{ animationDelay: "1s" }}>✨</div>
            <div className="absolute bottom-20 left-6 text-xl floating-anim" style={{ animationDelay: "2s" }}>🌙</div>
            <div className="absolute bottom-10 right-8 text-2xl floating-anim" style={{ animationDelay: "0.5s" }}>🧸</div>

            <div className="w-48 h-48 mb-2 relative">
              <img 
                src={babyIllustration} 
                alt="Baby in womb" 
                className="w-full h-full object-contain floating-anim" 
              />
            </div>
            
            <div className="bg-card p-6 rounded-[2rem] shadow-soft border border-border/50 w-full relative z-10">
              <h1 className="text-2xl font-bold text-primary mb-2">
                {isTh ? "คู่มือตุ้บตั้บ💌" : "Toobtubb Guide💌"}
              </h1>
              <h2 className="text-lg font-medium text-foreground mb-1">
                {isTh ? "คู่มือการนับลูกดิ้นสำหรับคุณแม่" : "Kick Counting Guide for Moms"}
              </h2>
              <p className="text-muted-foreground text-sm">
                {isTh ? "เพราะทุกการดิ้นมีความหมาย" : "Every kick is a hello from your little one"}
              </p>
            </div>
          </section>

          {/* Tabs Navigation */}
          <div className="flex bg-muted p-1.5 rounded-full overflow-x-auto no-scrollbar gap-1 fade-in" style={{ animationDelay: "0.1s" }}>
            <TabButton 
              active={activeTab === "before"} 
              onClick={() => setActiveTab("before")}
            >
              {isTh ? "🌱 สิ่งที่ควรรู้" : "🌱 Before You Start"}
            </TabButton>
            <TabButton 
              active={activeTab === "how"} 
              onClick={() => setActiveTab("how")}
            >
              {isTh ? "📊 วิธีนับลูกดิ้น" : "📊 How to Count"}
            </TabButton>
            <TabButton 
              active={activeTab === "warning"} 
              onClick={() => setActiveTab("warning")}
            >
              {isTh ? "🚨 สัญญาณเตือน" : "🚨 Warning Signs"}
            </TabButton>
          </div>

          {/* Tab Content */}
          <div className="min-h-[300px]">
            <AnimatePresence mode="wait">
              {activeTab === "before" && (
                <motion.div
                  key="before"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="flex flex-col gap-4"
                >
                  <Accordion type="single" collapsible className="w-full space-y-3">
                    <AccordionItem value="q1" className="bg-card px-4 rounded-2xl border-none shadow-soft">
                      <AccordionTrigger className="hover:no-underline font-display text-base text-left">
                        {isTh ? "เริ่มนับลูกดิ้นเมื่อไหร่?" : "When should I start counting?"}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground leading-relaxed">
                        {isTh 
                          ? "สูติแพทย์มักแนะนำให้เริ่มสังเกตและนับลูกดิ้นอย่างจริงจัง เมื่ออายุครรภ์ 28 สัปดาห์ขึ้นไป" 
                          : "Doctors usually recommend starting to seriously count fetal movements from 28 weeks of pregnancy."}
                      </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="q2" className="bg-card px-4 rounded-2xl border-none shadow-soft">
                      <AccordionTrigger className="hover:no-underline font-display text-base text-left">
                        {isTh ? "ลูกดิ้นแบบไหนที่นับเป็น 1 ครั้ง?" : "What counts as 1 movement?"}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground leading-relaxed whitespace-pre-line">
                        {isTh 
                          ? "• ถีบ เตะ กระทุ้ง\n• โก่งตัว\n• ม้วนตัว พลิกตัว\n(หากดิ้นหลายครั้งติดๆ กันในชุดเดียว ให้นับเป็น 1 ครั้ง)" 
                          : "• Kicks and jabs\n• Stretching\n• Rolling and turning\n(If multiple movements happen in a burst, count the whole burst as 1)"}
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="q3" className="bg-card px-4 rounded-2xl border-none shadow-soft">
                      <AccordionTrigger className="hover:no-underline font-display text-base text-left">
                        {isTh ? "ลูกดิ้นแบบไหนที่ไม่นับ?" : "What does NOT count?"}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground leading-relaxed">
                        {isTh 
                          ? "หากรู้สึกเหมือนมีการตอดเป็นจังหวะสม่ำเสมอ คล้ายเสียงหัวใจเต้น หรือชีพจร มักเป็นอาการ 'ลูกสะอึก' จึงไม่นับเป็นการดิ้น" 
                          : "If you feel a regular rhythmic tapping (like a heartbeat or pulse), that's usually baby hiccups — this does NOT count as movement."}
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="q4" className="bg-card px-4 rounded-2xl border-none shadow-soft">
                      <AccordionTrigger className="hover:no-underline font-display text-base text-left">
                        {isTh ? "ควรนับลูกดิ้นในท่าไหน?" : "What position should I be in?"}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground leading-relaxed whitespace-pre-line">
                        {isTh 
                          ? "• นั่งพักสบาย ๆ หรือ นอนตะแคงซ้าย (ช่วยให้เลือดไปเลี้ยงทารกได้ดีขึ้น)\n• อยู่ในที่เงียบและผ่อนคลาย มือสัมผัสหน้าท้อง\n• อาจดื่มน้ำเย็น น้ำผลไม้ หรือรับประทานของว่างก่อนเพื่อช่วยกระตุ้นได้" 
                          : "• Sit comfortably or lie on your left side (improves blood flow to baby)\n• Find a quiet, relaxed place with your hands on your belly\n• Try drinking cold water, juice, or having a snack first to stimulate movement"}
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </motion.div>
              )}

              {activeTab === "how" && (
                <motion.div
                  key="how"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="flex flex-col gap-6"
                >
                  {/* Method 1 */}
                  <div className="bg-[var(--color-accent-yellow)]/30 border border-[#F9E79F] p-6 rounded-[2rem] shadow-soft relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-[var(--color-accent-mint)] rounded-bl-full opacity-50 z-0"></div>
                    <div className="relative z-10">
                      <h3 className="text-xl font-display font-semibold mb-1">
                        {isTh ? "🍽️ วิธีที่ 1: นับหลังอาหาร 3 มื้อ" : "🍽️ Method 1: Count After 3 Meals (Sadovsky Method)"}
                      </h3>
                      <p className="text-sm opacity-80 mb-4">
                        {isTh ? "เหมาะสำหรับคุณแม่ที่มีเวลาสังเกตหลังมื้ออาหาร" : "Best for moms who can track movements after meals"}
                      </p>
                      
                      <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 mb-4">
                        <ol className="list-decimal pl-4 space-y-2 text-sm font-medium">
                          <li>{isTh ? "จับเวลา 1 ชั่วโมงหลังมื้ออาหาร (เช้า กลางวัน เย็น)" : "Time 1 hour after each meal (morning, noon, evening)"}</li>
                          <li>{isTh ? <>ใน 1 ชั่วโมง ลูกควรดิ้น <strong className="text-primary">"อย่างน้อย 3 ครั้ง"</strong></> : <>Baby should move <strong className="text-primary">"at least 3 times"</strong> within 1 hour</>}</li>
                        </ol>
                      </div>

                      <div className="text-sm bg-white/40 p-4 rounded-xl">
                        <p className="font-semibold mb-2">{isTh ? "💡 ทริคเพิ่มเติม:" : "💡 Important tips:"}</p>
                        <ul className="list-disc pl-4 space-y-1 opacity-90 text-xs">
                          {isTh ? (
                            <>
                              <li>หากใน 1 ชั่วโมงแรกดิ้นไม่ถึง 3 ครั้ง ให้นับต่ออีก 1 ชั่วโมง</li>
                              <li>หากครบ 2 ชั่วโมงแล้วยังดิ้นไม่ถึง 3 ครั้ง ถือว่าผิดปกติ ควรรีบพบแพทย์</li>
                              <li>เมื่อนับครบทั้ง 3 มื้อ นำจำนวนครั้งมารวมกัน ต้องได้ <strong className="text-primary">'ไม่น้อยกว่า 10 ครั้งต่อวัน'</strong></li>
                            </>
                          ) : (
                            <>
                              <li>If fewer than 3 movements in the first hour, count for another hour</li>
                              <li>If still fewer than 3 movements after 2 hours — this is abnormal, see a doctor immediately</li>
                              <li>Add up counts from all 3 meals — total must be <strong className="text-primary">'at least 10 times per day'</strong></li>
                            </>
                          )}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Method 2 */}
                  <div className="bg-[var(--color-accent-pink)]/20 border border-[#F3A3B4]/50 p-6 rounded-[2rem] shadow-soft relative">
                    <h3 className="text-xl font-display font-semibold mb-1">
                      {isTh ? "⭐ วิธีที่ 2: นับให้ครบ 10 ครั้ง" : "⭐ Method 2: Count to Ten"}
                    </h3>
                    <p className="text-sm opacity-80 mb-4">
                      {isTh ? "เหมาะสำหรับคุณแม่ที่อยากนับรวดเดียวให้จบ" : "Best for moms who want to count in one session"}
                    </p>
                    
                    <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4">
                      <ol className="list-decimal pl-4 space-y-2 text-sm font-medium">
                        {isTh ? (
                          <>
                            <li>เลือกช่วงเวลาที่ลูกมักดิ้นเก่งที่สุด หรือเวลาที่คุณแม่สะดวก (แนะนำเวลาเดิมทุกวัน เช่น ช่วงเย็น)</li>
                            <li>เมื่อลูกดิ้นครั้งแรกให้เริ่มนับครั้งที่ 1 และบันทึกเวลาไว้</li>
                            <li>นับต่อเนื่องจนครบ 10 ครั้ง แล้วจดเวลาที่นับจบ</li>
                            <li>ลูกควรดิ้นครบ 10 ครั้ง <strong className="text-primary">ภายในเวลา 2 ชั่วโมง</strong></li>
                          </>
                        ) : (
                          <>
                            <li>Choose the time when your baby is most active, or a convenient time (recommend same time daily, e.g. evenings)</li>
                            <li>Start counting from the first kick, note the start time</li>
                            <li>Count continuously until you reach 10 movements, note the end time</li>
                            <li>Baby should reach 10 movements <strong className="text-primary">within 2 hours</strong></li>
                          </>
                        )}
                      </ol>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === "warning" && (
                <motion.div
                  key="warning"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="flex flex-col gap-4"
                >
                  <div className="bg-[var(--color-accent-red)] border border-red-200/50 p-6 rounded-[2rem] shadow-soft">
                    <h3 className="text-lg font-display font-semibold text-red-800 mb-4">
                      {isTh ? "🚨 ควรรีบพบแพทย์ทันที หากพบว่า:" : "🚨 See a Doctor Immediately — if:"}
                    </h3>
                    
                    <ul className="space-y-3 mb-6">
                      {isTh ? (
                        <>
                          <li className="flex gap-3 bg-white/60 p-3 rounded-xl">
                            <span className="shrink-0 mt-0.5">•</span>
                            <span className="text-sm"><strong>วิธีนับหลัง 3 มื้อ:</strong> ดิ้นรวมกันทั้งวันน้อยกว่า 10 ครั้ง หรือหลังอาหารมื้อใดมื้อหนึ่งดิ้นไม่ถึง 3 ครั้งใน 2 ชั่วโมง</span>
                          </li>
                          <li className="flex gap-3 bg-white/60 p-3 rounded-xl">
                            <span className="shrink-0 mt-0.5">•</span>
                            <span className="text-sm"><strong>วิธีนับ 10 ครั้ง:</strong> ใช้เวลาเกิน 2 ชั่วโมงแล้ว แต่ลูกดิ้นไม่ครบ 10 ครั้ง</span>
                          </li>
                          <li className="flex gap-3 bg-white/60 p-3 rounded-xl">
                            <span className="shrink-0 mt-0.5">•</span>
                            <span className="text-sm">ลูกดิ้นน้อยลงจากวันก่อนๆ อย่างชัดเจน (เช่น ลดลงมากกว่าครึ่งหนึ่ง)</span>
                          </li>
                          <li className="flex gap-3 bg-white/60 p-3 rounded-xl">
                            <span className="shrink-0 mt-0.5">•</span>
                            <span className="text-sm">ไม่รู้สึกว่าลูกดิ้นเลย แม้จะเปลี่ยนท่านอนตะแคงซ้าย ดื่มน้ำเย็น หรือลูบท้องกระตุ้นแล้วก็ตาม</span>
                          </li>
                        </>
                      ) : (
                        <>
                          <li className="flex gap-3 bg-white/60 p-3 rounded-xl">
                            <span className="shrink-0 mt-0.5">•</span>
                            <span className="text-sm"><strong>Method 1 (3 meals):</strong> Total daily movements fewer than 10, or fewer than 3 movements within 2 hours after any single meal</span>
                          </li>
                          <li className="flex gap-3 bg-white/60 p-3 rounded-xl">
                            <span className="shrink-0 mt-0.5">•</span>
                            <span className="text-sm"><strong>Method 2 (count to 10):</strong> Baby hasn't reached 10 movements after 2 hours</span>
                          </li>
                          <li className="flex gap-3 bg-white/60 p-3 rounded-xl">
                            <span className="shrink-0 mt-0.5">•</span>
                            <span className="text-sm">Baby is moving noticeably less than usual (e.g. more than half as much)</span>
                          </li>
                          <li className="flex gap-3 bg-white/60 p-3 rounded-xl">
                            <span className="shrink-0 mt-0.5">•</span>
                            <span className="text-sm">You feel no movement at all, even after lying on your left side, drinking cold water, or rubbing your belly</span>
                          </li>
                        </>
                      )}
                    </ul>

                    <div className="rounded-2xl overflow-hidden border border-pink-200 shadow-soft">
                      <div className="bg-[#F3A3B4]/30 px-4 py-3 flex items-center gap-2">
                        <span className="text-xl">❤️</span>
                        <p className="font-bold text-[#4A3728] text-base">
                          {isTh ? "ข้อสำคัญ" : "Remember"}
                        </p>
                      </div>
                      <div className="bg-white/90 px-4 py-4 flex flex-col gap-3">
                        <div className="flex gap-2 items-start">
                          <span className="text-base shrink-0">👶🏻</span>
                          <p className="text-sm text-[#4A3728] leading-relaxed">
                            {isTh
                              ? "ลูกแต่ละคนมีจังหวะการดิ้นไม่เหมือนกัน"
                              : "Every baby has their own movement rhythm."}
                          </p>
                        </div>
                        <div className="bg-[#F9E79F]/50 rounded-xl px-3 py-2 text-sm font-semibold text-[#4A3728] text-center">
                          {isTh
                            ? "\"วันนี้ลูกดิ้นน้อยกว่าปกติของเขาหรือไม่?\""
                            : "\"Is my baby moving less than usual today?\""}
                        </div>
                        <div className="flex gap-2 items-start">
                          <span className="text-base shrink-0">🏥</span>
                          <p className="text-sm text-[#4A3728] leading-relaxed">
                            {isTh
                              ? "หากคุณแม่รู้สึกผิดปกติ กังวล หรือไม่แน่ใจ ควรไปโรงพยาบาลเพื่อตรวจเช็กสุขภาพลูกน้อยทันที"
                              : "If you feel something is wrong, are worried, or unsure — go to the hospital right away to check on your baby."}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>

{/* CTA Button Sticky Bottom */}
<div className="fixed bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-background via-background to-transparent z-40 flex justify-center pointer-events-none">
  <div className="w-full max-w-[430px] pointer-events-auto">
    <a
      href="https://toobtubb.vercel.app"
      target="_blank"
      rel="noopener noreferrer"
      className="w-full bg-primary text-primary-foreground font-display font-semibold text-lg py-4 rounded-3xl shadow-lg hover:scale-[1.02] transition-transform active:scale-95 flex items-center justify-center gap-2"
    >
      {isTh ? "เริ่มนับลูกดิ้นเลย" : "Start Counting Kicks"} <span className="text-xl">→</span>
    </a>
  </div>
</div>
  </div>
</div>

  );
}

function TabButton({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      onClick={onClick}
      className={`flex-1 whitespace-nowrap min-w-max px-4 py-2.5 rounded-full text-sm font-display font-medium transition-all ${
        active 
          ? "bg-card text-foreground shadow-sm" 
          : "text-muted-foreground hover:text-foreground hover:bg-black/5"
      }`}
    >
      {children}
    </button>
  );
}
