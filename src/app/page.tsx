export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-rose-50 to-white text-gray-900">
      <div className="mx-auto max-w-3xl px-6 py-24 text-center">
        <h1 className="text-5xl font-bold tracking-tight">共鸣</h1>
        <p className="mt-4 text-xl text-gray-600">认识自己 · 理解关系 · 遇见合适的人</p>
        <p className="mt-8 text-gray-500">
          不只是帮你找对象，而是帮你在认识他人的过程中，看懂自己。
        </p>
        <div className="mt-10 flex justify-center gap-4">
          <a
            href="#cases"
            className="rounded-full bg-rose-600 px-6 py-3 text-white transition hover:bg-rose-700"
          >
            看看这世上有哪些人
          </a>
          <a
            href="#quiz"
            className="rounded-full border border-gray-300 px-6 py-3 transition hover:bg-gray-100"
          >
            测测我是什么类型
          </a>
        </div>
      </div>
    </main>
  );
}
