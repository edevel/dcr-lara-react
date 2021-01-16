import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

const Modal = (props) => {
    return (
        <div className={props.modal.open?'d-block modal':'modal'} id="mainModal">
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                <h5 className="modal-title">{props.modal.modalTitle}</h5>
                    <button className="shiny" onClick={props.modalClose}>
                        <FontAwesomeIcon icon={faTimes} />   
                    </button>
                </div>
                <div className="modal-body">
                    <p>{props.modal.modalMessage}</p>
                </div>
                <div className="modal-footer">
                    {props.modal.modalBtn1?
                        <button type="button" className="btn shiny" onClick={props.modalClose} data-bs-dismiss="modal">{props.modal.modalBtn1}</button>
                    :''}
                    {props.modal.modalBtn2?
                        <button type="button" className="btn shiny" onClick={props.modalClose}>{props.modal.modalBtn2}</button>
                    :''}
                </div>
                </div>
            </div>
        </div>
    )
}

export default Modal
