"use client";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { MessageCircle, X, Send, ArrowLeft, CalendarDays } from "lucide-react";
import { useSiteCopy } from "@/lib/jktl/site-copy";
import { answerQuestion } from "@/lib/assistant";
import BookingForm from "./BookingForm";
type Message = { role: "assistant" | "user"; text: string };
export default function ChatAssistant() {
  const t = useSiteCopy(),
    reduced = useReducedMotion();
  const [open, setOpen] = useState(false),
    [booking, setBooking] = useState(false),
    [simulation, setSimulation] = useState(false),
    [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      text: "Welcome to K.K. Ubani & Co. I’m the website assistant. Ask about our services or request a consultation. Please don’t share confidential case details here.",
    },
  ]);
  const end = useRef<HTMLDivElement>(null),
    field = useRef<HTMLInputElement>(null),
    trigger = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (open && !booking) field.current?.focus();
  }, [open, booking]);
  useEffect(() => {
    if (open)
      end.current?.scrollIntoView({
        behavior: reduced ? "instant" : "smooth",
        block: "nearest",
      });
  }, [messages, open, reduced]);
  const close = () => {
    setOpen(false);
    trigger.current?.focus();
  };
  function send(text: string) {
    if (!text.trim()) return;
    const result = answerQuestion(text, t);
    setMessages((m) => [
      ...m,
      { role: "user", text: text.trim().slice(0, 500) },
      { role: "assistant", text: result.text },
    ]);
    setInput("");
    if (result.booking) setBooking(true);
  }
  return (
    <div className="chat-widget">
      <AnimatePresence>
        {open && (
          <motion.section
            id="firm-assistant"
            aria-label="Firm website assistant"
            className="chat-panel"
            initial={{ opacity: 0, y: reduced ? 0 : 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: reduced ? 0 : 10 }}
            onKeyDown={(e) => {
              if (e.key === "Escape") close();
            }}
          >
            <header className="chat-header">
              <div className="chat-avatar">
                <MessageCircle size={21} />
              </div>
              <div>
                <strong>K.K. Ubani & Co.</strong>
                <span>Website assistant · here to guide you</span>
              </div>
              <button onClick={close} aria-label="Close assistant">
                <X size={20} />
              </button>
            </header>
            <div className="simulator-toolbar">
              <button
                aria-pressed={simulation}
                onClick={() => {
                  setSimulation(!simulation);
                  setBooking(false);
                  setInput("");
                  setMessages([
                    {
                      role: "assistant",
                      text: !simulation
                        ? "Simulator started. Try a question below or practice requesting a meeting. Answers use predefined firm information, not a live AI model. No email will be sent in simulator mode."
                        : "You’re back in the website assistant. Meeting requests use the firm’s email service when configured.",
                    },
                  ]);
                }}
              >
                {simulation ? "Exit simulator" : "Try chatbot simulator"}
              </button>
              <span>{simulation ? "DEMO MODE" : "Website assistant"}</span>
            </div>
            {booking ? (
              <div className="chat-booking">
                <button className="text-link" onClick={() => setBooking(false)}>
                  <ArrowLeft size={16} /> Back to conversation
                </button>
                <h3>
                  {simulation
                    ? "Practice a meeting request."
                    : "Let’s find time to talk."}
                </h3>
                <p>
                  Request a preferred time in Lagos (WAT). The firm will confirm
                  availability.
                </p>
                <BookingForm
                  key={simulation ? "demo" : "live"}
                  compact
                  simulation={simulation}
                />
              </div>
            ) : (
              <>
                <div
                  className="chat-messages"
                  role="log"
                  aria-live="polite"
                  aria-relevant="additions"
                >
                  {messages.map((m, i) => (
                    <div key={i} className={`chat-message ${m.role}`}>
                      {m.text}
                    </div>
                  ))}
                  <div ref={end} />
                </div>
                <div className="chat-suggestions">
                  {(simulation
                    ? [
                        "Corporate services",
                        "What are your fees?",
                        "Contact the firm",
                      ]
                    : ["Our services", "Contact the firm"]
                  ).map((q) => (
                    <button key={q} onClick={() => send(q)}>
                      {q}
                    </button>
                  ))}
                  <button onClick={() => setBooking(true)}>
                    <CalendarDays size={13} />{" "}
                    {simulation ? "Simulate a meeting" : "Request a meeting"}
                  </button>
                </div>
                <form
                  className="chat-input"
                  onSubmit={(e) => {
                    e.preventDefault();
                    send(input);
                  }}
                >
                  <input
                    ref={field}
                    aria-label="Your question"
                    placeholder="How can we help?"
                    maxLength={500}
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                  />
                  <button aria-label="Send message" disabled={!input.trim()}>
                    <Send size={18} />
                  </button>
                </form>
                <p className="chat-disclaimer">
                  General information only. For legal advice, speak with an
                  attorney.
                </p>
              </>
            )}
          </motion.section>
        )}
      </AnimatePresence>
      <button
        ref={trigger}
        className="chat-trigger"
        onClick={() => (open ? close() : setOpen(true))}
        aria-expanded={open}
        aria-controls="firm-assistant"
      >
        {open ? <X size={20} /> : <MessageCircle size={20} />}
        <span>{open ? "Close" : "Ask us a question"}</span>
      </button>
    </div>
  );
}
