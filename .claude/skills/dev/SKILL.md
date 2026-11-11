---
name: dev
description: 全栈开发流程与规范。当用户要写代码、搭前端/后端、初始化项目、选技术栈、测试或部署上线时使用。
---

# Dev（全栈开发流程）

目标：从一个想法，清晰、可维护地开发到上线。用中文、少废话、直接干。

## 默认技术栈（待确认，先按这个假设）

适合「单人快速上线」的现代默认栈：

| 层 | 默认选择 | 备选 | 说明 |
|----|---------|------|------|
| 前端 | Next.js（React + TypeScript） | Vite + React | SEO 友好，可免费部署 Vercel |
| 后端 | Next.js API Routes + Supabase | Node + Express | 小项目可只靠 Supabase |
| 数据库 | Supabase（PostgreSQL） | SQLite + Prisma | 自带鉴权，免费额度 |
| 鉴权 | Supabase Auth | Auth.js / Clerk | 最省事 |
| 部署 | Vercel（前端）+ Supabase（后端） | Railway / Render / Fly.io | 免费起步 |
| 移动端（如要 App） | Expo（React Native） | — | 同一套 React 生态，跨 iOS/Android |

> ⚠️ 这是「待确认」默认值。用户给出具体想法后，**必须**用外网调研（WebSearch / WebFetch）核对：框架是否仍是最佳、竞品做法、上线渠道（国内/海外、上架规则、备案）。选型结果固化到项目 README 或 `ideas/INDEX.md`。

## 开发阶段
1. **选型确认**：结合想法 + 外网调研，确定栈，写进 `docs/` 或 README。
2. **初始化**：`git init` + 脚手架 + 依赖，跑通最小可运行版本。
3. **迭代开发**：功能 → 联调 → 测试，小步提交。
4. **测试**：核心流程要有测试，至少手动冒烟。
5. **部署**：接 CI/CD，环境变量、域名、HTTPS、监控。

## 规范
- 一个任务一个提交，commit message 清晰。
- 环境变量不放代码里，用 `.env`（记得 `.gitignore`）。
- 先跑通「最小可用版本」，再堆功能。
- 用 `TaskCreate` 拆解多步任务，让用户看到进度。

## 常用命令
（按选定栈，实际使用时补充具体命令）
