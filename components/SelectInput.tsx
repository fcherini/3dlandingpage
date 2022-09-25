export default function SelectInput() {
  return (
    <div className="form-control w-full max-w-xs">
      <label className="label px-0 py-1">
        <span className="label-text text-14 text-neutral">Cidade</span>
      </label>
      <select className="select select-bordered select-primary select-sm">
        <option disabled selected className="font-normal text-primary">
          <span>Digite ou selecione a cidade</span>
        </option>
        <option>Curitiba, PR</option>
        <option>Campinas, SP</option>
      </select>
    </div>
  );
}
