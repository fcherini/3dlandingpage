export default function FormButtonGroup() {
  return (
    <div className="flex w-full flex-col">
      <label className="label p-0 pb-0.5">
        <span className="label-text text-14">Idade do aluno</span>
      </label>
      <div className="flex gap-2 w-full">
        <button className="text-primary-content p-1 w-full btn-primary font-poppins font-600 text-14 hover:bg-primary-400">
          6 ou menos
        </button>
        <button className="text-primary-content p-1 w-full btn-primary font-poppins font-600 text-14 hover:bg-primary-400">
          7 a 10 anos
        </button>
        <button className="text-primary-content p-1 w-full btn-primary font-poppins font-600 text-14 hover:bg-primary-400">
          11 a 14 anos
        </button>
        <button className="text-primary-content p-1 w-full btn-primary font-poppins font-600 text-14 hover:bg-primary-400">
          14 a 17 anos
        </button>
      </div>
    </div>
  );
}
