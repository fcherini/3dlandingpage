export default function FormButtonGroup() {
  return (
    <div className="flex w-full flex-col">
      <label className="label p-0 pb-0.5">
        <span className="label-text text-14">Idade do aluno</span>
      </label>
      <div className="grid-cols-1 grid md:grid-cols-2 lg:grid-cols-4 gap-2 w-full">
        <button className="text-primary-content p-1 grow btn-sm btn btn-primary font-poppins font-600 text-14">
          6 ou menos
        </button>
        <button className="text-primary-content p-1 grow btn-sm btn btn-primary font-poppins font-600 text-14">
          7 a 10 anos
        </button>
        <button className="text-primary-content p-1 grow btn-sm btn btn-primary font-poppins font-600 text-14">
          11 a 14 anos
        </button>
        <button className="text-primary-content p-1 grow btn-sm btn btn-primary font-poppins font-600 text-14">
          14 a 17 anos
        </button>
      </div>
    </div>
  );
}
