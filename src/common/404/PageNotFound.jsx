import { useState, useEffect } from "react";
import { ReactComponent as Image404 } from "images/img-404.svg";
import "./404.css";
import Loader from "common/spinner/spinner";
import { useNavigate } from "react-router-dom";

const PageNotFound = ({ loading, msg, details, Image }) => {
  const [timer, setTimer] = useState(5);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(timer - 1);
    }, 1000);
    return () => {
      clearInterval(interval);
      if (timer === 0) {
        return navigate("/plays");
      }
    };
  }, [timer]);

  if (loading) {
    return <Loader />;
  }

  return (
    <main className='page-404'>
      {Image ? (
        <img src={Image} alt='under-development' className='under-development' />
      ) : (
        <Image404 className='page-404-image' />
      )}
      <p className='page-404-lead'>{msg}</p>
      <p className='page-404-desc'>{details}. Redirecting in {timer} sec.</p>
    </main>
  );
};

PageNotFound.defaultProps = {
  msg: "Looks like you are lost",
  details: "Why don't you go back to home.",
  Image: null,
};

export default PageNotFound;
