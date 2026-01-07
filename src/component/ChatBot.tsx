"use client";
import React, { useState } from "react";

type Message = {
  id: number;
  text: string;
  sender: "user" | "bot";
};

const ChatBot = () => {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, text: "Hi 👋 How can I help you?", sender: "bot" },
  ]);

  const sendMessage = () => {
    if (!input.trim()) return;

    setMessages((prev) => [
      ...prev,
      { id: Date.now(), text: input, sender: "user" },
      {
        id: Date.now() + 1,
        text: "Thanks! I’ll get back to you shortly 😊",
        sender: "bot",
      },
    ]);

    setInput("");
  };

  return (
    <>
      {/* CHAT WINDOW */}
      {open && (
        <div style={styles.chatWindow}>
          <div style={styles.header}>
            <span>Support Bot</span>
            <button onClick={() => setOpen(false)} style={styles.closeBtn}>
              ✕
            </button>
          </div>

          <div style={styles.messages}>
            {messages.map((msg) => (
              <div
                key={msg.id}
                style={{
                  ...styles.message,
                  alignSelf:
                    msg.sender === "user" ? "flex-end" : "flex-start",
                  backgroundColor:
                    msg.sender === "user" ? "#39b54a" : "#f1f1f1",
                  color: msg.sender === "user" ? "#fff" : "#000",
                }}
              >
                {msg.text}
              </div>
            ))}
          </div>

          <div style={styles.inputBox}>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a message..."
              style={styles.input}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            />
            <button onClick={sendMessage} style={styles.sendBtn}>
              Send
            </button>
          </div>
        </div>
      )}

      {/* FLOATING BUTTON */}
      <button onClick={() => setOpen(true)} style={styles.fab}>
        💬
      </button>
    </>
  );
};
const styles: Record<string, React.CSSProperties> = {
  fab: {
    position: "fixed",
    bottom: 20,
    right: 20,
    width: 56,
    height: 56,
    borderRadius: "50%",
    backgroundColor: "#39b54a",
    color: "#fff",
    fontSize: 24,
    border: "none",
    cursor: "pointer",
    boxShadow: "0 6px 14px rgba(0,0,0,0.3)",
    zIndex: 1000,
  },
  chatWindow: {
    position: "fixed",
    bottom: 90,
    right: 20,
    width: 320,
    height: 420,
    backgroundColor: "#fff",
    borderRadius: 10,
    boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
    display: "flex",
    flexDirection: "column",
    zIndex: 1000,
  },
  header: {
    padding: "12px 16px",
    backgroundColor: "#39b54a",
    color: "#fff",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  closeBtn: {
    background: "transparent",
    border: "none",
    color: "#fff",
    fontSize: 18,
    cursor: "pointer",
  },
  messages: {
    flex: 1,
    padding: 12,
    overflowY: "auto",
    display: "flex",
    flexDirection: "column",
    gap: 8,
  },
  message: {
    padding: "8px 12px",
    borderRadius: 6,
    maxWidth: "80%",
    fontSize: 14,
  },
  inputBox: {
    display: "flex",
    padding: 10,
    borderTop: "1px solid #e5e7eb",
  },
  input: {
    flex: 1,
    padding: 8,
    borderRadius: 6,
    border: "1px solid #d1d5db",
  },
  sendBtn: {
    marginLeft: 8,
    padding: "8px 12px",
    backgroundColor: "#39b54a",
    color: "#fff",
    border: "none",
    borderRadius: 6,
    cursor: "pointer",
  },
};


export default ChatBot;
