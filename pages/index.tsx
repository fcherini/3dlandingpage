import Animation from '../components/Animation';
import Form from '../components/Form';
import CtrlLogo from '../components/CtrlLogo';

export default function Home() {
  return (
    <div className="w-full flex flex-col justify-center align-center justify-items-center content-center items-center self-center place-content-center justify-self-center h-vh gap-6">
      <div className="flex flex-col md: flex-row items-center w-fit gap-2">
        <CtrlLogo />
        <p className="font-poppins w-fit font-600 text-28 text-primary">
          Ganhe uma Aula Experimental Grátis!
        </p>
        <p className="text-center w-5/6 leading-tight">
          Cadastre-se e ganhe um cupom para fazer uma aula experimental gratuita
          na Ctrl+Play
        </p>
      </div>
      <div className="flex  items-center gap-4 align-center justify-center ">
        <Form />
        <div className="relative">
          <div className="badge badge-primary badge-lg absolute top-36 right-0">
            + creatividade
          </div>
          <div className="badge badge-accent badge-lg absolute left-32 bottom-1">
            + raciocínio lógico
          </div>
          <div className="badge badge-secondary badge-lg absolute -left-2 top-80">
            + inglês técnico
          </div>
          <Animation />
        </div>
      </div>
    </div>
  );
}
