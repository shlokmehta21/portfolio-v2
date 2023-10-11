const Button = ({
  text,
  secondaryText,
  color = "#070707",
}: {
  text: string;
  secondaryText?: string;
  color?: string;
}) => {
  return (
    <div className="flex items-center gap-2 px-3 py-1 text-sm font-medium dark:text-neutral-900 text-neutral-50 rounded-lg max-w-fit dark:bg-neutral-50 bg-black/[0.7]">
      <span>{text}</span>
      {secondaryText ? (
        <span className="font-light text-neutral-900">{secondaryText}</span>
      ) : (
        ""
      )}
    </div>
  );
};

export default Button;
