import React from 'react';
import { Link } from 'react-router-dom';
import DashboardImg from "../Images/DashboardImg.png"
import PropTypes from 'prop-types';


function AvailableDashboard({dashboards}) {
    
  return (
    <div className='absolute bottom-10'>
    {Array.isArray(dashboards) && dashboards.length ? (
      <h2 className='text-2xl font-bold text-[#062F6F] text-left px-5 mb-5'>Available Dashboards</h2>
    ) : (
      <h2 className='text-2xl font-bold text-[#062F6F] text-left px-5 mb-5'>No Dashboards Available</h2>
    )}
        <div className='flex ' >
       {dashboards.map((dashboard, index) => (
            <div className='flex flex-col text-start shadow-md w-52 rounded-md m-4' key={index}>
                <img src={DashboardImg} alt="dashboardImage" />
                <h2 className='text-lg ml-3 font-bold'>{dashboard.name}</h2>
                <p className='flex-1 ml-3'>{dashboard.description}</p>
                <Link className="border border-slate-800 hover:bg-[#D0DBF8] rounded-md text-center m-2 p-1 text-sm" to={`/dashboard/${dashboard.path}`}>View Dashboard</Link>
            </div>
       ))}
       </div>
      </div>
  )
}

AvailableDashboard.propTypes = {
  dashboards: PropTypes.array.isRequired
};

export default AvailableDashboard