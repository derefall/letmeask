import { useContext } from 'react'
import { Link } from 'react-router-dom'
// import { AuthContext } from '../contexts/AuthContext;'
import illustrationImg from '../assets/images/illustration.svg'
import logoImg from '../assets/images/logo.svg'

import '../assets/styles/auth.scss'
import { Button } from '../components/Button'

export function NewRoom(){

    // const {user} = useContext(AuthContext);

    return (
        <div id="page-auth">
            <aside>
                <img src={illustrationImg} alt="Ilustração simbólica"/>
                <h3>Toda pergunta tem uma resposta.</h3>
                <p>Aprenda e compartilhe conhecimento com outras pessoas</p>
            </aside>
            <main>
                <div className='main-content'>
                    <img src={logoImg} alt="Logo Letmeask"/>                    
                    <h2>Criar uma nova sala</h2>

                    <form>
                        <input
                            type="text"
                            placeholder='Nome da sala'
                        />
                        <Button type="submit">Criar sala</Button>
                    </form>

                    <p>
                        Quer entrar em uma sala existente? 
                        <Link to='/'>Clique aqui</Link>
                    </p>

                </div>
            </main>
        </div>
    )
}