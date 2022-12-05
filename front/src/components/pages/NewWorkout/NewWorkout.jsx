import { useState } from "react";
import ReactSelect from "react-select";
import { Link } from "react-router-dom";
import { useQuery,useMutation } from 'react-query';

import { $api } from '../../../api/api';

import Layout from "../../common/Layout";
import Alert from '../../ui/Alert/Alert';
import Field from "../../ui/Field/Field";
import Button from "../../ui/Button/Button";
import Loader from '../../ui/Loader';

import newWorkout from "../../../images/new-workout.jpg";

const NewWorkout = () => {
  const [name, setName] = useState("");
  const [exercisesCurrent, setExercisesCurrent] = useState([]);

  const { data, isSuccess } = useQuery('List exercises', () =>
  $api({
    url: '/exercises',
  }),
  {
    refetchOnWindowFocus:false,
  }
  )
  const {
		mutate,
		isLoading,
    isSuccess: isSuccessMutate,
		error,
  } = useMutation(
    "Create new workout",
    ({exIds}) =>
      $api({
        url: '/workouts',
        type: 'POST',
        body: { name, exerciseIds:exIds }
      }),
    {
      onSuccess() {
        setName('')
        setExercisesCurrent([])

      },
    }
  )

  const handleSubmit = e => {
  e.preventDefault()
  const exIds= exercisesCurrent.map(ex=>ex.value)
  mutate({exIds})
  
  };
  return (
    <>
      <Layout bgImage={newWorkout} heading="Create new workout" />
      <div className="wrapper-inner-page">
      {error && <Alert type="error" text={error} />}
        {isSuccessMutate && <Alert text='Workout created' />}
        {isLoading && <Loader />}
        <form onSubmit={handleSubmit}>
          <Field
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <Link to="/new-exercise" className="dark-link">
            Add new exercise
          </Link>
          {isSuccess && data && (
          <ReactSelect
            classNamePrefix="select2-selection"
            placeholder="Exercises..."
            title="Exercises"
            options={data.map(ex=>({
              value: ex._id,
              label: ex.name
            }))}
            value={exercisesCurrent}
            onChange={setExercisesCurrent}
            isMulti={true}
          />
          )}
          <Button text="Create" callback={() => {}} />
        </form>
      </div>
    </>
  );
};

export default NewWorkout;
