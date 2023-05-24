export default function Checkbox({ className, text, ...rest }) {
  return (
    <label className={className} htmlFor="option1">
      <input type="checkbox" id="option1" />
      <span>{text}</span>
    </label>
  );
}
