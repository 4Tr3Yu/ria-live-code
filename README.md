# Currency Exchange Dashboard - Live Coding Session

## Overview

Welcome! In this session, you'll work on a partially implemented Currency Exchange Dashboard. Some features are already built, while others need your implementation.

**Duration:** 40-50 minutes

---

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Project Structure

```
├── app/
│   ├── layout.tsx       # Root layout
│   ├── page.tsx         # Main page
│   └── globals.css      
├── components/
│   ├── CurrencyConverter.tsx  
│   ├── RatesOverview.tsx      
│   └── RateCard.tsx         
├── lib/
│   ├── api.ts          
│   └── types.ts       
```

---

## What's Already Done

- ✅ Project setup with Next.js 14 + TypeScript
- ✅ All UI components with basic styling
- ✅ Exchange Rates Overview panel
- ✅ Exmaple TypeScript types
- ✅ Some API functions in `lib/api.ts`

---

## Your Tasks

Complete these in order of priority:

### Task 1: Fix the Bugs 🐛 (No AI)

The Exchange Rates Overview panel has a functional bug—something doesn't work as expected when interacting with it. 

There are also some styling issues in the application. Find and fix them. The reference styling should be.

![alt text](<Screenshot 2025-12-18 at 12.47.18 PM.png>)

---

### Task 2: Implement the Currency Converter ⚙️ (No AI)

The converter UI exists but doesn't work. Implement the full functionality:

- User can enter an amount and select "from" / "to" currencies
- Display the converted amount and exchange rate
- Swap button switches the two currencies
- Handle loading and error states appropriately

**API Documentation:** https://www.frankfurter.app/docs/

---

### Task 3: Innovation Feature ⭐ (You can use AI here)

Add one feature that would make this tool more useful. Ideas:

- Historical rate comparison (show yesterday's rate)
- Favorite/pinned currencies
- Rate change indicator (up/down arrows)
- Multi-currency conversion
- Copy result to clipboard
- Or your own idea!

---

### Bonus: Additional Styling Improvements 🎨

If time permits, further improve the UI/UX beyond the bug fixes:


---

## API Documentation

**Frankfurter API:** https://www.frankfurter.app/docs/

---

## Tips

- **Think aloud** — We want to understand your thought process
- **Ask questions** — If something is unclear, just ask
- **Use resources** — Feel free to Google or check docs
- **Prioritize** — Working code > perfect code
- **Don't get stuck** — Move on if blocked, come back later

---

## Evaluation Focus

| Criteria | What We're Looking For |
|----------|------------------------|
| **Problem-solving** | How you approach the bug and new features |
| **Code quality** | Clean, readable, well-organized code |
| **Communication** | Explaining your thought process |
| **Prioritization** | Focus on core functionality first |

---

Good luck! 🚀