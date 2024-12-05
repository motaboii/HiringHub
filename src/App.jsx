import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from './components/ui/button'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ThemeProvider } from "@/components/theme-provider"
import AppLayout from './layout/app-layout'
import LandingPage from './pages/landing'
import OnboardingPage from './pages/onboarding'
import JobListingPage from './pages/job-listing'
import JobPage from './pages/job'
import SavedJobsPage from './pages/saved-jobs'
import PostJobsPage from './pages/post-jobs'
import MyJobPage from './pages/myjob'

const router = createBrowserRouter([{
  element: <AppLayout />,
  children: [{

    path: "/",
    element: <LandingPage />
  },
  {

    path: "/onboarding",
    element: <OnboardingPage />
  },
  {

    path: "/joblisting",
    element: <JobListingPage />
  },
  {

    path: "/job/:id",
    element: <JobPage />
  },
  {

    path: "/saved-jobs",
    element: <SavedJobsPage />
  },
  {

    path: "/post-jobs",
    element: <PostJobsPage />
  },
  {

    path: "/my-jobs",
    element: <MyJobPage />
  }

  ]

}
])

function App() {

  return (

    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
    </ThemeProvider>

  )
}

export default App
