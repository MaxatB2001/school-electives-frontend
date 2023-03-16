import React, { createContext } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import CourseStore from './store/course-store'
import JournalStore from './store/journal-store'
import SchedultStore from './store/schedule-store'
import UserStore from './store/user-store'

export const Context = createContext(null);

ReactDOM.createRoot(document.getElementById('root')).render(
    <Context.Provider value={{
      user: new UserStore(),
      schedule: new SchedultStore(),
      course: new CourseStore(),
      journal: new JournalStore(),
    }}>
      <App />
    </Context.Provider>
)
