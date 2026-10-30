"use client";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { MessageCircle, X, Send, ArrowLeft, CalendarDays } from "lucide-react";
import { useSiteCopy } from "@/lib/jktl/site-copy";
import { answerQuestion } from "@/lib/assistant";
import BookingForm from "./BookingForm";
type Message = { role: "assistant" | "user"; text: string; source?: string };
export default function ChatAssistant() {
  const t = useSiteCopy(),
    reduced = useReducedMotion();
  const [open, setOpen] = useState(false),
    [booking, setBooking] = useState(false),
    [typing, setTyping] = useState(false),
    [human, setHuman] = useState(false),
    [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      text: "Welcome to K.K. Ubani & Co. I’m Counsel AI, the firm’s automated website assistant. Ask about our services or request a consultation. Please don’t share confidential case details here.",
    },
  ]);
  const replyTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  useEffect(
    () => () => {
      if (replyTimer.current) clearTimeout(replyTimer.current);
    },
    [],
  );
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
  }, [messages, open, reduced, typing, human]);
  const close = () => {
    setOpen(false);
    trigger.current?.focus();
  };
  function send(text: string) {
    if (!text.trim() || typing) return;
    const result = answerQuestion(text.slice(0, 500), t);
    setMessages((m) => [
      ...m,
      { role: "user", text: text.trim().slice(0, 500) },
    ]);
    setInput("");
    setTyping(true);
    replyTimer.current = setTimeout(
      () => {
        setMessages((m) => [
          ...m,
          { role: "assistant", text: result.text, source: result.source },
        ]);
        setTyping(false);
        if (result.human) setHuman(true);
        // Keep the answer visible; the visitor opens the request form explicitly.
      },
      reduced ? 300 : Math.min(1600, 600 + result.text.length * 3),
    );
  }

  return (
    <div className="chat-widget">
      <AnimatePresence>
        {open && (
          <motion.section
            id="firm-assistant"
            aria-label="Counsel AI assistant"
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
                <strong>Counsel AI</strong>
                <span>K.K. Ubani & Co. · automated assistant</span>
              </div>
              <button onClick={close} aria-label="Close assistant">
                <X size={20} />
              </button>
            </header>
            {booking ? (
              <div className="chat-booking">
                <button className="text-link" onClick={() => setBooking(false)}>
                  <ArrowLeft size={16} /> Back to conversation
                </button>
                <h3>Let’s find time to talk.</h3>
                <p>
                  Request a preferred time in Lagos (WAT). The firm will confirm
                  availability.
                </p>
                <BookingForm compact />
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
                      {m.source && (
                        <a className="chat-source" href={m.source}>
                          Read more on our website ↗
                        </a>
                      )}
                    </div>
                  ))}
                  {typing && (
                    <div className="chat-typing" role="status">
                      <span aria-hidden="true">
                        <i />
                        <i />
                        <i />
                      </span>{" "}
                      Counsel AI is typing…
                    </div>
                  )}
                  {human && (
                    <div className="human-handoff">
                      <strong>Talk to our team</strong>
                      <p>
                        Email info@kkubaniandco.com to speak with a member of the team.
                        This opens your email app. The team will reply by email when available.
                      </p>
                      <a href="mailto:info@kkubaniandco.com?subject=Website%20enquiry%20%E2%80%94%20speak%20with%20the%20team">
                        Email a team member ↗
                      </a>
                    </div>
                  )}
                  <div ref={end} />
                </div>
                <div className="chat-suggestions">
                  {["Our services", "Contact the firm"].map((q) => (
                    <button key={q} disabled={typing} onClick={() => send(q)}>
                      {q}
                    </button>
                  ))}
                  <button disabled={typing} onClick={() => setBooking(true)}>
                    <CalendarDays size={13} />{" "}
                    Request a meeting
                  </button>
                  <button
                    disabled={typing}
                    onClick={() => send("Talk to a human")}
                  >
                    Talk to a human
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
                  <button
                    aria-label="Send message"
                    disabled={!input.trim() || typing}
                  >
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
        <span>{open ? "Close" : "Chat with Counsel AI"}</span>
      </button>
    </div>
  );
}
