// Home.jsx
// import { Link } from 'react-router-dom';
import Alunos from '../../assets/AlunosIN.png';
import ButtonInfinity from '../../componentes/Buttons/ButtonInfinity/ButtonInfinity';
import ButtonTeam from '../../componentes/Buttons/ButtonTeam/ButtonTeam';

function Home() {
  return (
    <main className="flex flex-col">
      <div className="relative w-full aspect-w-12 aspect-h-9 bg-gradient-to-b from-transparent to-red-600">
        <img className="absolute w-full h-full object-cover" src={Alunos} alt="Equipe da Infinity" />
      </div>
      <div className="mensagem w-700 mx-auto px-1 flex flex-col justify-center items-center">
        <h1 className="equipe text-white mb-3 mt-16 text-9xl font-bold">CONHEÇA<span className="text-red-600"> NOSSA</span> EQUIPE</h1>
        <p className="texto text-white text-lg mb-8">Nossa equipe de professores e monitores é apaixonada por orientar os alunos em seu desenvolvimento criativo.</p>
        <p className="texto text-white text-lg mb-8">
          Combinando experiência e dedicação, estamos aqui para inspirar, apoiar e capacitar cada aluno em sua jornada de aprendizagem.
        </p>
        <div className="caixaBnt flex flex-wrap justify-evenly">
          <ButtonTeam texto="Professor" />
          <ButtonTeam texto="Monitor" />
          <ButtonInfinity texto="Infinity App" />
          <ButtonInfinity texto="Portal do Aluno" />
        </div>
      </div>
      <section className="retanguloLaranja absolute top-0 right-0 w-96 h-96 bg-gradient-to-b from-transparent to-red-600 z-10"></section>
    </main>
  );
}

export default Home;
