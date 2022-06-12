export const CardFooter = ({cambiaTextos, texto})=>{
    const clase = (e) => {
        document
            .querySelectorAll('li > img')
            .forEach((icono)=> (icono.className=''));

            e.target.className='active';
            cambiaTextos(e.target.name);
    }

    return(
        <div className="card-footer">
            <ul>
                <li>
                    <img name='user' 
                        src="" 
                        alt=''
                        onMouseEnter={clase} 
                        className={texto.icono=== 'user' ? 'active' : ''}
                        id="userimg" />
                </li>
                <li>
                    <img name='email' src="" alt='' onMouseEnter={clase} className={texto.icono==='email'?'active':''}
                    id="emailimg" />
                </li>
                <li>
                    <img name='birthday' src="" alt="" onMouseEnter={clase} className={texto.icono==='birthday'?'active':''}
                    id="birtimg" />
                </li>
                <li>
                    <img name='address' src="" alt="" onMouseEnter={clase} className={texto.icono==='address'?'active':''}
                    id="addressimg" />
                </li>
                <li>
                    <img name='phone' src="" alt="" onMouseEnter={clase} className={texto.icono==='phone'?'active':''}
                    id="phoneimg" />
                </li>
                <li>
                    <img name='username' src="" alt="" onMouseEnter={clase} className={texto.icono==='username'?'active':''}
                    id="nickimg" />
                </li>
            </ul>
        </div>
    )
}