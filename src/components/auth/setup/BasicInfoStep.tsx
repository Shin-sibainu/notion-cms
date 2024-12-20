import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import { useState } from "react";

interface BasicInfoStepProps {
  onUpdateData: (data: { url: string }) => void;
}

export function BasicInfoStep({ onUpdateData }: BasicInfoStepProps) {
  const [url, setUrl] = useState("");
  const [touched, setTouched] = useState(false);
  const isValid = url.length > 0;
  const showError = touched && !isValid;

  const handleUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setUrl(value);
    onUpdateData({ url: value });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-8"
    >
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">URLの設定</h1>
        <p className="text-lg text-muted-foreground">
          ブログのURLを設定します。あとから変更することもできます。
        </p>
      </div>
      <div className="space-y-6">
        <div>
          <label className="text-base font-medium mb-2 block">
            ブログのURL
          </label>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3">
            <div className="flex items-center gap-1 text-lg text-muted-foreground w-full sm:w-auto">
              <span>https://</span>
              <Input
                placeholder="my-blog"
                className={`h-12 text-lg max-w-[200px] ${
                  showError ? "border-destructive" : ""
                }`}
                value={url}
                onChange={handleUrlChange}
                onBlur={() => setTouched(true)}
              />
            </div>
            <span className="text-lg text-muted-foreground">.notioncms.app</span>
          </div>
          <div className="mt-2 space-y-1">
            <p className="text-sm text-muted-foreground">
              半角英数字とハイフン(-) が使用できます
            </p>
            <p className="text-sm text-muted-foreground">
              例: my-blog, tech-notes, portfolio
            </p>
          </div>
          {showError && (
            <p className="text-sm text-destructive mt-2">
              URLを入力してください
            </p>
          )}
        </div>
      </div>
    </motion.div>
  );
}
