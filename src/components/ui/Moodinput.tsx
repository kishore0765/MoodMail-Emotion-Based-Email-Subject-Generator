import { Input } from "./input";
import { Button } from "./button";

type Props = {
  mood: string;
  onMoodChange: (val: string) => void;
  onGenerate: () => void;
};

const Moodinput = ({ mood, onMoodChange, onGenerate }: Props) => {
  return (
    <div className="space-y-4">
      <div>
        <label className="block font-medium">Enter your Mood:</label>
        <Input
          placeholder="e.g., happy, sad, excited..."
          value={mood}
          onChange={(e) => onMoodChange(e.target.value)}
        />
      </div>
      <Button className="w-full bg-black text-white" onClick={onGenerate}>
        Generate MoodMail
      </Button>
    </div>
  );
};

export default Moodinput;
