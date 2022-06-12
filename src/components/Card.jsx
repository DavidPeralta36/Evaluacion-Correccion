import {useEffect, useState} from 'react';
import { CardBody } from './CardBody';
import { CardHeader } from './CardHeader';
import { CardFooter } from './CardFooter';
import { CardArrows } from './CardArrows';
import { act } from 'react-dom/test-utils';

export const Card = ({users, newUser})=>{
    const [actual, setActual]= useState(0);
    const [texto, setTextos]= useState({});

    const previo = () =>{
        setActual(actual-1);
        if(actual===0){
            setActual(0);
        }
    };

    const siguiente = () => {
        setActual(actual+1);
        if (actual === users.length -5 ){
            newUser();
        }
    }

    useEffect(() => {
        cambiaTextos('user');
    },[actual]);

    const cambiaTextos = (icono) => {
        switch(icono){
            case 'user':
                setTextos({
                    parrafo: 'Hi, my name is',
                    main: `${users[actual].name.title} ${users[actual].name.first} ${users[actual].name.last}`,
                    icono: 'user',
                });
                break;
            case 'email':
                setTextos({
                    parrafo: 'My email is',
                    main: `${users[actual].email}`,
                    icono: 'email',
                });
                break;    
            case 'birthday':
                setTextos({
                    parrafo: 'My birthday is',
                    main: `${users[actual].dob.date.slice(
                        8,
                        10
                    )}/${users[actual].dob.date.slice(5, 7)}/
                    ${users[actual].dob.date.slice(0, 4)}`,
                    icono: 'birthday',
                });
                break;
                case 'address':
                    setTextos({
                        parrafo: 'My address is',
                        main: `${users[actual].location.street.number} ${users[actual].location.street.name}`,
                        icono: 'address',
                    });
                break;

                case 'phone':
                    setTextos({
                        parrafo: 'My phone number is',
                        main: `${users[actual].phone}`,
                        icono: 'phone',
                    });
                break;

                case 'username':
                    setTextos({
                        parrafo: 'My username is',
                        main: `${users[actual].login.username}`,
                        icono: 'username',
                    });
                break;

                default:
                    break;
        }
    };

    return (
        <>
            <div className='card'>
                <CardHeader user={users[actual]}/>
                <CardBody textos={texto}/>
                <CardFooter user={users[actual]}
                            cambiaTextos = {cambiaTextos}
                            texto = {texto} />
                <CardArrows users={users} actual={actual} previo={previo} siguiente={siguiente}/>
            </div>

        </>
    )



}