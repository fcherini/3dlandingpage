import { ReactFragment } from 'react';
import FieldInput from './FieldInput';
import FormButtonGroup from './FormButtonGroup';
import SelectInput from './SelectInput';

export default function Form() {
  return (
    <div className="flex flex-col gap-3 items-center w-[432px]">
      <FieldInput
        label="Nome do responsável"
        placeholder="Digite o nome do responsável"
      />
      <FieldInput
        label="E-mail do responsável"
        placeholder="Digite o e-mail do responsável"
      />
      <FieldInput
        label="Celular do responsável"
        placeholder="Digite o celular do responsável"
      />
      <FieldInput label="Nome do aluno" placeholder="Digite o nome do aluno" />
      <FormButtonGroup />
      <FieldInput label="Cidade" placeholder="Digite ou selecione a cidade" />
      <div className="flex  flex-col gap-1">
        <p className="text-neutral text-16">
          Possui acesso a um computador ou notebook com microfone e webcam?
        </p>
      </div>
      <div className="flex gap-8 align-start">
        <div className="flex gap-3 items-center">
          <input
            type="radio"
            name="radio-2"
            className="radio radio-primary w-4 h-4"
          />
          <p className="text-neutral">Sim</p>
        </div>
        <div className="flex gap-3 items-center">
          <input
            type="radio"
            name="radio-2"
            className="radio radio-primary w-4 h-4"
          />
          <p className="text-neutral">Não</p>
        </div>
      </div>

      <button className="btn btn-sm text-white btn-primary font-poppins text-16 rounded-md w-fit">
        Continuar
      </button>
    </div>
  );
}
