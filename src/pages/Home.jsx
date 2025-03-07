import React, {useState} from 'react';
import AvailableDashboard from '../components/AvailableDashboard';
import CreateModal from '../components/CreateModal';

function Home() {
    const [dashboards, setDashboards] = useState([])
    const [modalIsOpen, setIsOpen] = useState(false)

    function openModal() {
        setIsOpen(true);
    }
    
  return (
    <div className="text-center">
      <h1 className="text-2xl text-start font-extrabold p-2 text-[#062F6F] h-12 bg-[#D0DBF8]">Analytics Dashboard</h1>

      <div className='mt-7'>
        <h1 className='text-3xl font-bold text-gray-700'>Create your own Analysis Dashboards</h1>
        <button onClick={openModal} className="h-8 px-2 mt-2 bg-[#062F6F] rounded-md text-white">Create Dashboard</button>
      </div>
      
      <CreateModal dashboards={dashboards} setDashboards={setDashboards} modalIsOpen={modalIsOpen} setIsOpen={setIsOpen} />
      <AvailableDashboard dashboards={dashboards} />
    </div>
  )
}

export default Home