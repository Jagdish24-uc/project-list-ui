// src/components/ProjectList.jsx
import React, { useState } from 'react';
import { projects } from '../data';

function ProjectList() {
  const [filter, setFilter] = useState('All Status');

  const filteredProjects = filter === 'All Status'
    ? projects
    : projects.filter(project => project.status === filter);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center mb-6 bg-purple-600 p-4 rounded-lg">
        <h1 className="text-2xl font-semibold text-white">Project List</h1>
        <div className="flex space-x-2">
          <button className="px-4 py-2 bg-white text-purple-600 rounded hover:bg-purple-100">
            + New Project
          </button>
          <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300">
            AI Project
          </button>
          <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300">
            Finalize Specs
          </button>
          <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300">
            AI Summary
          </button>
        </div>
      </div>

      {/* Filter Buttons */}
      <div className="flex space-x-4 mb-6">
        <button
          onClick={() => setFilter('All Status')}
          className={`px-4 py-2 rounded ${filter === 'All Status' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
        >
          All Status
        </button>
        <button
          onClick={() => setFilter('Open')}
          className={`px-4 py-2 rounded ${filter === 'Open' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
        >
          Open
        </button>
        <button
          onClick={() => setFilter('At-Risk')}
          className={`px-4 py-2 rounded ${filter === 'At-Risk' ? 'bg-red-500 text-white' : 'bg-gray-200 text-gray-700'}`}
        >
          At-Risk
        </button>
        <button
          onClick={() => setFilter('Blocked')}
          className={`px-4 py-2 rounded ${filter === 'Blocked' ? 'bg-red-500 text-white' : 'bg-gray-200 text-gray-700'}`}
        >
          Blocked
        </button>
        <button
          onClick={() => setFilter('On-Track')}
          className={`px-4 py-2 rounded ${filter === 'On-Track' ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-700'}`}
        >
          On-Track
        </button>
      </div>

      {/* Project Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
          >
            <h2 className="text-lg font-semibold text-gray-800 mb-2">{project.title}</h2>
            <p className="text-sm text-gray-600 mb-1">{project.team}</p>
            <div className="flex items-center space-x-2 mb-3">
              <span className="text-xs text-gray-500">{project.startDate} - {project.endDate}</span>
              <span
                className={`text-xs px-2 py-1 rounded-full ${
                  project.status === 'Open' ? 'bg-green-100 text-green-700' :
                  project.status === 'At-Risk' ? 'bg-red-100 text-red-700' :
                  project.status === 'Blocked' ? 'bg-red-100 text-red-700' :
                  project.status === 'On-Track' ? 'bg-green-100 text-green-700' :
                  'bg-gray-100 text-gray-700'
                }`}
              >
                {project.status}
              </span>
            </div>
            <p className="text-sm text-gray-700 mb-3">{project.insights}</p>
            <div className="mt-4">
              <p className="text-xs text-gray-500 mb-1">Availability:</p>
              <div className="flex justify-between text-xs text-gray-600">
                <span>Dev: {project.availability.dev}</span>
                <span>Design: {project.availability.design}</span>
                <span>DA: {project.availability.da}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectList;