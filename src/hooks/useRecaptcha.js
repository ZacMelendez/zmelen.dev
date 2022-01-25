import { useRef, useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import config from './config.json';
const env = process.env.NODE_ENV;
const is_DEV = env === 'development';

function useRecaptcha() {
  const ref = useRef();
  const [siteKey] = useState(config.recaptcha.sitekey);
  const [token, setToken] = useState(null);

  const validate = async () => {
    if (is_DEV) return true;

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
