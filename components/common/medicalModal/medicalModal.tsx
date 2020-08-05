import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';    


const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    }
  };
Modal.setAppElement('#__next')
 
interface Modal {
  children?:string;
  ModalComponent?:any, 
  header?:any, 
  data?:[],
  customClass?:string;
}

function MedicalModal({children, ModalComponent, header, data, customClass}){
   
    const [modalIsOpen,setIsOpen] = React.useState(false);
    function openModal() {
      setIsOpen(true);
    }
   
    function afterOpenModal() {
      // references are now sync'd and can be accessed.
      // subtitle.style.color = '#f00';
    }
   
    function closeModal(){
      setIsOpen(false);
    }
   
      return (
        <div className="modal-wrapper">
          {/* <button onClick={openModal}>Open Modal</button> */}
           <div onClick={openModal}>{children} </div>
          <Modal
            isOpen={modalIsOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
          >
            <div className="modal-header-wrapper">
                <button className="close" onClick={closeModal}><i className="icon-close"></i></button>
                  <h2 className="title">{header.title}</h2> 
                  <span className="sub-title">{header.subTitle}</span>
             </div>
             <div className={customClass ? `${customClass} modal-content-wrapper` : "modal-content-wrapper"}>
              <ModalComponent {...data} closeModal={closeModal}/>
            </div>
             
          </Modal>
        </div>
      );
  }

  export default MedicalModal;