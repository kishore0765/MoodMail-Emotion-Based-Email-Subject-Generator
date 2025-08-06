import { useState } from "react";
import Moodinput from "@/components/ui/Moodinput";
import Moodoutput from "@/components/ui/Moodoutput";

const moodsMap: Record<string, { subject: string; footer: string }> = {
  happy:    { subject: "Feeling Great Today!",    footer: "Stay Awesome!" },
  sad:      { subject: "Just Another Tough Day", footer: "Sending Hugs…" },
  angry:    { subject: "Need to Cool Off…",       footer: "Deep Breaths" },
  excited:  { subject: "So Excited Right Now!",   footer: "Let's Go!" },
  anxious:  { subject: "A Bit Anxious Today",     footer: "Breathe In, Breathe Out" },
};

export default function Home() {
  const [mood, setMood] = useState("");
  const [subject, setSubject] = useState("");
  const [footer, setFooter] = useState("");
  const [generated, setGenerated] = useState(false);

  const handleGenerate = () => {
    const key = mood.trim().toLowerCase();
    const entry = Object.entries(moodsMap).find(([name]) => key.includes(name))?.[1];
    const today = new Date().toLocaleDateString("en-GB");

    if (entry) {
      setSubject(`[${today}] - ${entry.subject}`);
      setFooter(entry.footer);
    } else {
      setSubject(`[${today}] Mood Update`);
      setFooter("Catch you later!");
    }
    setGenerated(true);
  };

  const handleReset = () => {
    setMood("");
    setSubject("");
    setFooter("");
    setGenerated(false);
  };

  return (
    <main className="max-w-xl mx-auto mt-30 p-4 bg-white rounded shadow-md">
        <h1 className="text-2xl font-bold mb-6">MoodMail Generator 📧</h1>
      {!generated ? (
        <Moodinput
          mood={mood}
          onMoodChange={setMood}
          onGenerate={handleGenerate}
        />
      ) : (
        <Moodoutput subject={subject} footer={footer} onReset={handleReset} />
      )}
    </main>
  );
}

