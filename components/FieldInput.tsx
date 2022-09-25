import React from 'react';

interface FieldInputProps {
  label: string;
  placeholder: string;
}

export default function FieldInput(props: FieldInputProps) {
  return (
    <div className="form-control w-full">
      <label className="label p-0 pb-0.5">
        <span className="label-text text-14">{props.label}</span>
      </label>
      <input
        type="text"
        placeholder={props.placeholder}
        className="input input-bordered input-primary input-sm w-full"
      />
    </div>
  );
}
