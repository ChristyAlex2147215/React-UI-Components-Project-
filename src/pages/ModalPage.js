import React, { useState } from 'react'
import Button from '../components/Button'
import Modal from '../components/Modal';

const ModalPage = () => {
    const [showModal,setShowModal]=useState(false);

    const OpenModal=()=>
    {
        console.log("Opening the modal")
        setShowModal(!showModal);
    }

    const actionBar=<div><Button primary onClick={setShowModal}>Accept All</Button></div>

    const model=<Modal setShowModal={setShowModal} actionBar={actionBar} >
        <p>Accert the Cookie policies to continues..</p>
    </Modal>
  return (
    <div>
        <Button primary onClick={OpenModal}>Go Modal</Button>
        {showModal && model}
        <p>Loafdshfiqaubrgnbiuoal daskjflhibnfadk afisdbfjkb n akdsfqbhiwe Loafdshfiqaubrgnbiuoal daskjflhibnfadk afisdbfjkb n akdsfqbhiwe Loafdshfiqaubrgnbiuoal daskjflhibnfadk afisdbfjkb n akdsfqbhiwe Loafdshfiqaubrgnbiuoal daskjflhibnfadk afisdbfjkb n akdsfqbhiwe Loafdshfiqaubrgnbiuoal daskjflhibnfadk afisdbfjkb n akdsfqbhiwe Loafdshfiqaubrgnbiuoal daskjflhibnfadk afisdbfjkb n akdsfqbhiwe </p>
        <p>Loafdshfiqaubrgnbiuoal daskjflhibnfadk afisdbfjkb n akdsfqbhiwe Loafdshfiqaubrgnbiuoal daskjflhibnfadk afisdbfjkb n akdsfqbhiwe Loafdshfiqaubrgnbiuoal daskjflhibnfadk afisdbfjkb n akdsfqbhiwe Loafdshfiqaubrgnbiuoal daskjflhibnfadk afisdbfjkb n akdsfqbhiwe Loafdshfiqaubrgnbiuoal daskjflhibnfadk afisdbfjkb n akdsfqbhiwe Loafdshfiqaubrgnbiuoal daskjflhibnfadk afisdbfjkb n akdsfqbhiwe </p>
        <p>Loafdshfiqaubrgnbiuoal daskjflhibnfadk afisdbfjkb n akdsfqbhiwe Loafdshfiqaubrgnbiuoal daskjflhibnfadk afisdbfjkb n akdsfqbhiwe Loafdshfiqaubrgnbiuoal daskjflhibnfadk afisdbfjkb n akdsfqbhiwe Loafdshfiqaubrgnbiuoal daskjflhibnfadk afisdbfjkb n akdsfqbhiwe Loafdshfiqaubrgnbiuoal daskjflhibnfadk afisdbfjkb n akdsfqbhiwe Loafdshfiqaubrgnbiuoal daskjflhibnfadk afisdbfjkb n akdsfqbhiwe </p>
        <p>Loafdshfiqaubrgnbiuoal daskjflhibnfadk afisdbfjkb n akdsfqbhiwe Loafdshfiqaubrgnbiuoal daskjflhibnfadk afisdbfjkb n akdsfqbhiwe Loafdshfiqaubrgnbiuoal daskjflhibnfadk afisdbfjkb n akdsfqbhiwe Loafdshfiqaubrgnbiuoal daskjflhibnfadk afisdbfjkb n akdsfqbhiwe Loafdshfiqaubrgnbiuoal daskjflhibnfadk afisdbfjkb n akdsfqbhiwe Loafdshfiqaubrgnbiuoal daskjflhibnfadk afisdbfjkb n akdsfqbhiwe </p>
        <p>Loafdshfiqaubrgnbiuoal daskjflhibnfadk afisdbfjkb n akdsfqbhiwe Loafdshfiqaubrgnbiuoal daskjflhibnfadk afisdbfjkb n akdsfqbhiwe Loafdshfiqaubrgnbiuoal daskjflhibnfadk afisdbfjkb n akdsfqbhiwe Loafdshfiqaubrgnbiuoal daskjflhibnfadk afisdbfjkb n akdsfqbhiwe Loafdshfiqaubrgnbiuoal daskjflhibnfadk afisdbfjkb n akdsfqbhiwe Loafdshfiqaubrgnbiuoal daskjflhibnfadk afisdbfjkb n akdsfqbhiwe </p>
        <p>Loafdshfiqaubrgnbiuoal daskjflhibnfadk afisdbfjkb n akdsfqbhiwe Loafdshfiqaubrgnbiuoal daskjflhibnfadk afisdbfjkb n akdsfqbhiwe Loafdshfiqaubrgnbiuoal daskjflhibnfadk afisdbfjkb n akdsfqbhiwe Loafdshfiqaubrgnbiuoal daskjflhibnfadk afisdbfjkb n akdsfqbhiwe Loafdshfiqaubrgnbiuoal daskjflhibnfadk afisdbfjkb n akdsfqbhiwe Loafdshfiqaubrgnbiuoal daskjflhibnfadk afisdbfjkb n akdsfqbhiwe </p>
        <p>Loafdshfiqaubrgnbiuoal daskjflhibnfadk afisdbfjkb n akdsfqbhiwe Loafdshfiqaubrgnbiuoal daskjflhibnfadk afisdbfjkb n akdsfqbhiwe Loafdshfiqaubrgnbiuoal daskjflhibnfadk afisdbfjkb n akdsfqbhiwe Loafdshfiqaubrgnbiuoal daskjflhibnfadk afisdbfjkb n akdsfqbhiwe Loafdshfiqaubrgnbiuoal daskjflhibnfadk afisdbfjkb n akdsfqbhiwe Loafdshfiqaubrgnbiuoal daskjflhibnfadk afisdbfjkb n akdsfqbhiwe </p>
        <p>Loafdshfiqaubrgnbiuoal daskjflhibnfadk afisdbfjkb n akdsfqbhiwe Loafdshfiqaubrgnbiuoal daskjflhibnfadk afisdbfjkb n akdsfqbhiwe Loafdshfiqaubrgnbiuoal daskjflhibnfadk afisdbfjkb n akdsfqbhiwe Loafdshfiqaubrgnbiuoal daskjflhibnfadk afisdbfjkb n akdsfqbhiwe Loafdshfiqaubrgnbiuoal daskjflhibnfadk afisdbfjkb n akdsfqbhiwe Loafdshfiqaubrgnbiuoal daskjflhibnfadk afisdbfjkb n akdsfqbhiwe </p>
        <p>Loafdshfiqaubrgnbiuoal daskjflhibnfadk afisdbfjkb n akdsfqbhiwe Loafdshfiqaubrgnbiuoal daskjflhibnfadk afisdbfjkb n akdsfqbhiwe Loafdshfiqaubrgnbiuoal daskjflhibnfadk afisdbfjkb n akdsfqbhiwe Loafdshfiqaubrgnbiuoal daskjflhibnfadk afisdbfjkb n akdsfqbhiwe Loafdshfiqaubrgnbiuoal daskjflhibnfadk afisdbfjkb n akdsfqbhiwe Loafdshfiqaubrgnbiuoal daskjflhibnfadk afisdbfjkb n akdsfqbhiwe </p>
        <p>Loafdshfiqaubrgnbiuoal daskjflhibnfadk afisdbfjkb n akdsfqbhiwe Loafdshfiqaubrgnbiuoal daskjflhibnfadk afisdbfjkb n akdsfqbhiwe Loafdshfiqaubrgnbiuoal daskjflhibnfadk afisdbfjkb n akdsfqbhiwe Loafdshfiqaubrgnbiuoal daskjflhibnfadk afisdbfjkb n akdsfqbhiwe Loafdshfiqaubrgnbiuoal daskjflhibnfadk afisdbfjkb n akdsfqbhiwe Loafdshfiqaubrgnbiuoal daskjflhibnfadk afisdbfjkb n akdsfqbhiwe </p>
        <p>Loafdshfiqaubrgnbiuoal daskjflhibnfadk afisdbfjkb n akdsfqbhiwe Loafdshfiqaubrgnbiuoal daskjflhibnfadk afisdbfjkb n akdsfqbhiwe Loafdshfiqaubrgnbiuoal daskjflhibnfadk afisdbfjkb n akdsfqbhiwe Loafdshfiqaubrgnbiuoal daskjflhibnfadk afisdbfjkb n akdsfqbhiwe Loafdshfiqaubrgnbiuoal daskjflhibnfadk afisdbfjkb n akdsfqbhiwe Loafdshfiqaubrgnbiuoal daskjflhibnfadk afisdbfjkb n akdsfqbhiwe </p>
    </div>
  )
}

export default ModalPage