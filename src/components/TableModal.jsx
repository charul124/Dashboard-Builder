import Modal from 'react-modal';
import PropTypes from 'prop-types';
import TableData from '../data/tableData.json';
import React, {useState, useEffect} from 'react'

function TableModal({id, setHeadings, IsOpen, setIsOpen, handleHeadings}) {
    const [selectedHeadings, setSelectedHeadings] = useState();

    useEffect(() => {
        const newHeadings = [];
        //for storing all the headings from the data
        console.log("The headings are being stored");
        Object.values(TableData).forEach((row) => {
          Object.keys(row).forEach((key) => {
            if (!newHeadings.includes(key)) {
              newHeadings.push(key);
            }
          });
        });
        console.log("The new Headings are : ", newHeadings);
        setSelectedHeadings(newHeadings)
      }, [IsOpen]);

    //function to handle the selected headings
    const handleHeadingChange = (event) => {
        const { name, checked } = event.target;
        setSelectedHeadings(prevState => 
            checked ? [...prevState, name] : prevState.filter(heading => heading !== name)
        );
    };

    //function to save the selected headings
    const handleSave = () => {
        setHeadings(selectedHeadings);
        console.log("selected headings are : ", selectedHeadings);
        handleHeadings(id, selectedHeadings);
        closeModal();
    };

    //function to close the modal
    function closeModal() {
        setIsOpen(false);
    }

    const modalStyles = {
        overlay: {
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
        },
    };
    
    return (
        <div>
            <Modal
                className="w-1/2 absolute top-24 left-1/4 text-center bg-white shadow rounded p-10"
                isOpen={IsOpen}
                style={modalStyles}
                onRequestClose={closeModal}>
                <h1 className='font-bold mb-3'>Select the columns you want to display</h1>
                {selectedHeadings?.map(element => (
                    <div className='flex justify-between' key={element}> 
                        <label htmlFor={element}>{element}</label>
                        <input 
                            onChange={handleHeadingChange} 
                            type="checkbox" 
                            name={element} 
                            checked={selectedHeadings.includes(element)}
                        />
                    </div>
                ))}
                <button className='bg-[#062F6F] hover:bg-[#5779E8] text-white rounded w-full p-1 mt-4' onClick={handleSave}>Save</button>
            </Modal>
        </div>
    );
}
TableModal.propTypes = {
    id: PropTypes.string.isRequired,
    headings: PropTypes.array,
    IsOpen : PropTypes.bool,
    setIsOpen : PropTypes.func,
    setHeadings : PropTypes.func,
    handleHeadings : PropTypes.func
}
export default TableModal