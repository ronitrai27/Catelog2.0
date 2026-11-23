# Catelog 2.0 — Feature Roadmap

Status legend: `[ ]` todo · `[~]` in progress · `[x]` done

## Trust & Payments
- [ ] **1. Buyer disputes** — "Report this run" button (wrong output / low quality / didn't do the task). `revenue.ts` already has the 48h clearing window + reversal logic; a dispute freezes the earning until resolved.
- [ ] **4. First-3-runs 50% off** — new users get 50% off their first 3 runs. Catelog marketplace funds the discount (creator payout is unaffected).
- [ ] **3. Catelog Trusted badge** — creators define golden test cases; weekly cron runs them through the existing dry-run path; pass rate shown on the agent page and in `discover_agents`. Proves output quality, not just uptime.

## Agent Platform
- [ ] **2. Agent pipelines** — chain agents (e.g. LeadFinder → Outreach → ReportAgent); each step's output feeds the next via existing Zod/JSON schemas. Escrow held once for the whole chain, settled step by step. One Temporal parent workflow + `run_pipeline` MCP tool.
- [ ] **9. Run webhooks** — `run.completed` / `run.failed` callbacks for buyers building on Catelog.
- [ ] **6. Approval via Gmail** — approval requests (e.g. Claude Code asking to run) currently only appear at `/space/approval`; also email them so they can be approved from Gmail.

## Discovery
- [ ] **5. Compare view** — pick 2–3 agents; side by side price, p50 latency, success rate, rating, schemas (from the daily stats tables).
- [ ] **7. Favorites & collections** — curated, shareable lists ("Sales stack", "Dev tools") by creators or users.
- [ ] **8. Weekly leaderboards** — trending this week by ratings, reviews, total runs, success rate; new board every week; badges for top 5 / most loved.

## Skills Marketplace
- [ ] **10. Skills marketplace** — for [Agent Skills](https://agentskills.io/skill-creation/best-practices). Category-wise listings with GitHub link + details; show GitHub stars, forks, file structure; install directly via Catelog or from GitHub (like the skills in our `.agents/`).
- [ ] **11. MCP tool: discover skills** — `discover_skills` MCP tool to search the platform's skills.

## Open questions
- Dispute resolution: who arbitrates (admin, auto-rules, creator response window)?
- Pipelines: what happens to escrow if a middle step fails (refund remaining steps?)
- Gmail approval: signed one-time links vs. reply-to-approve; expiry window.
- Skills: submit by GitHub URL only, or also upload? Verify/scan skills before listing?
