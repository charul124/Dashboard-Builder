import { useState, useEffect } from "react"
import React from "react";
import Modal from 'react-modal';
import PropTypes from 'prop-types';


function CreateModal({dashboards, setDashboards, modalIsOpen, setIsOpen}) {
    
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [path, setPath] = useState("")

    function handleNameChange(e) {
        setName(e.target.value)
    }
    function handleDescriptionChange(e) {
        setDescription(e.target.value)
    }
    function handlePathChange(e) {
        setPath(e.target.value)
    }

    useEffect(() => {
       const a =  JSON.parse(localStorage.getItem("dashboards")) || [] 
       setDashboards(a)
    },[setDashboards]) 
    
    function handleSubmit(e) {
        e.preventDefault()
        const newDashboard = {
            name: name,
            description: description,
            path: path
        }
        
        localStorage.setItem(`dashboard_${path}`, JSON.stringify(newDashboard))
        const newDash = [...dashboards, newDashboard]
        setDashboards(newDash)
        localStorage.setItem(`dashboards`, JSON.stringify(newDash))
        setName("")
        setDescription("")
        setPath("")
    }


    function closeModal() {
      setIsOpen(false);
    }

    const modalStyles = {
        overlay: {
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
        },
    };

  return (
    <div className="">
      <Modal
        className="h-1/2 absolute top-24 left-1/3 rounded w-1/3 bg-slate-50 shadow"
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={modalStyles}

      >
        <div className="mt-3">
                <form className="p-5" onSubmit={handleSubmit}>
                    <div className="flex mb-3 flex-col">
                        <label className="text-lg font-bold" htmlFor="dashboard-name">Dashboard Name:</label>
                        <input 
                            className="rounded p-2 border"
                            onChange={handleNameChange}
                            placeholder="Your Dashboard Name" 
                            type="text"
                            value={name} 
                            name="dashboard-name" required />
                    </div>
                    <div className="flex mb-3 flex-col">
                        <label className="text-lg font-bold" htmlFor="dashboard-description">Dashboard Description:</label>
                        <textarea 
                            className="rounded p-2 border"
                            onChange={handleDescriptionChange}
                            placeholder="Add Description" 
                            name="dashboard-description" 
                            value={description} 
                            id="dashboard-description" required></textarea>
                    </div>
                    <div className="flex flex-col">
                        <label className="text-lg font-bold" htmlFor="dashboard-path">Dashboard Path:</label>
                        <input 
                            className="rounded p-2 border"
                            onChange={handlePathChange} 
                            placeholder="Path to store your dashboard" 
                            type="text" value={path} 
                            name="dashboard-path" 
                            required />
                    </div>
                    <div>
                        <button className="bg-[#062F6F] hover:bg-[#5779E8] text-white rounded w-full p-1 mt-4" onClick={(e) => {handleSubmit(e); closeModal()}} >Submit</button>
                        <button className="bg-[#5779E8] text-white rounded w-full p-1 mt-2" onClick={closeModal}>close</button>
                    </div>
                </form>
            </div>
      </Modal>
      </div>
  )
}

CreateModal.propTypes = {
    modalIsOpen: PropTypes.bool.isRequired,
    dashboards : PropTypes.array,
    setDashboards : PropTypes.func,
    setIsOpen : PropTypes.func
}
export default CreateModal