export type MemoComponentProps = { title: string; content: string };

export const MemoComponent = (props: MemoComponentProps) => {
  const { title, content } = props;

  return (
    <div
      style={{
        width: 400,
        backgroundColor: "#eeeeee",
        padding: 20,
        marginBottom: 20,
        border: "1px solid",
        borderRadius: 8,
      }}
    >
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
};