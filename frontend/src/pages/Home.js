import { useEffect, useState } from "react"

// components
import WorkoutDetails from "../components/WorkoutDetails"
import WorkoutForm from "../components/WorkoutForm"

const Home = () => {
  const [workouts, setWorkouts] = useState(null)

//   fetching the backend, proxy located in package.json
  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch('/api/workouts')
      const json = await response.json()

      if (response.ok) {
        setWorkouts(json)
      }
    }

    fetchWorkouts()
  }, [])

  return (
    <div className="home">
      <div className="workouts">
        {/* this only maps if there are workouts in the first place */}
        {workouts && workouts.map(workout => (
          <WorkoutDetails workout={workout} key={workout._id} />
        ))}
      </div>
      <WorkoutForm />
    </div>
  )
}

export default Home