import './Rodape.css'

const Rodape = () => {
    return (
        <footer className='footer'>
            <section className='social-media'>
                <ul>
                    <li>
                        <a href="" target='_blank'>
                            <img src='/imagens/fb.png' alt='facebook' />
                        </a>
                    </li>
                    <li>
                        <a href="" target='_blank'>
                            <img src='/imagens/tw.png' alt='Twitter' />
                        </a>
                    </li>
                    <li>
                        <a href="" target='_blank'>
                            <img src='/imagens/ig.png' alt='Instagram' />
                        </a>
                    </li>
                </ul>
            </section>
            <section className='logotipo'>
                <img src='/imagens/logo.png' alt='logotipo' />
            </section>
            <section className='desenvolvido'>
                <p>Desenvolvido por Alura</p>
            </section>
        </footer>
    )
}

export default Rodape
