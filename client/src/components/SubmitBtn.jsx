import { useNavigation } from 'react-router-dom';

const SubmitBtn = ({ text, submitting }) => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';
  return (
    <button type="button" className="btn btn-primary btn-block">
      {isSubmitting ? submitting : text}
    </button>
  );
};
export default SubmitBtn;
