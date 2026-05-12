const gradients = {
  "blue-purple":
    "from-[#2B7EC1] via-[#6B3FA0] to-[#00B4C8]",
  "blue-teal":
    "from-[#2B7EC1] to-[#00B4C8]",
  "purple-teal":
    "from-[#6B3FA0] to-[#00B4C8]",
  "teal-blue":
    "from-[#00B4C8] to-[#2B7EC1]",
  white:
    "from-white to-white/60",
};

export default function GradientText({
  children,
  gradient = "blue-purple",
  className = "",
  as: Tag = "span",
}) {
  return (
    <Tag
      className={`
        bg-gradient-to-r ${gradients[gradient]}
        bg-clip-text text-transparent
        ${className}
      `}
    >
      {children}
    </Tag>
  );
}