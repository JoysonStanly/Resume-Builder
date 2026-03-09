
import { FilePenLineIcon, PencilIcon, PlusIcon, TrashIcon, UploadCloud, UploadCloudIcon, XIcon } from 'lucide-react'
import React, { useState } from 'react'
import { dummyResumeData } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {

  const colors = ["#9333ea", "#d97706", "#dc2626", "#0284c7", "#16a34a"]

  const [allResumes, setAllResumes] = useState(dummyResumeData)
  const [showCreateResume, setShowCreateResume] = useState(false)
  const [showUploadResume, setShowUploadResume] = useState(false)
  const [title, setTitle] = useState('')
  const [resume, setResume] = useState(null)
  const [editResumeId, setEditResumeId] = useState('')

  const navigate = useNavigate()

 
  const createResume = (event) => {
    event.preventDefault()

    const newResume = {
      _id: Date.now().toString(),
      title: title,
      updatedAt: new Date()
    }

    setAllResumes([...allResumes, newResume])

    setTitle('')
    setShowCreateResume(false)

    navigate(`/app/builder/${newResume._id}`)
  }

  
  const uploadResume = (event) => {
    event.preventDefault()

    const newResume = {
      _id: Date.now().toString(),
      title: title,
      updatedAt: new Date()
    }

    setAllResumes([...allResumes, newResume])

    setTitle('')
    setResume(null)
    setShowUploadResume(false)

    navigate(`/app/builder/${newResume._id}`)
  }

  // Edit Resume
  const editTitle = (event) => {
    event.preventDefault()

    setAllResumes(
      allResumes.map(resume =>
        resume._id === editResumeId
          ? { ...resume, title }
          : resume
      )
    )

    setTitle('')
    setEditResumeId('')
  }

  // Delete Resume
  const deleteResume = (resumeId) => {

    const confirmDelete = window.confirm('Are you sure you want to delete this resume?')

    if (confirmDelete) {
      setAllResumes(allResumes.filter(resume => resume._id !== resumeId))
    }
  }

  return (
    <div>
      <div className='max-w-7xl mx-auto px-4 py-8'>

        <p className='text-2xl font-medium mb-6 sm:hidden'>
          Welcome
        </p>

        <div className='flex gap-4'>

          {/* Create Resume */}
          <button
            onClick={() => setShowCreateResume(true)}
            className='w-full bg-white sm:max-w-36 h-48 flex flex-col items-center justify-center rounded-lg gap-2 text-slate-600 border border-dashed border-slate-300 hover:shadow-lg'
          >
            <PlusIcon className='size-11 p-2.5 bg-indigo-500 text-white rounded-full' />
            <p className='text-sm'>Create Resume</p>
          </button>

          {/* Upload Resume */}
          <button
            onClick={() => setShowUploadResume(true)}
            className='w-full bg-white sm:max-w-36 h-48 flex flex-col items-center justify-center rounded-lg gap-2 text-slate-600 border border-dashed border-slate-300 hover:shadow-lg'
          >
            <UploadCloudIcon className='size-11 p-2.5 bg-purple-500 text-white rounded-full' />
            <p className='text-sm'>Upload Existing</p>
          </button>

        </div>

        <hr className='border-slate-300 my-6 sm:w-[305px]' />

        {/* Resume Cards */}
        <div className="grid grid-cols-2 sm:flex flex-wrap gap-4">

          {allResumes.map((resume, index) => {

            const baseColor = colors[index % colors.length]

            return (
              <button
                key={resume._id}
                onClick={() => navigate(`/app/builder/${resume._id}`)}
                className='relative w-full sm:max-w-36 h-48 flex flex-col items-center justify-center rounded-lg gap-2 border hover:shadow-lg'
                style={{
                  background: `linear-gradient(135deg, ${baseColor}10, ${baseColor}40)`,
                  borderColor: baseColor + '40'
                }}
              >

                <FilePenLineIcon
                  className="size-7"
                  style={{ color: baseColor }}
                />

                <p
                  className='text-sm text-center px-2'
                  style={{ color: baseColor }}
                >
                  {resume.title}
                </p>

                <p
                  className='absolute bottom-1 text-[11px] px-2 text-center'
                  style={{ color: baseColor + '90' }}
                >
                  Updated on {new Date(resume.updatedAt).toLocaleDateString()}
                </p>

                <div
                  onClick={e => e.stopPropagation()}
                  className='absolute top-1 right-1 flex items-center gap-1'
                >

                  <TrashIcon
                    onClick={() => deleteResume(resume._id)}
                    className="size-6 p-1 hover:bg-white rounded"
                  />

                  <PencilIcon
                    onClick={() => {
                      setEditResumeId(resume._id)
                      setTitle(resume.title)
                    }}
                    className="size-6 p-1 hover:bg-white rounded"
                  />

                </div>

              </button>
            )
          })}

        </div>

        {/* Create Resume Modal */}
        {showCreateResume && (

          <form
            onSubmit={createResume}
            onClick={() => setShowCreateResume(false)}
            className='fixed inset-0 bg-black/70 flex items-center justify-center'
          >

            <div
              onClick={e => e.stopPropagation()}
              className='relative bg-white rounded-lg w-full max-w-sm p-6'
            >

              <h2 className='text-xl font-bold mb-4'>Create Resume</h2>

              <input
                type="text"
                placeholder='Enter resume title'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className='w-full px-4 py-2 mb-4 border rounded'
                required
              />

              <button className='w-full py-2 bg-green-600 text-white rounded'>
                Create Resume
              </button>

              <XIcon
                className='absolute top-4 right-4 cursor-pointer'
                onClick={() => {
                  setShowCreateResume(false)
                  setTitle('')
                }}
              />

            </div>

          </form>
        )}

        {/* Upload Resume Modal */}
        {showUploadResume && (

          <form
            onSubmit={uploadResume}
            onClick={() => setShowUploadResume(false)}
            className='fixed inset-0 bg-black/70 flex items-center justify-center'
          >

            <div
              onClick={e => e.stopPropagation()}
              className='relative bg-white rounded-lg w-full max-w-sm p-6'
            >

              <h2 className='text-xl font-bold mb-4'>Upload Resume</h2>

              <input
                type="text"
                placeholder='Enter resume title'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className='w-full px-4 py-2 mb-4 border rounded'
                required
              />

              <label htmlFor="resume-input" className="block text-sm text-slate-700">

                Select resume file

                <div className='flex flex-col items-center justify-center gap-2 border border-dashed rounded-md p-6 my-4 cursor-pointer'>

                  {resume ? (
                    <p>{resume.name}</p>
                  ) : (
                    <>
                      <UploadCloud className='size-12' />
                      <p>Upload Resume</p>
                    </>
                  )}

                </div>

              </label>

              <input
                type="file"
                id='resume-input'
                hidden
                accept='.pdf'
                onChange={(e) => setResume(e.target.files[0])}
              />

              <button className='w-full py-2 bg-green-600 text-white rounded'>
                Upload Resume
              </button>

              <XIcon
                className='absolute top-4 right-4 cursor-pointer'
                onClick={() => {
                  setShowUploadResume(false)
                  setTitle('')
                }}
              />

            </div>

          </form>
        )}

        {/* Edit Resume Modal */}
        {editResumeId && (

          <form
            onSubmit={editTitle}
            onClick={() => setEditResumeId('')}
            className='fixed inset-0 bg-black/70 flex items-center justify-center'
          >

            <div
              onClick={e => e.stopPropagation()}
              className='relative bg-white rounded-lg w-full max-w-sm p-6'
            >

              <h2 className='text-xl font-bold mb-4'>Edit Resume Title</h2>

              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className='w-full px-4 py-2 mb-4 border rounded'
                required
              />

              <button className='w-full py-2 bg-green-600 text-white rounded'>
                Update
              </button>

              <XIcon
                className='absolute top-4 right-4 cursor-pointer'
                onClick={() => {
                  setEditResumeId('')
                  setTitle('')
                }}
              />

            </div>

          </form>
        )}

      </div>
    </div>
  )
}

export default Dashboard

