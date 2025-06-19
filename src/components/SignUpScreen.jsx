import '../styles/SignUpScreen.css';
import { useRef, useState } from 'react';
import { auth } from '../../firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

const SignUpScreen = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const [loading, setLoading] = useState(false);


  const register = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const authUser = await createUserWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passwordRef.current.value
      );
      console.log('User registered:', authUser);
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  const signIn = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const authUser = await signInWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passwordRef.current.value
      );
      console.log('User signed in:', authUser);
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };


  return (
    <div className="signUpScreen">
      <form>
        <h1>Sign In</h1>
        <input
          ref={emailRef}
          type="email"
          placeholder="Email"
          required
          disabled={loading}
        />
        <input
          ref={passwordRef}
          type="password"
          placeholder="Password"
          required
          disabled={loading}
        />
        <button
          type="submit"
          onClick={signIn}
          disabled={loading}
        >
          {loading ? 'Signing In...' : 'Sign In'}
        </button>

        <h4>
          <span className='signUpScreen-gray'>New to Netflix? </span>
          <span
            className='signUpScreen-link'
            onClick={register}
            style={{ cursor: loading ? 'not-allowed' : 'pointer' }}
          >
            {loading ? 'Creating Account...' : 'Sign Up now'}
          </span>
        </h4>
      </form>
    </div>
  );
};

export default SignUpScreen;