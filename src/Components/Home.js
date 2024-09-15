import { useState } from "react"
import Nome from "./DefinirNome"
import Styles from './Home.module.css'
import som from './Sounds/ataque.mp3'
import erro from './Sounds/erro.mp3'
import concluido from './Sounds/concluido.mp3'

function Home() {

    const [jogo, setJogo] = useState()
    const [NomeVisible, setNomeVisible] = useState(true)
    const [Name, setNome] = useState('Jogador')
    const [MostrarName, setMostrarNome] = useState('Jogador')

    const [Placar, setPlacar] = useState(0)
    const [PlacarPc, setPlacarPc] = useState(0)
    const [Jogada, setJogada] = useState('❌')
    const [JogadaPc, setJogadaPc] = useState('❌')

    function tocar(a) {
        switch (a) {
            case 1:
                new Audio(som).play()
                break
            case 2:
                new Audio(erro).play()
                break
            case 3:
                new Audio(concluido).play()
                break
            default:
                console.log('')
                break
        }
    }

    function JoKenPo(a) {
        if (MostrarName === 'Jogador' || Name === '' || Name === ' ') {
            tocar(2)
            setTimeout(() => {
                alert('Coloque seu nome')
            }, 250);

            return
        }
        tocar(1)
        const computador = Math.floor(Math.random() * 3 + 1)
        if (a === 1) {
            setJogada('👊')
        }
        if (a === 2) {
            setJogada('✌️')
        }
        if (a === 3) {
            setJogada('🖐️')
        }
        if (computador === 1) {
            setJogadaPc('👊')
        }
        if (computador === 2) {
            setJogadaPc('✌️')
        }
        if (computador === 3) {
            setJogadaPc('🖐️')
        }

        if (a === 1 && computador === 2) {

            setPlacar(Placar + 1)
            setJogo('Vitoria')


        } else if (a === 1 && computador === 3) {

            setPlacarPc(PlacarPc + 1)
            setJogo('Derrota')

        } else if (a === 1 && computador === 1) {

            setJogo('Empate')

        }
        if (a === 2 && computador === 3) {

            setPlacar(Placar + 1)
            setJogo('Vitoria')

        } else if (a === 2 && computador === 1) {

            setPlacarPc(PlacarPc + 1)
            setJogo('Derrota')

        } else if (a === 2 && computador === 2) {

            setJogo('Empate')

        }
        if (a === 3 && computador === 1) {

            setPlacar(Placar + 1)
            setJogo('Vitoria')

        } else if (a === 3 && computador === 2) {

            setPlacarPc(PlacarPc + 1)
            setJogo('Derrota')

        } else if (a === 3 && computador === 3) {

            setJogo('Empate')

        }
    }
   


    function VisibleNome() {
        if (Name === 'Jogador' || Name === '' || Name === ' ') {
            tocar(2)
            setTimeout(() => {
                alert('Coloque seu nome')
            }, 250);

            return
        }
        tocar(3)
        setNomeVisible(false)
        setMostrarNome(Name)
    }
    function DefinirNome(e) {
        setNome(e.target.value)
    }
    return (
        <div className={Styles.home}>
            <h1>Pedra Papel Tesoura</h1>

            {NomeVisible && <Nome placeholder='Defina seu nome' ShowNomeVisible={VisibleNome} nome={DefinirNome} />}
            <div>
                <h2>{MostrarName}:{Placar} <span>x</span>  Computador:{PlacarPc}</h2>
                <p>{Jogada} : {JogadaPc}</p>
            </div>

            <section>
                <button onClick={() => JoKenPo(1)}>👊</button>
                <button onClick={() => JoKenPo(2)}>✌️</button>
                <button onClick={() => JoKenPo(3)}>🖐️</button>
            </section>
            <h3>{jogo}</h3>
        </div>
    );
}

export default Home;
