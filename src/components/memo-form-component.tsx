import { useState } from "react";
import type { ChangeEvent } from "react";
import InputFieldComponent from "./input-field-component";

const MemoFormComponent = () => {
  const [content, setContent] = useState("");
  const [warningMessage, setWarningMessage] = useState("");

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
      <InputFieldComponent
        id="memo-input"
        label="메모 내용"
        value={content}
        onChange={onInputChange}
        placeholder="메모를 입력해 주세요"
        errorMessage={warningMessage || undefined}
      />
    </div>
  );
};

export default MemoFormComponent;
