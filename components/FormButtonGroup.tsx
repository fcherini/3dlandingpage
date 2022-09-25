export default function FormButtonGroup() {
  return (
    <div className="flex w-full flex-col">
      <label className="label p-0 pb-0.5">
        <span className="label-text text-14 text-neutral">Idade do aluno</span>
      </label>
      <div className="flex gap-2 w-full">
        <button className="text-white p-1 w-full bg-primary-600 font-poppins font-600 text-14 rounded-md hover:bg-primary-400">
          6 ou menos
        </button>
        <button className="text-white p-1 w-full bg-primary-600 font-poppins font-600 text-14 rounded-md hover:bg-primary-400">
          7 a 10 anos
        </button>
        <button className="text-white p-1 w-full bg-primary-600 font-poppins font-600 text-14 rounded-md hover:bg-primary-400">
          11 a 14 anos
        </button>
        <button className="text-white p-1 w-full bg-primary-600 font-poppins font-600 text-14 rounded-md hover:bg-primary-400">
          14 a 17 anos
        </button>
      </div>
    </div>
  );
}
