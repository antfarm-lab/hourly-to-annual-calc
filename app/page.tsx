"use client";

import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [hourlyWage, setHourlyWage] = useState("");
  const [hoursPerDay, setHoursPerDay] = useState("");
  const [workDaysPerWeek, setWorkDaysPerWeek] = useState("");

  const hourlyWageNum = Number(hourlyWage) || 0;
  const hoursPerDayNum = Number(hoursPerDay) || 0;
  const workDaysPerWeekNum = Number(workDaysPerWeek) || 0;

  const weeklyIncome = hourlyWageNum * hoursPerDayNum * workDaysPerWeekNum;
  const annualIncome = weeklyIncome * 52;

  return (
    <main className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-xl mx-auto bg-white p-6 rounded-xl shadow">
        <h1 className="text-2xl font-bold mb-3 text-center">
          時給から年収計算ツール
        </h1>

        <p className="text-gray-700 mb-6 text-center">
          時給・1日の労働時間・週の勤務日数から、年収の目安を計算できます。
        </p>

        <div className="space-y-4">
          <div>
            <label>時給（円）</label>
            <input
              type="number"
              value={hourlyWage}
              onChange={(e) => setHourlyWage(e.target.value)}
              className="w-full border p-2 rounded mt-1"
              placeholder="例：1200"
            />
          </div>

          <div>
            <label>1日の労働時間（時間）</label>
            <input
              type="number"
              value={hoursPerDay}
              onChange={(e) => setHoursPerDay(e.target.value)}
              className="w-full border p-2 rounded mt-1"
              placeholder="例：8"
            />
          </div>

          <div>
            <label>週の勤務日数（日）</label>
            <input
              type="number"
              value={workDaysPerWeek}
              onChange={(e) => setWorkDaysPerWeek(e.target.value)}
              className="w-full border p-2 rounded mt-1"
              placeholder="例：5"
            />
          </div>
        </div>

        <div className="mt-8 space-y-2 text-lg border-t pt-6">
          <p>週収目安: ¥{weeklyIncome.toLocaleString()}</p>

          <p className="font-bold text-green-600 text-xl">
            年収目安: ¥{annualIncome.toLocaleString()}
          </p>
        </div>
      </div>
<section className="mt-10 max-w-3xl mx-auto bg-white p-6 rounded-xl shadow">
        <h2 className="text-xl font-bold mb-3">時給から年収を計算する方法</h2>

        <p className="text-gray-700 leading-relaxed">
          時給から年収を計算する場合は、時給に1日の労働時間と週の勤務日数をかけて週収を出し、
          その金額を52週分として計算します。
          アルバイト、パート、派遣勤務などで年間収入の目安を確認したい場合に便利です。
          実際の年収は祝日、休暇、残業、賞与、税金などによって変わるため、目安としてご利用ください。
        </p>
      </section>
      <section className="mt-10 max-w-3xl mx-auto bg-white p-6 rounded-xl shadow">
       <h2 className="text-xl font-bold mb-3">
  他の便利ツール
</h2>

<ul className="list-disc pl-6 space-y-2 text-blue-600 underline">
  <li>
    <a href="https://wage-calc-tawny.vercel.app/">
      時給計算ツール
    </a>
  </li>
  <li>
    <a href="https://overtime-calc.vercel.app/">
      残業代計算ツール
    </a>
  </li>
  <li>
    <a href="https://take-home-pay-calc.vercel.app/">
      手取り計算ツール
    </a>
  </li>
  <li>
    <a href="https://annual-income-calc.vercel.app/">
      年収計算ツール
    </a>
  </li>
  <li>
    <a href="https://bonus-calc-six.vercel.app/">
      ボーナス手取り計算ツール
    </a>
  </li>
  <li>
    <a href="https://monthly-salary-calc.vercel.app/">
      月給計算ツール
    </a>
  </li>
  <li>
    <a href="https://daily-wage-calc.vercel.app/">
      日給計算ツール
    </a>
  </li>
  <li>
    <a href="https://tax-calc-murex.vercel.app/">
      所得税計算ツール
    </a>
  </li>
  <li>
    <a href="https://working-days-calc.vercel.app/">
      労働日数計算ツール
    </a>
  </li>
</ul>
      </section>

      

      <section className="mt-10 max-w-3xl mx-auto text-center">
        <h2 className="text-xl font-bold mb-3">このサイトについて</h2>

        <p className="text-gray-700 leading-relaxed">
          ANT FARMでは、日常生活や仕事に役立つ無料Webツールを公開しています。
          この時給から年収計算ツールでは、時給・労働時間・勤務日数から年収の目安を簡単に確認できます。
          インストール不要でスマホからも利用できます。
        </p>
      </section>

      <footer className="mt-10 pt-6 text-sm text-gray-500 text-center">
        <p>© ANT FARM</p>
        <Link href="/privacy-policy" className="underline">
          プライバシーポリシー
        </Link>
      </footer>
    </main>
  );
}