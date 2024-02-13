import { useNavigation } from 'react-router-dom';

const SubmitBtn = ({ text, submitting }) => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';

  return (
    <button
      type="submit"
      className="btn btn-primary btn-block"
      disabled={isSubmitting}>
      {isSubmitting ? submitting : text}
    </button>
  );
};
export default SubmitBtn;
