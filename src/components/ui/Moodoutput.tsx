import { Button } from "./button";
import { Input } from "./input";
import { Textarea } from "./textarea";

type Props = {
  subject: string;
  footer: string;
  onReset: () => void;
};

const Moodoutput = ({ subject, footer, onReset }: Props) => {
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(
        `Subject: ${subject}\n\n${footer}`
      );
      alert("Copied to clipboard!");
    } catch {
      alert("Failed to copy.");
    }
  };

  return (
    <div className="space-y-4">
      <div>
        <label className="block font-medium">Subject:</label>
        <Input value={subject} readOnly />
      </div>

      <div>
        <label className="block font-medium">Footer Signature:</label>
        <Textarea value={footer} readOnly />
      </div>

      <div className="flex gap-2">
        <Button className="flex-1 bg-black text-white" onClick={handleCopy}>
          Copy to Clipboard
        </Button>
        <Button
          className="flex-1 bg-white text-black shadow-md font-bold"
          variant="destructive"
          onClick={onReset}
        >
          Reset
        </Button>
      </div>
    </div>
  );
};

export default Moodoutput;