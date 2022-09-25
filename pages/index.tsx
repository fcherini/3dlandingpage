import Animation from '../components/Animation';
import Form from '../components/Form';
import CtrlLogo from '../components/CtrlLogo';

export default function Home() {
  return (
    <div className="w-vw max-w-full flex flex-col m-6 justify-center align-center justify-items-center content-center items-center self-center place-content-center justify-self-center min-h-screen gap-6">
      <div className="flex flex-col items-center w-fit">
        <CtrlLogo />
        <p className="font-poppins w-fit font-600 text-center leading-tight text-28 pt-2 text-primary">
          Ganhe uma Aula Experimental Grátis!
        </p>
        <p className="text-center w-5/6 leading-tight">
          Cadastre-se e ganhe um cupom para fazer uma aula experimental gratuita
          na Ctrl+Play
        </p>
      </div>
      <div className="flex flex-col-reverse md:flex-row items-center gap-4 align-center justify-center ">
        <Form />
        <div className="relative">
          <div className="badge badge-primary badge-lg absolute top-32 right-0">
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
