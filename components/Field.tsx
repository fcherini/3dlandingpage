interface ButtonTextProps {
  label: string;
  placeholder: string;
}

export default function FieldInput(props: ButtonTextProps) {
  return (
    <div>
      <p className={`font-poppins font-600 text-16 ${props.className}`}>
        {props.text}
      </p>
    </div>
  );
}
