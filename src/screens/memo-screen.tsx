import { useState } from "react";
import type { ChangeEvent } from "react";
import InputFieldComponent from "../components/input-field-component";
import { MemoComponent } from "../components/memo-component";

export const MemoScreen = () => {
  const [content, setContent] = useState("");
  const [warningMessage, setWarningMessage] = useState("");

  const memos = [
    { title: "오늘의 일기1", content: "js 배우기" },
    { title: "오늘의 일기2", content: "ts 배우기" },
  ];

  const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setContent(event.target.value);

    if (event.target.value.length > 30) {
      setWarningMessage("30자를 초과했습니다.");
    } else {
      setWarningMessage("");
    }
  };

  return (
    <div>
      <h1>메모 화면</h1>
      <InputFieldComponent
        id="memo-input"
        label="메모 내용"
        value={content}
        onChange={onInputChange}
        placeholder="메모를 입력해 주세요"
        errorMessage={warningMessage || undefined}
      />
      {memos.map((memo) => (
        <MemoComponent
          key={memo.title}
          title={memo.title}
          content={memo.content}
        />
      ))}
    </div>
  );
};
