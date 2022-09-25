import React from 'react';

interface FieldInputProps {
  label: string;
  placeholder: string;
}

export default function FieldInput(props: FieldInputProps) {
  return (
    <div className="form-control w-full max-w-xs">
      <label className="label p-0">
        <span className="label-text text-14 text-neutral">{props.label}</span>
      </label>
      <input
        type="text"
        placeholder={props.placeholder}
        className="input input-bordered input-primary input-sm w-full max-w-xs"
      />
    </div>
  );
}
