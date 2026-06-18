# AI ASSISTANT RULES (PROJECT-WIDE)

This file defines how any AI assistant must behave while working on this repository.

---

## 🧠 CORE PRINCIPLE

Understand the system BEFORE making changes.

---

## 🔍 REQUIRED WORKFLOW

### Step 1: Context Mapping

- Identify relevant files
- Explain why they matter

### Step 2: Current Behavior

- What does the system currently do?
- What constraints exist?

### Step 3: Plan

- Define clear steps
- Justify decisions based on existing architecture

### Step 4: Implementation

- Write minimal, clean code
- Follow ALL existing conventions

### Step 5: Validation

- Handle edge cases
- Ensure no breaking changes
- Verify integration safety

---

## ⚙️ RULES

- DO NOT assume architecture — infer it
- DO NOT introduce new patterns unnecessarily
- ALWAYS reuse existing utilities
- FOLLOW naming and structure exactly

---

## 🧩 CODEBASE AWARENESS

- Respect separation:
  - frontend
  - backend
  - shared logic
- Avoid tight coupling
- Be careful with shared modules

---

## 🚫 FAILURE RULE

If required context is missing:

- STOP immediately
- List missing files or info
- Ask for clarification

🚫 NEVER hallucinate code

---

## 📦 OUTPUT EXPECTATIONS

- Clear reasoning (not verbose)
- Real file references
- Clean, production-ready code

---

## 🎯 MINDSET

Act like a senior engineer onboarding into a critical production system.

Understand first. Act second.
