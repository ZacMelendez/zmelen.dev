import { useRef, useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

function useRecaptcha() {
  const ref = useRef();
  const [siteKey] = useState(process.env.REACT_APP_SITEKEY);
  const [token, setToken] = useState(null);

  const validate = async () => {
    const result = await ref.current.executeAsync();
    setToken(result);
    if (result) return true;
    return false;
  };

  return {
    ReCAPTCHA,
    ref,
    siteKey,
    validate,
    token,
  };
}

export default useRecaptcha;
